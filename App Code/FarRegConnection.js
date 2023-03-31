import React, { useState, useEffect } from 'react';
import { SafeAreaView, Dimensions, Text,StyleSheet, View, Image, TouchableOpacity, Modal, Keyboard, TextInput,Pressable } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { storeData, dbref} from './database';
import {child, get, push, update } from 'firebase/database';
import { storeAsync, getData } from './AsyncStore';
import {
  faPhone,
  faAddressBook,
  faDriversLicense,
  faUserCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import LinearGradient from 'react-native-linear-gradient';
import FarmerConnect from './FarmerConnect';
import FarCon from './FarCon';
import Farmer from './Farmer';
import Spinner from 'react-native-loading-spinner-overlay';

export default FarRegConnection = () => {
    const Spi = <Spinner
        overlayColor='green'
        color='white'
        size = 'large'
        animation='fade'
        visible={true}
        textContent={'Loading..'}
        textStyle = {{color:'white', fontSize:15}}
    />
    
    const [done, setDone] = useState(1);
    
    
    getData().then((data) => {data.Name?setDone(2):setDone(3);})

    if(done===1){return(<>{Spi}</>)}
    else if(done===2){return(<FarCon/>)}
    else{return(<FarmerConnect/>)}
}