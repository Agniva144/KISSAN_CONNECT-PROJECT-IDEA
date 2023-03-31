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
    return (
        <SafeAreaView style={{backgroundColor:'white', height:height, width:width}}>
            <View style={{width:width, height:height, backgroundColor:'yellow'}}>
              <Image source={require('./assets/payment.jpeg')} style={{width:width, height:height}}/>
            </View>
        </SafeAreaView>
    )
}