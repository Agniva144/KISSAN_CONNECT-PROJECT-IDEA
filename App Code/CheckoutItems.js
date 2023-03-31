import React, { useState, useEffect } from 'react';
import { View, StatusBar, Dimensions, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, Keyboard, TextInput,Pressable } from 'react-native';
import { storeData, dbref} from './database';
import {child, get, push, update } from 'firebase/database';
import {
    faHome,
    faRefresh,
    faHammer,
    faSquarePlus,
    faUserCircle,
    faSearch,
    faLightbulb,
    faList
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
export default RetailerItems = () => {
    const [text1, setText1] = useState('Bid')
    const [text2, setText2] = useState('Bid')
    const [text3, setText3] = useState('Bid')
    const [text4, setText4] = useState('Bid')
    const [text5, setText5] = useState('Bid')
    const [text6, setText6] = useState('Bid')
    const [text7, setText7] = useState('Bid')
    const [color1, setColor1] = useState('#1b9862')
    const [color2, setColor2] = useState('#1b9862')
    const [color3, setColor3] = useState('#1b9862')
    const [color4, setColor4] = useState('#1b9862')
    const [color5, setColor5] = useState('#1b9862')
    const [color6, setColor6] = useState('#1b9862')
    const [color7, setColor7] = useState('#1b9862')
    const [bp1, setBp1] = useState(10)
    const [bp2, setBp2] = useState(20)
    const [bp3, setBp3] = useState(15)
    const [bp4, setBp4] = useState(20)
    const [bp5, setBp5] = useState(18)
    const [bp6, setBp6] = useState(25)
    const [bp7, setBp7] = useState(70)
    const [dep, setDep] = useState(true)
    useEffect(() => {
        get(child(dbref, 'ai/bp')).then((snapshot) => {let r = snapshot.val()?snapshot.val():[];setBp1(r[0]);setBp3(r[2]);setBp4(r[3]);setBp7(r[6])}).catch(() => alert('You are offline. Check your connections..'));}, [dep]
    )

    // const a =()=>{
    //     get(child(dbref, 'ai')).then((snapshot) => {
    //           storeData('ai', 'bp', [10, 20, 15, 20, 18, 25, 70]);
    //           setDep(!dep);
    //       }).catch((e) => alert(e));
    //     }
    const a =()=>{
        
                setDep(!dep);
            
        }
    const status = 'Sold';
    return(
        <>
        <View style={{flexDirection:'row', ...styles.center}}>
          <TouchableOpacity style={{width:100, height:100, margin:15, elevation:5, backgroundColor:'black', borderRadius:5}}><Image  style={{width:100, height:100, borderRadius:5}} source={require('./assets/Potato.jpg')}/></TouchableOpacity>
          <View style={{flexDirection: 'column', margin: 10}}>
            <Text style={{color:'black', fontWeight: 'bold', fontFamily:'Times-Roman'}}>Potato</Text>
            <Text style={{color:'dimgray', fontWeight:'300'}}>25kg</Text>
            <View style={{borderWidth:.5, borderColor: '#1b9862', padding:5, margin:3, width:200, backgroundColor:'#f6f9ff'}}>
              <Text style={{color:'red',  fontWeight:'300'}}>Final Price: ₹{bp1}/kg</Text>
              <Text style={{color:'green', fontWeight:'300'}}>Base Price: ₹10/kg</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:5, ...styles.center }}>
                <Text style={{color:'blue'}}>Status: <Text style={{color:'red'}}>{status}</Text></Text>
                
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'rgb(185, 185, 185)', width:'100%', height: 1}}></View>

        

        <View style={{flexDirection:'row', ...styles.center}}>
          <Pressable onPress={a} style={{width:100, height:100, margin:15, elevation:5, backgroundColor:'black', borderRadius:5}}><Image  style={{width:100, height:100, borderRadius:5}} source={require('./assets/onion.jpg')}/></Pressable>
          <View style={{flexDirection: 'column', margin: 10}}>
            <Text style={{color:'black', fontWeight: 'bold', fontFamily:'Times-Roman'}}>Onion</Text>
            <Text style={{color:'dimgray', fontWeight:'300'}}>20kg</Text>
            <View style={{borderWidth:.5, borderColor: '#1b9862', padding:5, margin:3, width:200, backgroundColor:'#f6f9ff'}}>
              <Text style={{color:'red',  fontWeight:'300'}}>Final Price: ₹{bp3}/kg</Text>
              <Text style={{color:'green', fontWeight:'300'}}>Base Price: ₹15/kg</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:5, ...styles.center }}>
                <Text style={{color:'blue'}}>Status: <Text style={{color:'red'}}>{status}</Text></Text>
                
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'rgb(185, 185, 185)', width:'100%', height: 1}}></View>

        
        
        


        <View style={{flexDirection:'row', ...styles.center}}>
          <TouchableOpacity style={{width:100, height:100, margin:15, elevation:5, backgroundColor:'black', borderRadius:5}}><Image  style={{width:100, height:100, borderRadius:5}} source={require('./assets/dal.jpg')}/></TouchableOpacity>
          <View style={{flexDirection: 'column', margin: 10}}>
            <Text style={{color:'black', fontWeight: 'bold', fontFamily:'Times-Roman'}}>Masur Dal</Text>
            <Text style={{color:'dimgray', fontWeight:'300'}}>30kg</Text>
            <View style={{borderWidth:.5, borderColor: '#1b9862', padding:5, margin:3, width:200, backgroundColor:'#f6f9ff'}}>
              <Text style={{color:'red',  fontWeight:'300'}}>Final Price: ₹{bp7}/kg</Text>
              <Text style={{color:'green', fontWeight:'300'}}>Base Price: ₹70/kg</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:5, ...styles.center }}>
                <Text style={{color:'blue'}}>Status: <Text style={{color:'red'}}>{status}</Text></Text>
                
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'rgb(185, 185, 185)', width:'100%', height: 1}}></View>
        </>)
    
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