import React,{useState,useEffect} from 'react';
import {View,Button,ScrollView,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Constants from "expo-constants";
import { PrivateValueStore } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-ionicons';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { parseIconName } from 'react-native-fontawesome';
const Header=()=>{
   
    
        return(
            <ScrollView style={styles.container} >
                <View>
                    {/* Je sais que ca ne correspond pas parfaitement mais c'est le mieux que j'ai pu trouver parmi les icones, les restes qui ressemblaient affichés un point d'interogation sur le simulateur*/}
                <View style={styles.flexItems}>
                    <Ionicons style={styles.icon} name="ios-arrow-back" size={48} color="white"/> 
                </View>
                    
                 <View style={styles.flexItems}>
                    <Text style={styles.title}>Teach'R's Favoris</Text>
                </View>
               </View>
            </ScrollView>
         )
       
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#0000FF",
    
        
    },

    flexItems:{
        display:"flex",
        justifyContent:"space-around",
        height:60,
        
       
    },

    icon:{
        marginLeft:15
    },

    title:{
        color:"white",
        marginLeft:20,
        fontWeight:"bold",
        fontSize:20
    }
})

export default Header;