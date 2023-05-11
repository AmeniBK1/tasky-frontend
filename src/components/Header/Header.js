import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.profileButton}>
      <Ionicons name="notifications-outline" size={30} color="white" style={styles.ProfilePic} />
      </TouchableOpacity>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity style={styles.profileButton}>
      <Feather name="user" size={30} color="white"  style={styles.notification} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#723DD4',
    borderBottomWidth: 1,
    borderBottomColor: '#B69FDF',
    width: "100%",
    paddingTop: 22,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 5,
    color: "#fff",
  },
  profileButton: {
    alignItems: 'center',
  },
  ProfilePic: {
    marginLeft: 10,
  },
  notification: {
    paddingRight: 10,
  }
});


export default Header;