import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Top design */}
      <View style = {styles.topDesign0}/>
      <View style = {{flexDirection:'row',justifyContent:'space-around'}}>
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
          <Button title="Sign In" color="#800040" onPress={() => {navigation.navigate('Home')}} />
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
    //marginRight:20,
    top: -100,
    
  },
  topDesign0: {
    width: '100%',
    height: 90,
    backgroundColor: '#800040',
    
    //marginRight:20,
    top:-90   
  },
  topDesign1: {
    width: '80%',
    height: 160,
    backgroundColor: '#800040',
    borderBottomRightRadius: 9000,
    borderBottomLeftRadius: 40000,
    //marginLeft:20,
   
    //positi=on: 'absolute',
    top: -110,
  },
  demoButton: {
    position: 'absolute',
    top: 220,
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
