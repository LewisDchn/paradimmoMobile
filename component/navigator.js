import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Propertys from "./Propertys";
import Property from "./Property";
import Home from "./home";


const Stack = createStackNavigator();
const createNavigationProperty = () => {
    return(
            <Stack.Navigator>
                <Stack.Screen name="Propertys" component={Propertys} />
                <Stack.Screen name="Property" component={Property} />
            </Stack.Navigator>
    );
}
export default createNavigationProperty;
