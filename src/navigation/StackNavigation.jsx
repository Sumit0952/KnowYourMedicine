import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    
       <Stack.Navigator>
        <Stack.Screen name = 'LoginScreen' component={LoginScreen} />
       
       </Stack.Navigator>
       
   
  )
}

export default StackNavigation

const styles = StyleSheet.create({})