import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/Home';
import { colors } from '../utils/colors';
import Quiz from '../screens/Quiz';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Home',
          headerStyle: {
            backgroundColor: colors.header, // Change this to your desired header color
          },
          headerTintColor: '#fff', // Color of the header text and icons
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
  },
  logoutText: {
    color: colors.blue1, // Assuming Button1's color is something like this
    fontSize: 16,
    fontWeight: 'bold',
  },
});
