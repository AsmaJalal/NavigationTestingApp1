import React, { Component } from 'react'

import HomeScreen from './Screens/Home';
import NotificationScreen from './Screens/Notification';
import ProfileScreen from './Screens/Profile';
import SearchScreen from './Screens/Search';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createMaterialBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: '#F36D7A'}} activeColor="#000000" >
      <Tab.Screen name="Home" component={HomeScreen}            //Home Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26}/>
        ),
    }}/>
      <Tab.Screen name="Search" component={SearchScreen}        // Search Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26}/>
        ),
    }}/>
      <Tab.Screen name="Notification" component={NotificationScreen}      // Notification Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26}/>
        ),
    }}/>
      <Tab.Screen name="Profile" component={ProfileScreen}            // Profile Screen
      options={{
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26}/>
        ),
    }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}