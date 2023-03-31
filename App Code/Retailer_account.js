import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Dimensions} from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMessage,
  faCreditCard,
  faWallet,
  faShoppingBag,
  faRankingStar,
  faAddressBook,
  faShareAlt,
  faUsers,
  faStar,
  faSignOut,
  faUserGear,
  faHammer
} from "@fortawesome/free-solid-svg-icons";
const {height, width} = Dimensions.get('window');
import { clearAll } from './AsyncStore';
import RNRestart from 'react-native-restart';
import { storeData, dbref} from './database';
import {child, get, push, update } from 'firebase/database';

const Retailer_account = ({navigation}) => {
    const [modalDis2, setModalDis2] = useState(false);
    const [wa, setWa] = useState(0);
    const [dep, setDep] = useState(true);
    useEffect(() => {
        get(child(dbref, 'Retailers/wallet')).then((snapshot) => {let r = snapshot.val()?snapshot.val():[];setWa(r);}).catch(() => alert('You are offline. Check your connections..'));}, [dep]
    )
    const addMoney=()=>{
        get(child(dbref, 'Retailers/wallet')).then((snapshot) => {
            console.log(snapshot)
            storeData('Retailers', 'wallet', wa+1000);
              setDep(!dep);
        })
    }
    return(
        <View style={{flex:1, padding: '7%', backgroundColor:'#f8fdff'}}>
            
            <View style={{flexDirection:'row', backgroundColor:'white', justifyContent:'center', alignItems:'center', borderColor: 'rgb(214, 214, 214)', elevation:3, borderWidth:1, borderRadius:5, padding:10}}>
                <View style={{marginRight:30}}>
                <Text style={{color:'#2d2d2d', fontWeight:'500'}}>Souvik Bhukta</Text>
                <Text style={{color:'rgb(104, 153, 253)', fontWeight:'300'}}>8334904775</Text>
                
                <Text style={{color:'rgb(5, 174, 36)', fontWeight:'300'}}>App id: <Text style={{color:'rgb(255, 78, 78)'}}>Souvik@kc</Text></Text>
                
                </View>
                <TouchableOpacity><Image  style={{width:90, height:90, borderRadius:5}} source={require('./assets/retailer.png')}/></TouchableOpacity>
            </View>

            <Modal transparent={true} visible={modalDis2} onRequestClose={()=>setModalDis2(!modalDis2)}>
                <View style={{marginTop:'60%', ...styles.centeredView, justifyContent: 'space-around'}}>
                    <Text style={{color:'black', fontWeight:'300', fontSize:20}}>Wallet:  ₹{wa}</Text>
                <TouchableOpacity style={{borderRadius:7, alignItems:'center', width:150, padding:10, backgroundColor:'green'}} onPress={addMoney}>
                    <Text style={{color:'white'}}>Add Money</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius:7, alignItems:'center', width:150, padding:10, backgroundColor:'green'}}>
                    <Text style={{color:'white'}}>Withdraw Money</Text>
                </TouchableOpacity>
                </View>
            </Modal>

            <View style={{height:'12%',alignItems:'center',marginTop:'7%', justifyContent:'center', flexDirection:'row', borderRadius:5, backgroundColor: '#eef9fe', elevation:5}}>
                <TouchableOpacity style={{marginRight:30, alignItems:'center'}} onPress={()=>{setModalDis2(!modalDis2)}}>
                    <FontAwesomeIcon icon={faWallet} size={25} style={{ color: "rgb(80, 130, 255)" }} />
                    <Text style={{color:'rgb(112, 112, 112)', fontWeight:'300'}}>Wallet</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight:30, alignItems:'center'}}>
                    <FontAwesomeIcon icon={faMessage} size={25} style={{ color: "rgb(11, 223, 103)" }} />
                    <Text style={{color:'rgb(112, 112, 112)', fontWeight:'300'}}>Support</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Payment methods')}style={{alignItems:'center'}}>
                    <FontAwesomeIcon icon={faCreditCard} size={25} style={{ color: "rgb(166, 71, 255)" }} />
                    <Text style={{color:'rgb(112, 112, 112)', fontWeight:'300'}}>Payment</Text>
                </TouchableOpacity>
            </View>

            <Text style={{color:'black', marginTop:15, fontWeight:'200'}}>Your Information</Text>

            <TouchableOpacity style={{flexDirection:'row', marginTop:9, alignItems:'center'}}>
                <View style={{height:30, width:30, borderRadius:15, backgroundColor:'rgb(234, 234, 234)', justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon icon={faShoppingBag} size={15} style={{ color: "rgb(116, 174, 255)" }}/></View>
                <Text style={{color:'black', marginLeft:20}}>Order History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection:'row', marginTop:9, alignItems:'center'}}>
                <View style={{height:30, width:30, borderRadius:15, backgroundColor:'rgb(234, 234, 234)', justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon icon={faRankingStar} size={15} style={{ color: "rgb(116, 174, 255)" }}/></View>
                <Text style={{color:'black', marginLeft:20}}>Rate Your Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', marginTop:9, alignItems:'center'}}>
                <View style={{height:30, width:30, borderRadius:15, backgroundColor:'rgb(234, 234, 234)', justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon icon={faAddressBook} size={15} style={{ color: "rgb(116, 174, 255)" }}/></View>
                <Text style={{color:'black', marginLeft:20}}>Address book</Text>
            </TouchableOpacity>

            <Text style={{color:'black', marginTop:9, fontWeight:'200'}}>Other Information</Text>

            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginTop:9}}>
                <View style={{height:30, width:30, borderRadius:15, backgroundColor:'rgb(234, 234, 234)', justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon icon={faUserGear} size={15} style={{ color: "rgb(116, 174, 255)" }}/></View>
                <Text style={{color:'black', marginLeft:20}}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginTop:9}}>
                <View style={{height:30, width:30, borderRadius:15, backgroundColor:'rgb(234, 234, 234)', justifyContent:'center', alignItems:'center'}}><FontAwesomeIcon icon={faHammer} size={15} style={{ color: "rgb(116, 174, 255)" }}/></View>
                <Text style={{color:'black', marginLeft:20}}>Auction Rules</Text>
            </TouchableOpacity>

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
    centeredView: {
        width:width*.6,
        height:height*.3,
        alignItems: "center",
        marginLeft:'20%',
        backgroundColor: "white",
        borderRadius: 20,
        paddingRight: 25,
        paddingLeft: 25,
        elevation: 40
      },
  });
  
  
  
  
export default Retailer_account;