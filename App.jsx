import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigation from './src/navigation/StackNavigation';

const navigation = createNativeStackNavigator()

const App = () => {
  return (
    <GestureHandlerRootView>
    <NavigationContainer>
      <View style={styles.container}>
       
        <StackNavigation />
      </View>
    </NavigationContainer>
    
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure the container takes the full screen space
  },
});
