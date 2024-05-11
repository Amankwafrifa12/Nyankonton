import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import About from '../screens/About';
import Glossary from '../screens/Glossary';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
   <NavigationContainer>
    <Tab.Navigator>
       
    </Tab.Navigator>
   </NavigationContainer>
  );
}

export default BottomTab

