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

export default Welcome = ({navigation}) => {
    const [id, setId] = useState('');
    const [pass, setPass] = useState('');
    const login = () => {
      alert("Invalid username or password\n");
    }
    return (
        <SafeAreaView style={{backgroundColor:'white', height:height, width:width}}>
            <View style={{width:width, height:height, backgroundColor:'yellow'}}>
              <Image source={require('./assets/welcome.png')} style={{width:width, height:height}}/>
            </View>
            <View style={{position:'absolute', top:490}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Far_login')} style={{marginLeft: width/2 - 100, width:200,height:50, borderRadius:30, ...styles.center, elevation:10}}>
                  <LinearGradient colors={['#21e174', '#1d9350', '#0e4c29']}  start={{x: 0, y: 0}} end={{x: 0, y: 1}} style={{flexDirection:'row', width:200,height:50, borderRadius:30, alignItems:'center'}}>
                    <Image  style={{width:30, height:30, borderRadius:15, marginLeft:12}} source={require('./assets/kishan.png')}/>
                    <Text style={{color:'white', fontWeight:'300', marginLeft:15}}>Login as farmer</Text>
                  </LinearGradient>
              </TouchableOpacity >
              <TouchableOpacity onPress={()=>navigation.navigate('ret_login')} style={{marginLeft: width/2 - 100, marginTop: 30, width:200,height:50, borderRadius:30, ...styles.center, elevation:10}}>
                  <LinearGradient colors={['#598cf4', '#2161e1', '#072a68']}  start={{x: 0, y: 0}} end={{x: 0, y: 1}} style={{flexDirection:'row',width:200,height:50, borderRadius:30, alignItems:'center'}}>
                    <Image  style={{width:30, height:30, borderRadius:15, marginLeft:12}} source={require('./assets/retailer.png')}/>
                    <Text style={{color:'white', fontWeight:'300', marginLeft:15}}>Login as retailer</Text>
                  </LinearGradient>
              </TouchableOpacity >
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
