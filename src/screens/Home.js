import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { dimension } from '../utils/dimension';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../utils/colors';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Rohan Bhale</Text>
      <FontAwesome5 name = 'cloud-download-alt' size = {220} color = {colors.iconPrimary}/>
      <View style = {{flexDirection:'row',gap:15}}>
      <TouchableOpacity
        style={styles.button}
       // onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={styles.buttonText}>Know Your Medicine</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Medicine Info')}
      >
        <Text style={styles.buttonText}>View Your Medicine</Text>
      </TouchableOpacity>
      </View>
      <View style = {{flexDirection:'row',gap:15}}>
      <TouchableOpacity
        style={styles.button}
        //onPress={() => navigation.navigate('Medicine Info')}
      >
        <Text style={styles.buttonText}>Simple Test</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Random Quiz')}
      >
        <Text style={styles.buttonText}>Random Text</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: dimension.xl,
    marginBottom: 30,
    color:colors.textPrimary,
    alignSelf:'flex-start',
    margin:20
  },
  button: {
    backgroundColor: colors.button2,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width:180
  },
  buttonText: {
    color: '#fff',
    fontSize: dimension.lg,
    alignSelf:'center'
  },
});

export default HomeScreen;
