import React, { useState, useEffect } from 'react';
import { storeData, dbref} from './database';
import {child, get, push, update } from 'firebase/database';
import {StatusBar, View, Dimensions, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Keyboard, TextInput,Pressable } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import PushNotification from 'react-native-push-notification';
import FreshItems from './FreshItems';
import GrainItems from './GrainItems';
import {
  faPlus,
  faUserCircle,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import LinearGradient from 'react-native-linear-gradient';

import {
    faHome,
    faSquarePlus,
    faSearch,
    faLightbulb,
    faBell
} from "@fortawesome/free-solid-svg-icons";

const {height, width} = Dimensions.get('window');
let h1 = height*.07;
let h2 = height*.86;
let h3 = width*.6
let h4 = height*.3;
let h5 = width*.7;
const c1 = '#5ef172', c2 = '#02b3ff';
const c3 = '#5ef172', c4 = 'white';

const FarmerAlt = ({navigation}) => {
  const [itemType, setItemType] = useState('freshProduce');
  const [mt, setMt] = useState('60%');
  const [rows, setRows] = useState([]);
  const [dep, setDep] = useState(0);
  const [color1, setColor1] = useState(c1);
  const [color2, setColor2] = useState(c2);
  const [color3, setColor3] = useState(c2);
  const [color4, setColor4] = useState(c2);
  const [color5, setColor5] = useState(c3);
  const [color6, setColor6] = useState(c4);
  const [con, setCon] = useState(<FreshItems/>)
  const addItems = () => {setModalDis(true);}
  
  useEffect(() => {
    get(child(dbref, 'Farmer/' + 'NewItems/' + itemType)).then((snapshot) => {let r = snapshot.val()?snapshot.val():[];r.reverse();setRows(r);}).catch(() => alert('You are offline. Check your connections..'));}, [dep]
  )

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

  PushNotification.createChannel(
    {
      channelId: "my-channel-id", // id of the channel
      channelName: "My Channel", // name of the channel
      channelDescription: "My channel description", // description of the channel
      soundName: "default", // sound to play when the notification is displayed
      importance: 4, // priority of the notification
      vibrate: true // whether to vibrate the device when the notification is displayed
    },
    (created) => {let a=1;}, // callback function
  );

const showNoti=()=> {
    PushNotification.localNotification({
        channelId: "my-channel-id",
      title: 'Payment Done',
      message: 'A total amount of ₹2995 is transfered to your bank account',
    
    });
  }

  const Com = <View style={{paddingTop:100, alignItems:'center'}}>
        <Image style={{width:300, height:200}} source={require('./assets/far.png')}/>
        <Text style={{color:'grey', fontWeight:'300'}}>No Items</Text>
    </View>

  return (
    <View style={{flex:1, backgroundColor:'#e7fee9'}}>
      <StatusBar backgroundColor={'#28c380'}/>

      <LinearGradient colors={['#28c380', '#1b9862', '#00693c']}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{width:'100%', height:'12%', flexDirection:'row', alignItems:'center'}}>
        <Pressable onPress={showNoti} style={{left:25, width:56, height:56, borderRadius:28, backgroundColor:'white', ...styles.center}}>
          <Image  style={{width:50, height:50}} source={require('./assets/logo.png')}/>
        </Pressable>
      </LinearGradient>

      <View style = {{backgroundColor: '#bbf4c3', height:40, width: '100%', ...styles.center, flexDirection:'row'}}>
          <Text style={{color: 'black', fontWeight:'300'}}>Auction will start at 1pm</Text>
          <TouchableOpacity style={{marginLeft:20}} onPress={()=>setDep(dep+1)}>
            <FontAwesomeIcon icon={faRefresh} size={25} style={{ color: '#272c3b' }} />
          </TouchableOpacity>
      </View>

      <View style = {{flexDirection: 'row', height: 90, width:'100%', justifyContent:'space-around', backgroundColor:'#e7fee9', alignItems:'center'}}>
          <TouchableOpacity style = {{...styles.text, backgroundColor: '#272c3b', borderRadius:25, elevation:7}} onPress={()=>{setColor5(c3);setColor6(c4);setItemType('freshProduce');setCon(<FreshItems/>);setDep(dep+1);}}><Text style={{color:color5}}>Fresh Produce</Text></TouchableOpacity>
          <TouchableOpacity style = {{...styles.text, ...{backgroundColor: '#272c3b', borderRadius:25, elevation:7}}} onPress={()=>{setColor6(c3);setColor5(c4);setItemType('grainType');setCon(<GrainItems/>);setDep(dep+1);}}><Text style={{color:color6}}>Grains type</Text></TouchableOpacity> 
      </View>
      <ScrollView style={{height:'66%', backgroundColor: '#e7fee9'}} >
      {/* {Com} */}
      {/* {()=>{if(itemType==='freshProduce'){return(<FreshItems/>);}else{return(<GrainItems/>)}}} */}
      {con}
      </ScrollView>
      
      <View style={{position:'absolute', borderTopWidth:1.3, borderTopColor:'rgb(234, 234, 234)', padding: 17, backgroundColor:'white', bottom:0, ...styles.center, flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
                <TouchableOpacity style={{...styles.center}} onPress={()=>{setColor1(c1);setColor2(c2);setColor3(c2);setColor4(c2);navigation.navigate('KishanConnect');}}>
                    <FontAwesomeIcon icon={faHome} size={20} style={{ color: color1}} />
                    <Text style={{color:color1, fontSize:12}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.center}} onPress={()=>{navigation.navigate('pro');}}>
                    <FontAwesomeIcon icon={faLightbulb} size={20} style={{ color: color2}}/>
                    <Text style={{color:color2, fontSize:12}}>Produce</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.center}} onPress={()=>{navigation.navigate('Not');}}>
                    <FontAwesomeIcon icon={faBell} size={20} style={{ color: color3}} />
                    <Text style={{color:color3, fontSize:12}}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.center}} onPress={()=>{navigation.navigate('Profile');}}>
                    <FontAwesomeIcon icon={faUserCircle} size={20} style={{ color: color4}} />
                    <Text style={{color:color4, fontSize:12}}>Account</Text>
                </TouchableOpacity>
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

export default FarmerAlt;
