import React, { useState, useEffect } from 'react';
import { View, StatusBar, Dimensions, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, Keyboard, TextInput,Pressable } from 'react-native';
import { storeData, dbref} from './database';
import {child, get, push, update } from 'firebase/database';

export default RetailerItems = () => {
    const [text1, setText1] = useState('Select')
    const [text2, setText2] = useState('Select')
    const [text3, setText3] = useState('Select')
    const [text4, setText4] = useState('Select')
    const [text5, setText5] = useState('Select')
    const [text6, setText6] = useState('Select')
    const [text7, setText7] = useState('Select')
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
        get(child(dbref, 'ai/bp')).then((snapshot) => {let r = snapshot.val()?snapshot.val():[];setBp1(r[0]);setBp2(r[1]);setBp3(r[2]);setBp4(r[3]);setBp5(r[4]);setBp6(r[5]);setBp7(r[6])}).catch(() => alert('You are offline. Check your connections..'));}, [dep]
    )

    

    return(
        <>
        <View style={{backgroundColor: 'rgb(185, 185, 185)', width:'100%', height: 1}}></View>
        <View style={{flexDirection:'row', ...styles.center}}>
          <TouchableOpacity style={{width:100, height:100, margin:15, elevation:5, backgroundColor:'black', borderRadius:5}}><Image  style={{width:100, height:100, borderRadius:5}} source={require('./assets/Potato.jpg')}/></TouchableOpacity>
          <View style={{flexDirection: 'column', margin: 10}}>
            <Text style={{color:'black', fontWeight: 'bold', fontFamily:'Times-Roman'}}>Potato</Text>
            <Text style={{color:'dimgray', fontWeight:'300'}}>25kg</Text>
            <View style={{borderWidth:.5, borderColor: '#1b9862', padding:5, margin:3, width:200, backgroundColor:'#f6f9ff'}}>
              <Text style={{color:'red',  fontWeight:'300'}}>Bidding Price: ₹{bp1}</Text>
              <Text style={{color:'green', fontWeight:'300'}}>Base Price: ₹10</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:5, ...styles.center }}>
                <Text style={{color:'blue'}}>Status: <Text style={{color:'red'}}>Sold</Text></Text>
                
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'rgb(185, 185, 185)', width:'100%', height: 1}}></View>

        <View style={{flexDirection:'row', ...styles.center}}>
          <Pressable onPress={()=>setDep(!dep)} style={{width:100, height:100, margin:15, elevation:5, backgroundColor:'black', borderRadius:5}}><Image  style={{width:100, height:100, borderRadius:5}} source={require('./assets/carrot.png')}/></Pressable>
          <View style={{flexDirection: 'column', margin: 10}}>
            <Text style={{color:'black', fontWeight: 'bold', fontFamily:'Times-Roman'}}>Carrot</Text>
            <Text style={{color:'dimgray', fontWeight:'300'}}>10kg</Text>
            <View style={{borderWidth:.5, borderColor: '#1b9862', padding:5, margin:3, width:200, backgroundColor:'#f6f9ff'}}>
              <Text style={{color:'red',  fontWeight:'300'}}>Bidding Price: ₹{bp2}</Text>
              <Text style={{color:'green', fontWeight:'300'}}>Base Price: ₹20</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:5, ...styles.center }}>
                <Text style={{color:'blue'}}>Status: <Text style={{color:'red'}}>Sold</Text></Text>
                
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'rgb(185, 185, 185)', width:'100%', height: 1}}></View>

        <View style={{flexDirection:'row', ...styles.center}}>
          <TouchableOpacity style={{width:100, height:100, margin:15, elevation:5, backgroundColor:'black', borderRadius:5}}><Image  style={{width:100, height:100, borderRadius:5}} source={require('./assets/onion.jpg')}/></TouchableOpacity>
          <View style={{flexDirection: 'column', margin: 10}}>
            <Text style={{color:'black', fontWeight: 'bold', fontFamily:'Times-Roman'}}>Onion</Text>
            <Text style={{color:'dimgray', fontWeight:'300'}}>20kg</Text>
            <View style={{borderWidth:.5, borderColor: '#1b9862', padding:5, margin:3, width:200, backgroundColor:'#f6f9ff'}}>
              <Text style={{color:'red',  fontWeight:'300'}}>Bidding Price: ₹{bp3}</Text>
              <Text style={{color:'green', fontWeight:'300'}}>Base Price: ₹15</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:5, ...styles.center }}>
                <Text style={{color:'blue'}}>Status: <Text style={{color:'red'}}>Sold</Text></Text>
                
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'rgb(185, 185, 185)', width:'100%', height: 1}}></View>

        <View style={{flexDirection:'row', ...styles.center}}>
          <TouchableOpacity style={{width:100, height:100, margin:15, elevation:5, backgroundColor:'black', borderRadius:5}}><Image  style={{width:100, height:100, borderRadius:5}} source={require('./assets/broccoli.jpg')}/></TouchableOpacity>
          <View style={{flexDirection: 'column', margin: 10}}>
            <Text style={{color:'black', fontWeight: 'bold', fontFamily:'Times-Roman'}}>Broccoli</Text>
            <Text style={{color:'dimgray', fontWeight:'300'}}>15kg</Text>
            <View style={{borderWidth:.5, borderColor: '#1b9862', padding:5, margin:3, width:200, backgroundColor:'#f6f9ff'}}>
              <Text style={{color:'red',  fontWeight:'300'}}>Bidding Price: ₹{bp4}</Text>
              <Text style={{color:'green', fontWeight:'300'}}>Base Price: ₹20</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:5, ...styles.center }}>
                <Text style={{color:'blue'}}>Status: <Text style={{color:'red'}}>Unsold</Text></Text>
                
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'rgb(185, 185, 185)', width:'100%', height: 1}}></View>
        <View style={{flexDirection:'row', ...styles.center}}>
          <TouchableOpacity style={{width:100, height:100, margin:15, elevation:5, backgroundColor:'black', borderRadius:5}}><Image  style={{width:100, height:100, borderRadius:5}} source={require('./assets/cabbage.jpg')}/></TouchableOpacity>
          <View style={{flexDirection: 'column', margin: 10}}>
            <Text style={{color:'black', fontWeight: 'bold', fontFamily:'Times-Roman'}}>Cabbage</Text>
            <Text style={{color:'dimgray', fontWeight:'300'}}>20kg</Text>
            <View style={{borderWidth:.5, borderColor: '#1b9862', padding:5, margin:3, width:200, backgroundColor:'#f6f9ff'}}>
              <Text style={{color:'red',  fontWeight:'300'}}>Bidding Price: ₹{bp5}</Text>
              <Text style={{color:'green', fontWeight:'300'}}>Base Price: ₹18</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:5, ...styles.center }}>
                <Text style={{color:'blue'}}>Status: <Text style={{color:'red'}}>Unsold</Text></Text>
                
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'rgb(185, 185, 185)', width:'100%', height: 1}}></View>

        <View style={{backgroundColor: 'rgb(185, 185, 185)', width:'100%', height: 70}}></View>
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