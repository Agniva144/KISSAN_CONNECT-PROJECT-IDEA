import React from 'react';
import Retailer_home from './Retailer_home';
import Retailer_demand from './Retailer_demand';
import Retailer_checkout from './Retailer_checkout';
import Retailer_account from './Retailer_account';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default Retailer = () => {
    return(
        
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Retailer Home" component={Retailer_home} options={{ headerShown: false }}/>
            <Stack.Screen name="Enlist Your Demand" component={Retailer_demand} options={{ headerShown: false }}/>
            <Stack.Screen name="Checkout items" component={Retailer_checkout} options={{ headerShown: false }}/>
            <Stack.Screen name="Retailer Profile" component={Retailer_account} navigationOptions={{ backgroundColor: '#f8f8f8'}}/>

        </Stack.Navigator>
        </NavigationContainer>
        
    )
}