import React, { useState, useEffect } from 'react';
import { SafeAreaView, Dimensions, Text,StyleSheet, View, Image, TouchableOpacity, Modal, Keyboard, TextInput,Pressable } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { storeData, dbref} from './database';
import {child, get, push, update } from 'firebase/database';
import { storeAsync } from './AsyncStore';
import {
  faPhone,
  faAddressBook,
  faDriversLicense,
  faUserCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import LinearGradient from 'react-native-linear-gradient';

let h3 = width*.6
let h4 = height*.3;

const {height, width} = Dimensions.get('window');

export default RetReg = ({ navigation }) => {
    const [nam, setNam] = useState('');
    const [ph, setPh] = useState('');
    const [addr, setAddr] = useState('');
    const [id, setId] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');
    const [modalDis, setModalDis] = useState(false);
    const [mt, setMt] = useState('60%');
    Keyboard.addListener('keyboardDidShow', () => {setMt('30%'); });
    Keyboard.addListener('keyboardDidHide', () => {setMt('60%');});
    
    const register = () => {
        if(nam==='' || ph==='' || addr==='')return;
        setModalDis(true);
    }

    const cr = () => {
        
        if(pass.length<6){
          alert("Password length should be minimum 6");
          return;
        }
        if(pass !== pass){
          alert("Passwords did not match");
          return;
        }
        get(child(dbref, 'Retailers')).then((snapshot) => {
          
            storeAsync({Id:nam.replace( /\s/g, '')+'@kc', Password:pass, Name:nam, Number:ph});
            setModalDis(false);
            storeData('Retailers', 'Accounts', {Name: nam, Phone:ph, Address:addr, Gmail:mail, Id: nam.replace( /\s/g, '')+'@kc', Password:pass});
            navigation.navigate('Retailer Home');
          
          setModalDis(false);
          
        }).catch((err) => alert(err));
      }
  
    return (
        <SafeAreaView style={{backgroundColor:'white', height:height, width:width}}>
            <View style={{width:width, height:height, backgroundColor:'white'}}>
              <Image source={require('./assets/farmerReg.png')} style={{width:width, height:height}}/>
            </View>

            <Modal animationType='slide' transparent={true} visible={modalDis} onRequestClose={()=>setModalDis(!modalDis)}>
                <View style={{marginTop:mt, ...styles.centeredView, paddingTop: 20,height:height*.35, width:width*.7, marginLeft:'15%'}}>
                <TextInput style={{...styles.textinput1}} secureTextEntry={true} placeholder='Password..' placeholderTextColor={'rgb(151, 147, 147)'} value={pass} onChangeText={text => setPass(text)}/>
                <TextInput style={styles.textinput1} secureTextEntry={true} placeholder='Confirm password..' placeholderTextColor={'rgb(151, 147, 147)'} value={cpass} onChangeText={text => setCpass(text)}/>
                <Pressable style={{...styles.plusCentered, marginTop:'12%'}} onPress={cr}>
                    <Text style={{color:'white', fontWeight:'300'}}>Complete Registration</Text>
                </Pressable>
                </View>
            </Modal>

            <View style={{position:'absolute', top:220}}>
              <View style={{width:width, ...styles.center}}><Text style={{fontWeight:'300' , color:'white'}}>Retailer Registration</Text></View>

              <View style={{backgroundColor:'white', elevation:5, marginTop:20, height:50, width:280, borderRadius:30, flexDirection:'row', marginLeft:width/2-140}}>
                <View style={{backgroundColor:'white', marginTop:10,marginLeft:12, height:30, width:30, borderRadius:15, justifyContent:'center', alignItems:'center'}}>
                    <FontAwesomeIcon icon={faUserCircle} size={30} style={{ color: '#28c380'}} />
                </View>
                <TextInput style={{...styles.textinput}} placeholder='Retailer full name..' placeholderTextColor={'rgb(151, 147, 147)'} value={nam} onChangeText={text => setNam(text)}/>
              </View>

              <View style={{backgroundColor:'white', elevation:5, marginTop:20, height:50, width:280, borderRadius:30, flexDirection:'row', marginLeft:width/2-140}}>
                <View style={{backgroundColor:'#28c380', marginTop:10,marginLeft:12, height:30, width:30, borderRadius:15, justifyContent:'center', alignItems:'center'}}>
                    <FontAwesomeIcon icon={faPhone} size={15} style={{ color: 'white'}} />
                </View>
                <TextInput style={{...styles.textinput}} placeholder='Phone Number..' placeholderTextColor={'rgb(151, 147, 147)'} value={ph} onChangeText={text => setPh(text)}/>
              </View>

              <View style={{backgroundColor:'white', elevation:5, marginTop:20, height:50, width:280, borderRadius:30, flexDirection:'row', marginLeft:width/2-140}}>
                <View style={{backgroundColor:'#28c380', marginTop:10,marginLeft:12, height:30, width:30, borderRadius:15, justifyContent:'center', alignItems:'center'}}>
                    <FontAwesomeIcon icon={faAddressBook} size={15} style={{ color: 'white'}} />
                </View>
                <TextInput style={{...styles.textinput}} placeholder='Full address..' placeholderTextColor={'rgb(151, 147, 147)'} value={addr} onChangeText={text => setAddr(text)}/>
              </View>
              <View style={{backgroundColor:'white', elevation:5, marginTop:20, height:50, width:280, borderRadius:30, flexDirection:'row', marginLeft:width/2-140}}>
                <View style={{backgroundColor:'#28c380', marginTop:10,marginLeft:12, height:30, width:30, borderRadius:15, justifyContent:'center', alignItems:'center'}}>
                    <FontAwesomeIcon icon={faDriversLicense} size={15} style={{ color: 'white'}} />
                </View>
                <TextInput style={{...styles.textinput}} placeholder='Shop GST no. (optional)' placeholderTextColor={'rgb(151, 147, 147)'} value={id} onChangeText={text => setId(text)}/>
              </View>
              <View style={{backgroundColor:'white', elevation:5, marginTop:20, height:50, width:280, borderRadius:30, flexDirection:'row', marginLeft:width/2-140}}>
                <View style={{backgroundColor:'#28c380', marginTop:10,marginLeft:12, height:30, width:30, borderRadius:15, justifyContent:'center', alignItems:'center'}}>
                    <FontAwesomeIcon icon={faEnvelope} size={15} style={{ color: 'white'}} />
                </View>
                <TextInput style={{...styles.textinput}} placeholder='Gmail (optional)' placeholderTextColor={'rgb(151, 147, 147)'} value={mail} onChangeText={text => setMail(text)}/>
              </View>
              <TouchableOpacity onPress={register}style={{marginLeft: width/2 - 65, marginTop: 15, width:130,height:50, borderRadius:30, ...styles.center, elevation:10}}>
                  <LinearGradient colors={['#28c380', '#1b9862', '#00693c']}  start={{x: 0, y: 0}} end={{x: 0, y: 1}} style={{width:130,height:50, borderRadius:30, ...styles.center}}>
                  <Text style={{color:'white', fontWeight:'300'}}>Register</Text>
                  </LinearGradient>
              </TouchableOpacity>
              </View>
        </SafeAreaView>
      );
    };
    
const styles = StyleSheet.create({
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
    textinput1:{
        color: 'black',
        borderRadius:10,
        elevation:7,
        backgroundColor:'white',
        padding:10,
        width:'100%',
        marginTop:22
      },
    plusCentered:{
        height: 40,
        width:200,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 7,
        backgroundColor:'#28c380',
        elevation:10
    },
    textinput:{
      width:200,
      marginLeft: 15,
      backgroundColor:'white',
      color:'black'
    },
    center:{
      alignItems:'center',
      justifyContent:'center'
    }
});