import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../components/Header/Header';
import MainContainer from '../components/containers/MainContainer';
import PostHistory from './PostHistory';
import FormScreen from './FormScreen';
import { FontAwesome } from '@expo/vector-icons'; 
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
function History() {
    return(
      <PostHistory/>
    )
}
function AddPost() {
    return(
       <FormScreen/>
    )
}

const Tab = createBottomTabNavigator();

const PrestScreen = () => {
  return (
    <MainContainer>
        
    <NavigationContainer>
      <Tab.Navigator  
      screenOptions={({ route }) => ({
        tabBarIcon: ({  color, size }) => {
          let iconName;
         
        },
        tabBarActiveTintColor: '#B69FDF',
        tabBarInactiveTintColor: 'gray',
      })}
    >
        <Tab.Screen name="History" component={History} 
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" color={color} size={size} />
          ),
        }}/>
        
        <Tab.Screen name="Add Post" component={AddPost}
        options={{
          tabBarLabel: 'Add Post',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle-outline" color={color} size={size} />
          ),
        }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
    </MainContainer>
  );
};
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#B69FDF',
    borderTopWidth: 1,
    borderTopColor: '#fff',
    paddingTop: 5,
    paddingBottom: 3,
    height: 60,
  },
});

export default PrestScreen;