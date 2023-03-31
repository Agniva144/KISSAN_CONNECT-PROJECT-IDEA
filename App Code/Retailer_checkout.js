import React , { useState, useEffect }from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, Modal, FlatList, Keyboard, TextInput, Pressable} from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { storeData, dbref} from './database';
import {child, get, push, update } from 'firebase/database';
import CheckoutItems from './CheckoutItems';
import {
    faHome,
    faNavicon,
    faPlus,
    faUserCircle,
    faHammer,
    faLightbulb,
    faList,
    faAdd
} from "@fortawesome/free-solid-svg-icons";
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

const c1 = '#28c380', c2 = '#02b3ff';
let h3 = width*.6
let h4 = height*.3;

export default Retailer_demand = ({navigation}) => {
    const [color1, setColor1] = useState(c2);
    const [color2, setColor2] = useState(c2);
    const [color3, setColor3] = useState(c1);
    const [color4, setColor4] = useState(c2);
    const [color5, setColor5] = useState(c2);
    const [modalDis, setModalDis] = useState(false);
    const [mt, setMt] = useState('60%');
    
    const [iname, setIName] = useState('');
    const [wei, setWei] = useState('');
    const [rows, setRows] = useState([]);
    const [dep, setDep] = useState(false);
    Keyboard.addListener('keyboardDidShow', () => {setMt('30%'); });
    Keyboard.addListener('keyboardDidHide', () => {setMt('60%');});

    useEffect(() => {
        get(child(dbref, 'Retailer/Demand')).then((snapshot) => {let r = snapshot.val()?snapshot.val():[];r.reverse();setRows(r);}).catch(() => alert('You are offline. Check your connections..'));}, [dep]
    )

    const add = () => {
        setModalDis(false);
        if(iname!='' && !isNaN(parseFloat(wei))){
            get(child(dbref, 'Retailer/Demand')).then((snapshot) => {
                const updates = {};
                const data = snapshot.val()?snapshot.val():[];
                let now = new Date();
                let date = now.getDate()+'/'+(parseInt(now.getMonth())+1)+'/'+now.getFullYear();
                
                const newKey = push(child(dbref, 'Retailer/Demand')).key;
                updates['/' + 'Retailer/Demand/'+ data.length.toString()] = {id:newKey, title:[iname, wei, date]};
                update(dbref, updates);
                setIName('');
                setWei('');
                setDep(!dep);
            }).catch(() => alert('You are offline. Check your connections..'));
        }
    }

    const renderItem = (row) => {
        return(
        
        <View style={{flexDirection:'row', width:'86%', margin:'7%', marginTop:'4%', marginBottom:'4%', backgroundColor:'white', borderRadius:5, elevation:8}}>
          <TouchableOpacity style={{width:60, height:60, margin:15, elevation:6, backgroundColor:'yellow', borderRadius:5}}><Image  style={{width:60, height:60, borderRadius:5}} source={require('./assets/veg.png')}/></TouchableOpacity>
          <View style={{flexDirection: 'column', margin: 10, width:160}}>
            <Text style={{color:'black', fontWeight: '700', fontSize: 20, fontFamily:'Times-Roman'}}>{row.item.title[0]}</Text>
            <Text style={{color:'dimgray', fontSize: 17}}>Weight: {row.item.title[1]}kg</Text>
          </View>
          <TouchableOpacity style={{height:90, justifyContent:'center'}}><FontAwesomeIcon icon={faNavicon} size={25} style={{ color: '#28c380'}} /></TouchableOpacity>
        </View>
        )
    }
    const Com = <View style={{paddingTop:100, alignItems:'center'}}><Image style={{width:300, height:200}} source={require('./assets/retailer.jpg')}/>
    <Text style={{color:'grey', fontWeight:'300'}}>No Items</Text>
    </View>;

    return(
    <View style={{height:height, backgroundColor:'#e7fee9'}}>
        <LinearGradient colors={['#28c380', '#1b9862', '#00693c']}  start={{x: 0, y: 0}} end={{x: 0, y: 1}} style={{width:'100%', height:'12%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'white', fontWeight:'400', fontSize:18}}>Checkout Your Items</Text>
        </LinearGradient>
    
        <Modal animationType='slide' transparent={true} visible={modalDis} onRequestClose={()=>setModalDis(!modalDis)}>
                <View style={{marginTop:mt, ...styles.centeredView, paddingTop: 20,height:height*.35, width:width*.7, marginLeft:'15%'}}>
                <TextInput style={{...styles.textinput}} placeholder='Item Name..' placeholderTextColor={'rgb(151, 147, 147)'} value={iname} onChangeText={text => setIName(text)}/>
                <TextInput style={styles.textinput} placeholder='Weight in Kg..' placeholderTextColor={'rgb(151, 147, 147)'} keyboardType='numeric' value={wei} onChangeText={text => setWei(text)}/>
                <Pressable style={{...styles.plusCentered, marginTop:'12%'}} onPress={add}>
                    <Text style={{color:'white'}}>Add</Text>
                </Pressable>
                </View>
        </Modal>

        {/* {Com} */}
        <CheckoutItems/>
        <View style={{width:'100%', alignItems:'center', paddingTop:5}}><Text style={{color:'red'}}>Delivered within 3 hours</Text></View>

        <TouchableOpacity onPress={()=>setModalDis(true)}  style={{backgroundColor:'#191c3e', position:'absolute', left: width/2 -80, bottom:90, paddingLeft:3, width:160,height:50, borderRadius:5, ...styles.center, elevation:7}}>
            <Text style={{color:'#28c380', fontWeight:'300'}}>Track <Text style={{color:'white'}}>Your Order</Text></Text>
        </TouchableOpacity>
        
        
            
        

        <View style={{position:'absolute', borderTopWidth:1.3, borderTopColor:'rgb(234, 234, 234)', padding: 17, backgroundColor:'white', bottom:0, ...styles.center, flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
                <TouchableOpacity style={{...styles.center}} onPress={()=>{navigation.navigate('Retailer Home');}}>
                    <FontAwesomeIcon icon={faHome} size={20} style={{ color: color1}} />
                    <Text style={{color:color1, fontSize:12}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.center}} onPress={()=>{navigation.navigate('auction');}}>
                    <FontAwesomeIcon icon={faHammer} size={20} style={{ color: color5}} />
                    <Text style={{color:color5, fontSize:12}}>Auction</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.center}} onPress={()=>{navigation.navigate('Enlist Your Demand');}}>
                    <FontAwesomeIcon icon={faLightbulb} size={20} style={{ color: color2}} />
                    <Text style={{color:color2, fontSize:12}}>Demand</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.center}} onPress={()=>{setColor1(c2);setColor2(c2);setColor3(c1);setColor4(c2);setColor5(c2);navigation.navigate('Checkout items');}}>
                    <FontAwesomeIcon icon={faList} size={20} style={{ color: color3}} />
                    <Text style={{color:color3, fontSize:12}}>Checkout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.center}} onPress={()=>{navigation.navigate('Retailer Profile');}}>
                    <FontAwesomeIcon icon={faUserCircle} size={20} style={{ color: color4}} />
                    <Text style={{color:color4, fontSize:12}}>Account</Text>
                </TouchableOpacity>
            </View>
    </View>)
}

const styles = StyleSheet.create({

    center:{
        justifyContent: 'center',
        alignItems: 'center'
      },
    centeredView: {
        width:h3,
        height:h4,
        alignItems: "center",
        marginLeft:'20%',
        backgroundColor: "white",
        borderRadius: 20,
        paddingRight: 25,
        paddingLeft: 25,
        elevation: 50
    },
    textinput:{
        color: 'black',
        borderRadius:10,
        elevation:5,
        backgroundColor:'white',
        padding:10,
        width:'100%',
        marginTop:22
      },
    plusCentered:{
    height: 40,
    width:60,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 7,
    backgroundColor:'#28c380',
    elevation:7
    }
    
  });