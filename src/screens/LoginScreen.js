import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'; // Import useState to manage input focus
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [focusedUserId, setFocusedUserId] = useState(false); // State to manage focus for User Id input
  const [focusedPassword, setFocusedPassword] = useState(false); // State to manage focus for Password input

  return (
    <View style={styles.container}>
      {/* Top Design with Image */}
      <Image
        source={require('../../Assets/image/Component1.png')} // Header image for the top section
        style={styles.topSection}
        resizeMode='stretch' // Adjusts the image to fit the container
      />

      {/* Login Form */}
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.demoButton}>
          <Text style={styles.demoText}>Demo</Text>
        </TouchableOpacity>

        {/* User Id Input */}
        <TextInput
          style={[styles.input, focusedUserId && styles.inputFocused]} // Apply focused style when active
          placeholder="Enter User Id"
          placeholderTextColor="#aaa"
          onFocus={() => setFocusedUserId(true)} // Set focused state to true on focus
          onBlur={() => setFocusedUserId(false)} // Reset focused state on blur
        />

        {/* Password Input */}
        <TextInput
          style={[styles.input, focusedPassword && styles.inputFocused]} // Apply focused style when active
          placeholder="Enter Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
          onFocus={() => setFocusedPassword(true)} // Set focused state to true on focus
          onBlur={() => setFocusedPassword(false)} // Reset focused state on blur
        />

        {/* Sign In and Sign Up Buttons */}
        <View style={styles.buttonContainer}>
          <Button title="Sign In" color="#800040" onPress={() => { navigation.navigate('Home'); }} />
          <Button title="Sign Up" color="#800040" onPress={() => {}} />
        </View>
      </View>

      {/* Bottom Section with Image */}
      <Image
        source={require('../../Assets/image/Component2.png')} // Header image for the bottom section
        style={styles.bottomSection}
        resizeMode='stretch' // Adjusts the image to fit the container
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between', // Use space-between to distribute space evenly
  },
  topSection: {
    width: "100%", // Full width for responsive design
    height: 200, // Adjust as needed
  },
  bottomSection: {
    width: '100%', // Full width for responsive design
    height: 200, // Adjust the height as needed
  },
  demoButton: {
    position: 'absolute',
    top: -60,
    right: 30,
    backgroundColor: '#800040',
    padding: 10,
    borderRadius: 5,
    zIndex: 1, // Ensure the button is above other components
  },
  demoText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  formContainer: {
    width: '80%',
    marginTop: 30,
    alignItems: 'center',
    zIndex: 0, // Ensure the form is below the demo button
  },
  input: {
    height: 40,
    borderColor: '#ccc', // Default border color
    borderBottomWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    
    width: '100%',
  },
  inputFocused: {
    borderColor: 'blue', // Change border color to blue when focused
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 90,
    width: '60%',
    alignSelf: 'center',
    borderRadius: 10,
  },
});
