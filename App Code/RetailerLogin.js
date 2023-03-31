import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Dimensions, Text,StyleSheet, FlatList, View, Image, TouchableOpacity, Modal, Keyboard, TextInput,Pressable } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { storeData, dbref} from './database';
import {child, get, push, update } from 'firebase/database';

const {height, width} = Dimensions.get('window');
import {
  faUserCircle,
  faUnlockKeyhole
} from "@fortawesome/free-solid-svg-icons";
import LinearGradient from 'react-native-linear-gradient';

export default RetailerLogin = ({navigation}) => {
    const [id, setId] = useState('');
    const [pass, setPass] = useState('');
    const login = () => {
      alert("Invalid username or password\n");
    }
    return (
        <SafeAreaView style={{backgroundColor:'white', height:height, width:width}}>
            <View style={{width:width, height:height, backgroundColor:'yellow'}}>
              <Image source={require('./assets/farmerLogin.png')} style={{width:width, height:height}}/>
            </View>
            <View style={{position:'absolute', top:340}}>
              <Text style={{fontWeight:'300' , marginLeft:130, color:'white'}}>Retailer Login</Text>
              <View style={{backgroundColor:'white', marginTop:35, height:60, width:280, borderRadius:30, flexDirection:'row', marginLeft:width/2-140}}>
                <View style={{backgroundColor:'cyan', marginTop:10,marginLeft:12, height:40, width:40, borderRadius:20, justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon icon={faUserCircle} size={40} style={{ color: '#202020'}} /></View>
                <TextInput style={{...styles.textinput}} placeholder='Kishan Connect Id..' placeholderTextColor={'rgb(151, 147, 147)'} value={id} onChangeText={text => setId(text)}/>
              </View>
              <View style={{backgroundColor:'white', marginTop:35, height:60, width:280, borderRadius:30, flexDirection:'row', marginLeft:width/2-140}}>
                <View style={{backgroundColor:'#202020', marginTop:10,marginLeft:12, height:40, width:40, borderRadius:20, justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon icon={faUnlockKeyhole} size={22} style={{ color: 'cyan'}} /></View>
                <TextInput style={{...styles.textinput}} placeholder='password...' placeholderTextColor={'rgb(151, 147, 147)'} value={pass} onChangeText={text => setPass(text)}/>
              </View>
              <TouchableOpacity onPress={login} style={{marginLeft: width/2 - 65, marginTop: 35, width:130,height:50, borderRadius:30, ...styles.center, elevation:10}}>
                  <LinearGradient colors={['#28c380', '#1b9862', '#00693c']}  start={{x: 0, y: 0}} end={{x: 0, y: 1}} style={{width:130,height:50, borderRadius:30, ...styles.center}}>
                  <Text style={{color:'white', fontWeight:'300'}}>Login</Text>
                  </LinearGradient>
              </TouchableOpacity >
              <TouchableOpacity style={{width:width, ...styles.center, marginTop:12}}><Text style={{color:'cyan', fontWeight:'200' , fontSize:13}}>Forgot Password?</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('ret_reg')} style={{width:width, ...styles.center, marginTop:13}}><Text style={{color:'white', fontWeight:'200'}}>New to Kishan Connect?  <Text style={{color:'cyan', fontWeight:'300'}}>Register here!</Text></Text></TouchableOpacity>
            </View>
        </SafeAreaView>
      );
    };
    
const styles = StyleSheet.create({
    textinput:{
      width:200,
      marginLeft: 15
    },
    center:{
      alignItems:'center',
      justifyContent:'center'
    }
});
