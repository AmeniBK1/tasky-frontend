
import {Picker} from '@react-native-picker/picker';

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MINIMUM_PRICE = 5;

const FormScreen = () => {
  const [type, setType] = useState('');
  const [location, setLocation] = useState(null);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handlePost = () => {
    console.log('Type:', type);
    console.log('Location:', location);
    console.log('Price:', price);
    console.log('Description:', description);
  };
  const handleBlur = () => {
    if (price && parseFloat(price) < MINIMUM_PRICE) {
      setError('Price cannot be less than 5');
    } else {
      setError('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Type of Service:</Text>
        <Picker
          style={styles.inputService}
          selectedValue={type}
          onValueChange={(value) => setType(value)}
        >
          <Picker.Item label="Select Type of Service" value="" />
          <Picker.Item label="Carpentry" value="Carpentry" />
          <Picker.Item label="Kitchens" value="Kitchens" />
          <Picker.Item label="Plumbing" value="Plumbing" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location:</Text>
        <MapView
          style={styles.mapView}
          region={location}
          onPress={(e) => setLocation(e.nativeEvent.coordinate)}
        >
          {location && <Marker coordinate={location} />}
        </MapView>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Price (Dt) :</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter price"
          keyboardType="numeric"
          value={price}
          onChangeText={(text) => setPrice(text)}
          onBlur={handleBlur}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.descriptionInput}
          placeholder="Enter description"
          multiline={true}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    paddingTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputService: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    width: "70%",
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    width: "30%",
  },
  mapView: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 5,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    height: 100,
    textAlignVertical: 'top',
  },
  postButton: {
    backgroundColor: '#723DD4',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 5,
    fontSize: 14,
  },
});

export default FormScreen;

