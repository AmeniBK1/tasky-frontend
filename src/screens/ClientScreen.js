import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../components/Header/Header';
import MainContainer from '../components/containers/MainContainer';
import MainContainerH from '../components/containers/MainContainerH';
import PostHistory from './PostHistory';
import FormScreen from './FormScreen';
import RequestsScreen from './RequestsScreen';
import { FontAwesome } from '@expo/vector-icons'; 
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


function History() {
    return(
      <PostHistory/>
    )
}
function Service() {
    return(
       <FormScreen/>
    )
}
function Requests() {
  return(
     <RequestsScreen/>
  )
}

const Tab = createBottomTabNavigator();

const ClientScreen = () => {
  return (
    <MainContainerH >
      <Header/>
    <NavigationContainer independent={true}>
      <Tab.Navigator  
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({  color, size }) => {
          let iconName;
         
        },
        tabBarActiveTintColor: '#723DD4',
        tabBarInactiveTintColor: 'gray',
      })}
    >
        <Tab.Screen name="History" component={History}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="history" color={color} size={25} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 14, color }}>History</Text>
          ),
        }}/>
        
        <Tab.Screen name="Service" component={Service}
        options={{
          headerShown: false,
          tabBarIcon: ({ color}) => (
            <MaterialIcons name="add-circle" color={color} size={32} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 14, color }}>Add Service</Text>
          ),
        }} 
        />
        <Tab.Screen name="Requests" component={Requests}
        options={{
          headerShown: false,
          tabBarIcon: ({ color}) => (
            <Ionicons name="md-list-circle" size={30} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 14, color }}>Requests</Text>
          ),
        }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
    </MainContainerH>
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

export default ClientScreen;