import React from 'react';
import FarmerAlt from './FarmerAlt';
import Farmer_account from './Farmer_account';
import Produce from './Produce';
import FarNotifications from './FarNotifications';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default FarmerConnect = () => {
    return(
        
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="KishanConnect" component={FarmerAlt} options={{ headerShown: false }}/>
            <Stack.Screen name="pro" component={Produce} options={{ headerShown: false }}/>
            <Stack.Screen name="Not" component={FarNotifications} options={{ headerShown: false }}/>
            <Stack.Screen name="Profile" component={Farmer_account}/>
        </Stack.Navigator>
        </NavigationContainer>
        
    )
}