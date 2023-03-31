import React from 'react';
import FarmerConnect from './FarmerConnect';
import Welcome from './Welcome';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default FarAllCon = () => {
    return(
        
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="welcome" component={ Welcome } options={{ headerShown: false }}/>
            <Stack.Screen name="FarmerConnect" component={ FarmerConnect } options={{ headerShown: false }}/>
        </Stack.Navigator>
        </NavigationContainer>
        
    )
}