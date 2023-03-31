import React, { useState, useEffect } from 'react';
import { storeData, dbref} from './database';
import {child, get, push, update } from 'firebase/database';
import {StatusBar, View, Dimensions, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, Keyboard, TextInput,Pressable } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPlus,
  faUserCircle,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');
let h1 = height*.07;
let h2 = height*.86;
let h3 = width*.6
let h4 = height*.3;
let h5 = width*.7;
const c1 = '#5ef172', c2 = 'white';

const Farmer = ({ navigation }) => {
  const [color1, setColor1] = useState(c1);
  const [color2, setColor2] = useState(c2);
  const [itemType, setItemType] = useState('freshProduce');
  const [bp, setBp] = useState('');
  const [iname, setIName] = useState('');
  const [wei, setWei] = useState('');
  const [modalDis, setModalDis] = useState(false);
  const [modalDis1, setModalDis1] = useState(false);
  const [mt, setMt] = useState('60%');
  const [rows, setRows] = useState([]);
  const [dep, setDep] = useState(0);
  const addItems = () => {setModalDis(true);}
  
  useEffect(() => {
    get(child(dbref, 'Farmer/' + 'NewItems/' + itemType)).then((snapshot) => {let r = snapshot.val()?snapshot.val():[];r.reverse();setRows(r);}).catch(() => alert('You are offline. Check your connections..'));}, [dep]
  )

  const add = () => {
    setModalDis(false);
    if(iname!='' && !isNaN(parseFloat(bp)) && !isNaN(parseFloat(wei))){
        get(child(dbref, 'Farmer/' + 'NewItems/' + itemType)).then((snapshot) => {
            const updates = {};
            const data = snapshot.val()?snapshot.val():[];
            let now = new Date();
            let date = now.getDate()+'/'+(parseInt(now.getMonth())+1)+'/'+now.getFullYear();
            
            const newKey = push(child(dbref, 'Farmer/' + 'NewItems/' + itemType)).key;
            updates['/' + 'Farmer/' + 'NewItems/' + itemType+'/'+ data.length.toString()] = {id:newKey, title:[iname, wei, bp, bp, 'Unsold', date]};
            update(dbref, updates);

            
        }).catch(() => alert('You are offline. Check your connections..'));

        get(child(dbref, 'Allitems')).then((snapshot1) => {
          const updates1 = {};
          const data1 = snapshot1.val()?snapshot1.val():[];

          const newKey1 = push(child(dbref, 'Allitems')).key;
          let now = new Date();
          let date = now.getDate()+'/'+(parseInt(now.getMonth())+1)+'/'+now.getFullYear();
          updates1['/Allitems/'+data1.length.toString()] = {id:newKey1, title:[iname, wei, bp, bp, 'Unsold', date]};
          update(dbref, updates1);
          setIName('');
          setWei('');
          setBp('');
          setDep(dep+1);
        });
        
        
    }
  }

  const renderItem = (row) => {
    let i = require('./assets/Potato.jpg');
    if(JSON.stringify(row.item.title[0])==="Potato")
    {let i = require('./assets/Potato.jpg');}
    else if(JSON.stringify(row.item.title[0])==="Beans")
    {let i = require('./assets/Beans.jpg');}
    
    return(
    <>
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{width:100, height:100, margin:15, elevation:5, backgroundColor:'green', borderRadius:5}}>
        
        <Image  style={{width:100, height:100, borderRadius:5}} source={i}/>
      </TouchableOpacity>

      <View style={{flexDirection: 'column', margin: 10}}>
        <Text style={{color:'black', fontWeight: 'bold', fontFamily:'Times-Roman'}}>{row.item.title[0]}</Text>
        <Text style={{color:'dimgray', fontWeight:'300'}}>{row.item.title[1]}kg</Text>
        <View style={{borderWidth:.5, borderColor: '#1b9862', padding:5, margin:3, width:200}}>
          <Text style={{color:'red', fontWeight:'300'}}>Bidding Price: <Text style={{color:'black'}}>₹{row.item.title[2]}</Text></Text>
          <Text style={{color:'green', fontWeight:'300'}}>Base Price: <Text style={{color:'black'}}>₹{row.item.title[3]}</Text></Text>
        </View>
        <Text style={{color:'blue'}}>Status: <Text style={{color:'red', fontWeight: 'bold'}}>{row.item.title[4]}</Text></Text>
      </View>

    </View>
    <View style={{backgroundColor: 'rgb(185, 185, 185)', width:'100%', height: 1}}></View>
    </>)
  }

  
  Keyboard.addListener('keyboardDidShow', () => {setMt('30%'); });
  Keyboard.addListener('keyboardDidHide', () => {setMt('60%');});

  const Com = rows.length?<><View style={{backgroundColor: 'rgb(185, 185, 185)', width:'100%', height: 1}}></View><FlatList data = {rows} renderItem = {renderItem} keyExtractor={item=>item.id}/></>:<View style={{paddingTop:100, alignItems:'center'}}><Image style={{width:300, height:200}} source={require('./assets/far.png')}/>
  <Text style={{color:'grey', fontWeight:'300'}}>No Items</Text>
  </View>;

  return (
    <View style={{flex:1, backgroundColor:'#e7fee9'}}>
      <StatusBar backgroundColor={'#28c380'}/>

      <LinearGradient colors={['#28c380', '#1b9862', '#00693c']}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{width:'100%', height:'12%', flexDirection:'row', alignItems:'center'}}>
        <View style={{left:25, width:56, height:56, borderRadius:28, backgroundColor:'white', ...styles.center}}>
          <Image  style={{width:50, height:50}} source={require('./assets/logo.png')}/>
        </View>
        <TouchableOpacity  style={{left: 220}} onPress={() => navigation.navigate('Profile')}>
          <FontAwesomeIcon icon={faUserCircle} size={50} style={{ color: "white" }} />
        </TouchableOpacity>
      </LinearGradient>

      <View style = {{backgroundColor: '#bbf4c3', height:40, width: '100%', ...styles.center, flexDirection:'row'}}>
          <Text style={{color: 'black', fontWeight:'300'}}>Next auction starts in ... seconds</Text>
          <TouchableOpacity style={{marginLeft:20}} onPress={()=>setDep(dep+1)}>
            <FontAwesomeIcon icon={faRefresh} size={25} style={{ color: '#272c3b' }} />
          </TouchableOpacity>
      </View>

      <View style = {{flexDirection: 'row', height: 90, width:'100%', justifyContent:'space-around', backgroundColor:'#e7fee9', alignItems:'center'}}>
          <TouchableOpacity style = {{...styles.text, backgroundColor: '#272c3b', borderRadius:25, elevation:7}} onPress={()=>{setColor1(c1);setColor2(c2);setItemType('freshProduce');setDep(dep+1);}}><Text style={{color:color1}}>Fresh Produce</Text></TouchableOpacity>
          <TouchableOpacity style = {{...styles.text, ...{backgroundColor: '#272c3b', borderRadius:25, elevation:7}}} onPress={()=>{setColor1(c2);setColor2(c1);setItemType('grainType');setDep(dep+1);}}><Text style={{color:color2}}>Grains type</Text></TouchableOpacity> 
      </View>
      <View style={{height:'66%', backgroundColor: '#e7fee9'}} >
      {Com}
      </View>

      <Modal animationType='slide' transparent={true} visible={modalDis} onRequestClose={()=>setModalDis(!modalDis)}>
                <View style={{marginTop:mt, ...styles.centeredView, paddingTop: 20,height:height*.45, width:width*.7, marginLeft:'15%'}}>
                <TextInput style={{...styles.textinput}} placeholder='Item Name..' placeholderTextColor={'rgb(151, 147, 147)'} value={iname} onChangeText={text => setIName(text)}/>
                <TextInput style={styles.textinput} placeholder='Weight in Kg..' placeholderTextColor={'rgb(151, 147, 147)'} keyboardType='numeric' value={wei} onChangeText={text => setWei(text)}/>
                <TextInput style={styles.textinput} placeholder="Base Price per Kg" placeholderTextColor={'rgb(151, 147, 147)'} keyboardType='numeric' value={bp} onChangeText={text => setBp(text)}/>
                <Pressable style={{...styles.plusCentered, marginTop:'7%', paddingLeft:3}} onPress={add}>
                    <FontAwesomeIcon
                      icon={faPlus}
                      size={35} 
                      style={{ color: "#5ef172" }}/>
                </Pressable>
                </View>
      </Modal>
      
      <View style={{position:'absolute', bottom:0, width:'100%', backgroundColor:'#e7fee9', height:h1+35}}>
        <View style={{height:h1, position:'absolute', flexDirection:'row', width:'100%', bottom:28, alignItems:'center', justifyContent:'center'}}>
              <TouchableOpacity style={{height:'100%', width: '60%', backgroundColor:'#191c3e', borderRadius:20, elevation:6, ...styles.center}} onPress={addItems}><Text style={{color:'white'}}>Add <Text style={{color:'#5ef172', fontWeight:'bold'}}>Items</Text></Text></TouchableOpacity>
              
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Copyright © 2023 kisanConnect</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{alignItems:'center', justifyContent:'center', width:'40%', height:50},
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    
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
    elevation: 40
  },
  header: {
    height: 70,
    width: '100%',
    backgroundColor: '#009688',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    left:20
  },
  content: {
    flex: 1,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
  },
  itemImage: {
    width: '100%',
    height: '80%',
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
    textAlign: 'center',
  },
  footer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'green',
    fontSize: 12,
    fontWeight: '300'
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
    height: 50,
    width:50,
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor:'#272c3b',
    paddingTop:7,
    elevation:7
  }
});

export default Farmer;

