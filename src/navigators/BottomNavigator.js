import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { colors } from '../components/colors';
import {View} from 'react-native';
import ClientScreen from '../screens/ClientScreen';
import PostHistory from '../screens/PostHistory';
import FormScreen from '../screens/FormScreen';
import DemandScreen from '../screens/DemandScreen';
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
    <Tab.Navigator>
     <Tab.Screen name="Client" component={ClientScreen}/>
     <Tab.Screen name="History" component={PostHistory}/>
     <Tab.Screen name="AddPost" component={FormScreen}/>
     <Tab.Screen name="Dmeands" component={DemandScreen}/>
    </Tab.Navigator>
    );
};
export default BottomNavigator;