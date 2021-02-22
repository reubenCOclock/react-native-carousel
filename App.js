import React, { useState, useEffect } from "react";
import { AsyncStorage,View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Teachers from './container/Teachers'
import Header from './container/Header'


const Stack = createStackNavigator();
const Tab=createBottomTabNavigator()
export default function App() {

  return (
    <>
    
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name={"Teach'r Favorites"} component={Teachers}   options={{
         
          headerStyle: {
            backgroundColor: "#0000FF",
            
          }
          
        }}/>
             
          
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}


