import React, { useState, useEffect } from 'react';
import { View,StatusBar, Dimensions, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, Keyboard, TextInput,Pressable } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { storeData, dbref} from './database';
import {child, get, push, update } from 'firebase/database';
import LinearGradient from 'react-native-linear-gradient';
import RetailerItems from './RetailerItems';
import {
    faHome,
    faRefresh,
    faHammer,
    faUserCircle,
    faSearch,
    faLightbulb,
    faList
} from "@fortawesome/free-solid-svg-icons";
import { ScrollView } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');
const c1 = '#28c380', c2 = '#02b3ff';

export default Retailer_home = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [color1, setColor1] = useState(c1);
    const [color2, setColor2] = useState(c2);
    const [color3, setColor3] = useState(c2);
    const [color4, setColor4] = useState(c2);
    const [color5, setColor5] = useState(c2);
    const [rows, setRows] = useState([]);
    const [dep, setDep] = useState(true);
    
    const text = 'Auction ends at 2 pm';
    const c = 'yellow';

    const handleChange = (text) => {
        setValue(text);
    };

    useEffect(() => {
        get(child(dbref, 'Allitems')).then((snapshot) => {let r = snapshot.val()?snapshot.val():[];r.reverse();setRows(r);window.Rows = r;}).catch(() => alert('You are offline. Check your connections..'));}, [dep]
    )
    
    const renderItem = (row) => {
        window.row_=row.item;
        return(
        <>
        <View style={{flexDirection:'row', ...styles.center}}>
          <TouchableOpacity style={{width:100, height:100, margin:15, elevation:5, backgroundColor:'black', borderRadius:5}}><Image  style={{width:100, height:100, borderRadius:5}} source={require('./assets/tomatoes.jpg')}/></TouchableOpacity>
          <View style={{flexDirection: 'column', margin: 10}}>
            <Text style={{color:'black', fontWeight: 'bold', fontFamily:'Times-Roman'}}>{row.item.title[0]}</Text>
            <Text style={{color:'dimgray', fontWeight:'300'}}>{row.item.title[1]}kg</Text>
            <View style={{borderWidth:.5, borderColor: '#1b9862', padding:5, margin:3, width:200, backgroundColor:'#f6f9ff'}}>
              <Text style={{color:'red',  fontWeight:'300'}}>Bidding Price: ₹{row.item.title[2]}</Text>
              <Text style={{color:'green', fontWeight:'300'}}>Base Price: ₹{row.item.title[3]}</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:5, ...styles.center }}>
                <Text style={{color:'blue'}}>Status: <Text style={{color:'red'}}>{row.item.title[4]}</Text></Text>
                <TouchableOpacity onPress={()=>{window.row_=row.item}} style={{marginLeft: 30, padding:10, paddingTop:5, paddingBottom:5, backgroundColor:'#1b9862', borderRadius:5}}><Text style={{color:'white'}}>Select</Text></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'rgb(185, 185, 185)', width:'100%', height: 1}}></View>
        </>)
    }
    

    const Com = <View style={{paddingTop:100, alignItems:'center'}}><Image style={{width:300, height:200}} source={require('./assets/retailer.jpg')}/><Text style={{color:'grey', fontWeight:'300'}}>No Items</Text></View>
    return(
        <View style={{height:height, backgroundColor:'#e7fee9'}}>
            <StatusBar backgroundColor={'#28c380'}/>
            <LinearGradient colors={['#28c380', '#1b9862', '#00693c']}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{width:'100%', height:'12%', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <View style={{width:56, height:56, borderRadius:28, backgroundColor:'white', ...styles.center}}><Image  style={{width:50, height:50}} source={require('./assets/logo.png')}/></View>
                {/* <FontAwesomeIcon icon={faUserCircle} size={50} style={{ color: "white"}} /> */}
                <View style={styles.container}>
                    <View style={{width:'85%'}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search..."
                        placeholderTextColor='grey'
                        value={value}
                        onChangeText={handleChange}
                        clearButtonMode="always"
                    />
                    </View>
                    <TouchableOpacity><FontAwesomeIcon icon={faSearch} size={20} style={{ color: "black"}} /></TouchableOpacity>
                </View>
            </LinearGradient>
            <LinearGradient colors={['#28c380', '#1b9862', '#00693c']}  start={{x: 0, y: 0}} end={{x: 1, y: 0}}  style = {{height:40, width: '100%', flexDirection:'row', ...styles.center}}>
                <Text style={{color: c}}>{text}</Text>
                <TouchableOpacity style={{marginLeft:30}} onPress={()=>setDep(dep+1)}><FontAwesomeIcon icon={faRefresh} size={25} style={{ color: 'white' }} /></TouchableOpacity>
            </LinearGradient>
            
            {/* {Com} */}
            <ScrollView><RetailerItems/></ScrollView>

            <View style={{position:'absolute', borderTopWidth:1.3, borderTopColor:'rgb(234, 234, 234)', padding: 17, backgroundColor:'white', bottom:0, ...styles.center, flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
                <TouchableOpacity style={{...styles.center}} onPress={()=>{setColor1(c1);setColor2(c2);setColor3(c2);setColor4(c2);setColor5(c2);navigation.navigate('Retailer Home');}}>
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
                <TouchableOpacity style={{...styles.center}} onPress={()=>{navigation.navigate('Checkout items');}}>
                    <FontAwesomeIcon icon={faList} size={20} style={{ color: color3}} />
                    <Text style={{color:color3, fontSize:12}}>Checkout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.center}} onPress={()=>{navigation.navigate('Retailer Profile');}}>
                    <FontAwesomeIcon icon={faUserCircle} size={20} style={{ color: color4}} />
                    <Text style={{color:color4, fontSize:12}}>Account</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      marginLeft:50,
      borderRadius: 10,
      backgroundColor: 'white',
      height:'55%',
      width: '60%',
    //   justifyContent:'center',
      alignItems:'center'
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center'
      },
    input: {
      paddingHorizontal: 10,
      paddingVertical: 8,
      
      fontSize: 15,
      color: '#333',
    },
  });