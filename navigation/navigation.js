import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen'
import ServicesScreen from '../screens/ServicesScreen';
import ConfimationScreen from '../screens/ConfimationScreen';
const Stack = createNativeStackNavigator();


export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        <Stack.Screen name="Booking" options={{headerShown:false}} component={BookingScreen} />
        <Stack.Screen name="Services" options={{headerShown:false}} component={ServicesScreen} />
        <Stack.Screen name="Confirmation" options={{headerShown:false}} component={ConfimationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}