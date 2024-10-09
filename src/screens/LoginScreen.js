import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Top design */}
      <View style = {{flexDirection:'row',gap:-50}}>
        <View style={styles.topDesign} />
        <View style={styles.topDesign1} />
      </View>

      {/* Demo Button */}
      <TouchableOpacity style={styles.demoButton}>
        <Text style={styles.demoText}>Demo</Text>
      </TouchableOpacity>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter User Id"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#aaa"
          secureTextEntry={true}
        />

        {/* Sign In and Sign Up buttons */}
        <View style={styles.buttonContainer}>
          <Button title="Sign In" color="#800040" onPress={() => {}} />
          <Button title="Sign Up" color="#800040" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topDesign: {
    width: '80%',
    height: 190,
    backgroundColor: '#800040',
    borderBottomLeftRadius: 7000,
    borderBottomRightRadius: 20000,
    marginRight:20,
    top: -200,
    
  },
  topDesign1: {
    width: '80%',
    height: 160,
    backgroundColor: '#800040',
    borderBottomRightRadius: 20000,
    borderBottomLeftRadius: 40000,
    marginLeft:20,
   
    //positi=on: 'absolute',
    top: -200,
  },
  demoButton: {
    position: 'absolute',
    top: 150,
    right: 30,
    backgroundColor: '#800040',
    padding: 10,
    borderRadius: 5,
  },
  demoText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  formContainer: {
    width: '80%',
    marginTop: 200,
    verticalAlign:'middle',
    alignSelf:'center'
    
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 90,
    width: '40%',
    alignSelf:'center',
    borderRadius:50,
  },
});
