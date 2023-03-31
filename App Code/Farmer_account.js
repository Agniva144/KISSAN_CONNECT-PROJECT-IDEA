import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMessage,
  faCreditCard,
  faWallet,
  faShoppingBag,
  faArrowRotateRight,
  faAddressBook,
  faShareAlt,
  faUsers,
  faStar,
  faSignOut
} from "@fortawesome/free-solid-svg-icons";
import { clearAll } from './AsyncStore';
import RNRestart from 'react-native-restart';

const Farmer_account = () => {
    return(
        <View style={{flex:1, padding: '7%', backgroundColor:'#e7fee9'}}>
            <View style={{justifyContent:'center', width:'100%', alignItems:'center', paddingBottom:20}}><Text style={{color:'#1a1a1a', fontSize: 20, fontFamily: 'Helvetica', fontWeight: 'bold'}}>Farmer Account</Text></View>
            <View style={{flexDirection:'row', backgroundColor:'#bbf4c3', justifyContent:'center', alignItems:'center', elevation:7, borderRadius:5, padding:10}}>
                <View style={{marginRight:30}}>
                    <Text style={{color:'#2d2d2d', fontWeight:'bold'}}>Tushar Biswas</Text>
                    <Text style={{color:'rgb(104, 153, 253)', fontWeight:'300'}}>8334904775</Text>
                    <Text style={{color:'#06560c'}}>App Id: <Text style={{color:'rgb(255, 78, 78)', fontWeight:'300'}}>Tushar@kc</Text></Text>
                </View>
                <TouchableOpacity style={{width:100, height:100, elevation:5, backgroundColor:'black', borderRadius:5}}>
                    <Image  style={{width:100, height:100, borderRadius:5}} source={require('./assets/kishan.png')}/>
                </TouchableOpacity>
            </View>

            <View style={{height:'12%',alignItems:'center',marginTop:'7%', justifyContent:'center', flexDirection:'row', borderRadius:5, backgroundColor: 'rgb(231, 247, 255)', elevation:5}}>
                <TouchableOpacity style={{marginRight:30, alignItems:'center'}}>
                    <FontAwesomeIcon icon={faWallet} size={25} style={{ color: "rgb(80, 130, 255)" }} />
                    <Text style={{color:'rgb(112, 112, 112)', fontWeight:'300'}}>Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight:30, alignItems:'center'}}>
                    <FontAwesomeIcon icon={faMessage} size={25} style={{ color: "rgb(11, 223, 103)" }} />
                    <Text style={{color:'rgb(112, 112, 112)', fontWeight:'300'}}>Support</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center'}}>
                    <FontAwesomeIcon icon={faCreditCard} size={25} style={{ color: "rgb(166, 71, 255)" }} />
                    <Text style={{color:'rgb(112, 112, 112)', fontWeight:'300'}}>Payment</Text>
                </TouchableOpacity>
            </View>

            <Text style={{color:'grey', marginTop:18, fontWeight:'300'}}>Your Information</Text>

            <TouchableOpacity style={{flexDirection:'row', marginTop:9, alignItems:'center'}}>
                <View style={{height:30, width:30, borderRadius:15, backgroundColor:'rgb(234, 234, 234)', justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon icon={faShoppingBag} size={15} style={{ color: "rgb(116, 174, 255)" }}/></View>
                <Text style={{color:'black', marginLeft:20}}>Sold Items</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row', marginTop:9, alignItems:'center'}}>
                <View style={{height:30, width:30, borderRadius:15, backgroundColor:'rgb(234, 234, 234)', justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon icon={faArrowRotateRight} size={15} style={{ color: "rgb(116, 174, 255)" }}/></View>
                <Text style={{color:'black', marginLeft:20}}>Withdraw unsold items</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', marginTop:9, alignItems:'center'}}>
                <View style={{height:30, width:30, borderRadius:15, backgroundColor:'rgb(234, 234, 234)', justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon icon={faAddressBook} size={15} style={{ color: "rgb(116, 174, 255)" }}/></View>
                <Text style={{color:'black', marginLeft:20}}>Address book</Text>
            </TouchableOpacity>

            <Text style={{color:'grey', marginTop:18, fontWeight:'300'}}>Other Information</Text>

            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginTop:9}}>
                <View style={{height:30, width:30, borderRadius:15, backgroundColor:'rgb(234, 234, 234)', justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon icon={faShareAlt} size={15} style={{ color: "rgb(116, 174, 255)" }}/></View>
                <Text style={{color:'black', marginLeft:20}}>Share the app</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginTop:9}}>
                <View style={{height:30, width:30, borderRadius:15, backgroundColor:'rgb(234, 234, 234)', justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon icon={faUsers} size={15} style={{ color: "rgb(116, 174, 255)" }}/></View>
                <Text style={{color:'black', marginLeft:20}}>About us</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginTop:9}}>
                <View style={{height:30, width:30, borderRadius:15, backgroundColor:'rgb(234, 234, 234)', justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon icon={faStar} size={15} style={{ color: "rgb(116, 174, 255)" }}/></View>
                <Text style={{color:'black', marginLeft:20}}>Rate us on play store</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{clearAll();RNRestart.Restart();}} style={{flexDirection:'row', alignItems:'center', marginTop:9}}>
                <View style={{height:30, width:30, borderRadius:15, backgroundColor:'rgb(234, 234, 234)', justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon icon={faSignOut} size={15} style={{ color: "rgb(116, 174, 255)" }}/></View>
                <Text style={{color:'black', marginLeft:20}}>Log out</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
  });
  
  
  
  
export default Farmer_account;