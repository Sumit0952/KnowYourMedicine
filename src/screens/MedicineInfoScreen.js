import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { dimension } from '../utils/dimension';

const shapeImages = [
  require('../../Assets/image/capsule.png'),
  require('../../Assets/image/tri1.png'),
  require('../../Assets/image/pent1.png'),
  require('../../Assets/image/sept1.png'),
  require('../../Assets/image/capsule.png'),
  require('../../Assets/image/tri2.png'),
  require('../../Assets/image/sept1.png'),
  require('../../Assets/image/nano1.png'),
  require('../../Assets/image/capsule.png'),
  require('../../Assets/image/tri1.png'),
  require('../../Assets/image/nano2.png'),
  require('../../Assets/image/nano3.png'),
];

const mockMedicineData = [
    { id: 1, name: 'Claritin', details: { quantity: 60, time1: '08:00', quantity1: '1.0', time2: '12:00', quantity2: '1.5', time3: '18:00', quantity3: '2.0', time4: '22:00', quantity4: '1.0', purpose: 'Used to treat allergies' }},
    { id: 2, name: 'Lipitor', details: { quantity: 90, time1: '09:00', quantity1: '2.0', time2: '15:00', quantity2: '1.5', time3: '21:00', quantity3: '1.0', time4: '23:00', quantity4: '1.0', purpose: 'Reduces cholesterol' }},
    { id: 3, name: 'Zocor', details: { quantity: 30, time1: '07:00', quantity1: '1.0', time2: '13:00', quantity2: '1.0', time3: '19:00', quantity3: '1.5', time4: '21:00', quantity4: '2.0', purpose: 'Lowers cholesterol levels' }},
    { id: 4, name: 'Toprol', details: { quantity: 60, time1: '10:00', quantity1: '1.0', time2: '14:00', quantity2: '0.5', time3: '20:00', quantity3: '1.0', time4: '22:00', quantity4: '1.5', purpose: 'Treats high blood pressure' }},
    { id: 5, name: 'Namenda', details: { quantity: 30, time1: '09:30', quantity1: '1.0', time2: '15:30', quantity2: '1.5', time3: '21:30', quantity3: '2.0', time4: '23:30', quantity4: '1.0', purpose: 'Alzheimer\'s disease treatment' }},
    { id: 6, name: 'Aspirin', details: { quantity: 100, time1: '08:00', quantity1: '1.0', time2: '14:00', quantity2: '1.0', time3: '20:00', quantity3: '1.0', time4: '22:00', quantity4: '1.0', purpose: 'Pain relief and anti-inflammatory' }},
    { id: 7, name: 'Januvia', details: { quantity: 60, time1: '07:00', quantity1: '1.0', time2: '13:00', quantity2: '1.0', time3: '19:00', quantity3: '1.5', time4: '21:00', quantity4: '1.0', purpose: 'Diabetes management' }},
    { id: 8, name: 'Lasix', details: { quantity: 30, time1: '08:00', quantity1: '1.0', time2: '12:00', quantity2: '1.5', time3: '18:00', quantity3: '1.0', time4: '20:00', quantity4: '1.0', purpose: 'Treats fluid retention' }},
    { id: 9, name: 'Glucophage', details: { quantity: 60, time1: '09:00', quantity1: '2.0', time2: '15:00', quantity2: '1.5', time3: '21:00', quantity3: '1.0', time4: '23:00', quantity4: '1.0', purpose: 'Helps control blood sugar' }},
    { id: 10, name: 'Aricept', details: { quantity: 30, time1: '08:00', quantity1: '1.0', time2: '12:00', quantity2: '1.0', time3: '18:00', quantity3: '1.5', time4: '22:00', quantity4: '1.0', purpose: 'Improves cognition in Alzheimer\'s patients' }},
    { id: 11, name: 'Triphala', details: { quantity: 60, time1: '09:30', quantity1: '1.0', time2: '15:30', quantity2: '1.5', time3: '21:30', quantity3: '2.0', time4: '23:30', quantity4: '1.0', purpose: 'Herbal remedy for digestion' }},
    { id: 12, name: 'Advair', details: { quantity: 30, time1: '08:00', quantity1: '1.0', time2: '12:00', quantity2: '1.0', time3: '18:00', quantity3: '1.5', time4: '22:00', quantity4: '1.0', purpose: 'Used to control asthma and COPD' }},
    { id: 13, name: 'Lantus', details: { quantity: 30, time1: '07:00', quantity1: '1.0', time2: '14:00', quantity2: '1.0', time3: '19:00', quantity3: '1.5', time4: '21:00', quantity4: '1.0', purpose: 'Long-acting insulin for diabetes' }},
    { id: 14, name: 'Furosemide', details: { quantity: 60, time1: '09:00', quantity1: '2.0', time2: '15:00', quantity2: '1.5', time3: '21:00', quantity3: '1.0', time4: '23:00', quantity4: '1.0', purpose: 'Treats fluid retention and high blood pressure' }},
    { id: 15, name: 'Amoxicillin', details: { quantity: 30, time1: '08:00', quantity1: '1.0', time2: '12:00', quantity2: '1.0', time3: '18:00', quantity3: '1.5', time4: '22:00', quantity4: '1.0', purpose: 'Antibiotic for infections' }},
    { id: 16, name: 'Metformin', details: { quantity: 60, time1: '09:30', quantity1: '1.0', time2: '15:30', quantity2: '1.5', time3: '21:30', quantity3: '2.0', time4: '23:30', quantity4: '1.0', purpose: 'Helps control blood sugar levels' }},
    { id: 17, name: 'Citalopram', details: { quantity: 30, time1: '08:00', quantity1: '1.0', time2: '12:00', quantity2: '1.0', time3: '18:00', quantity3: '1.5', time4: '22:00', quantity4: '1.0', purpose: 'Treats depression' }},
    { id: 18, name: 'Sertraline', details: { quantity: 60, time1: '09:00', quantity1: '2.0', time2: '15:00', quantity2: '1.5', time3: '21:00', quantity3: '1.0', time4: '23:00', quantity4: '1.0', purpose: 'Used to treat depression and anxiety' }},
    { id: 19, name: 'Duloxetine', details: { quantity: 30, time1: '08:00', quantity1: '1.0', time2: '12:00', quantity2: '1.0', time3: '18:00', quantity3: '1.5', time4: '22:00', quantity4: '1.0', purpose: 'Treats depression and anxiety disorders' }},
    { id: 20, name: 'Gabapentin', details: { quantity: 60, time1: '09:30', quantity1: '1.0', time2: '15:30', quantity2: '1.5', time3: '21:30', quantity3: '2.0', time4: '23:30', quantity4: '1.0', purpose: 'Used for nerve pain and seizures' }}
  ];
  

const MedicineInfoScreen = () => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation(); // Access navigation

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      setTimeout(() => {
        setMedicines(mockMedicineData); // Mock API call
        setLoading(false);
      }, 1000); 
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const renderMedicineItem = ({ item, index }) => {
    const imageSource = shapeImages[index % shapeImages.length];
    console.log(item)
    
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('MedicineDetailsScreen', { medicine: item,imageSource })} // Pass medicine data
        style={styles.itemContainer}
      >
        <Image source={imageSource} style={styles.medicineImage} />
        {console.log(imageSource)}
        
        <Text style={styles.medicineName}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#800080" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={medicines}
        renderItem={renderMedicineItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  medicineImage: {
    width: 35,
    height: 35,
    marginRight: 15,
  },
  medicineName: {
    fontSize: dimension.xl,
    color: '#333',
  },
});

export default MedicineInfoScreen;
