import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';

const MedicineDetailsScreen = ({ route, navigation }) => {
  // Destructure passed medicine data from route params
  const { medicine,imageSource } = route.params;
  console.log(imageSource)
  if(imageSource)console.log(false)

  return (
    <View style={styles.container}>
     

      <View style={styles.content}>
        <Text style={styles.showingText}>Showing : <Text style={styles.innerText}>{medicine.id}</Text></Text>

        <Image source={imageSource} style={styles.medicineImage} />

        <Text style={styles.showingText}>Name: <Text style={styles.innerText}>{medicine.name}</Text></Text>
        <Text style={styles.showingText}>Quantity: <Text style={styles.innerText}>{medicine.details.quantity}</Text></Text>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.showingText}>Time1: <Text style={styles.innerText}>{medicine.details.time1}</Text></Text>
            <Text style={styles.showingText}>Time2: <Text style={styles.innerText}>{medicine.details.time2}</Text></Text>
            <Text style={styles.showingText}>Time3: <Text style={styles.innerText}>{medicine.details.time3}</Text></Text>
            <Text style={styles.showingText}>Time4: <Text style={styles.innerText}>{medicine.details.time4}</Text></Text>

          </View>
          <View style={styles.column}>
            <Text style={styles.showingText}>Quantity1: <Text style={styles.innerText}>{medicine.details.quantity1}</Text></Text>
            <Text style={styles.showingText}>Quantity2: <Text style={styles.innerText}>{medicine.details.quantity2}</Text></Text>
            <Text style={styles.showingText}>Quantity3: <Text style={styles.innerText}>{medicine.details.quantity3}</Text></Text>
            <Text style={styles.showingText}>Quantity4: <Text style={styles.innerText}>{medicine.details.quantity4}</Text></Text>
          </View>
        </View>

        <Text style={styles.showingText}>Purpose: {'\n'}<Text style={styles.innerText}>{medicine.details.purpose}</Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#800080',
    padding: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    marginTop: 20,
  },
  showingText: {
    fontSize: 16,
    marginBottom: 10,
    color:colors.textPrimary,
    fontWeight:'bold'
  },
  medicineImage: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  medicineDetail: {
    fontSize: 18,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  column: {
    flex: 1,
  },
  timeText: {
    fontSize: 16,
    marginBottom: 5,
  },
  quantityText: {
    fontSize: 16,
    marginBottom: 5,
  },
  purposeText: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
  innerText:{
    fontWeight:'300',
    color:colors.textPrimary
  }
});

export default MedicineDetailsScreen;
