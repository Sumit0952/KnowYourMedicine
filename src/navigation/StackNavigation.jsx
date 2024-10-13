import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/Home';
import { colors } from '../utils/colors';
import Quiz from '../screens/Quiz';
import MedicineInfoScreen from '../screens/MedicineInfoScreen';
import Entypo from 'react-native-vector-icons/Entypo'
import MedicineDetailsScreen from '../screens/MedicineDetailsScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false, }}
      />
      <Stack.Screen
        name="MedicineDetailsScreen"
        component={MedicineDetailsScreen}
        options={({ navigation }) => ({ 
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.header, // Change this to your desired header color
            title: false,
            
          },
          headerTintColor: colors.header,
          headerRight: () => (
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => {
                // Implement logout functionality here
                navigation.navigate('Home');
              }}
            >
              <Text style={styles.logoutText}>Home</Text>
            </TouchableOpacity>
          ),
         })}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Home',
          headerTitleAlign: 'center',
          headerTitleStyle: { 
            color:colors.textPrimary
        },
          
  
          
          headerStyle: {
            backgroundColor: colors.header, // Change this to your desired header color
            
          },
          headerTintColor: '#fff', // Color of the header text and icons
          // headerLeft: () => {         return <View style={{ marginLeft: 50 }}></View>; },
          headerBackVisible:false,
          headerRight: () => (
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => {
                // Implement logout functionality here
                navigation.navigate('LoginScreen');
              }}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Medicine Info"
        component={MedicineInfoScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Medicine Info',
          headerTitleAlign: 'center',
          headerTitleStyle: { 
            color:colors.textPrimary
        },
          
  
          
          headerStyle: {
            backgroundColor: colors.header, // Change this to your desired header color
            
          },
          headerTintColor: '#fff', // Color of the header text and icons
          // headerLeft: () => {         return <View style={{ marginLeft: 50 }}></View>; },
          headerBackVisible:false,
          headerLeft: () => (
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => {
                // Implement logout functionality here
                navigation.navigate('Home');
              }}
            >
              <Entypo name = 'chevron-left' size = {20} color = {colors.blue1}/>
              <Text style={styles.logoutText}>Home</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Random Quiz"
        component={Quiz}
        options={{ headerShown: true,  headerStyle: {
            backgroundColor: colors.header, // Change this to your desired header color
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => {
                // Implement logout functionality here
                navigation.navigate('LoginScreen');
              }}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          ),
        }}
          
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 15, // Adjust for spacing on the right
    flexDirection:'row'
  },
  logoutText: {
    color: colors.blue1, // Assuming Button1's color is something like this
    fontSize: 16,
    fontWeight: 'bold',
  },
});
