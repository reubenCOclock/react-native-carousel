import React,{useState,useEffect} from 'react';
import {View,Button,ScrollView,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Constants from "expo-constants";
import { PrivateValueStore } from '@react-navigation/native';


const CardItem=({item,index})=>{
   
    
    return (
        <View style={styles.container} key={index}>
         <View style={{display:"flex", flexDirection:"row"}}>
            <View style={{width:"25%",marginTop:20}}> 
              <Image 
                source={item.image}
                style={styles.image}
              />
            </View>
         
             <View style={{width:"60%",display:"flex",justifyContent:"center",marginLeft:25}}> 
                <Text style={{fontWeight:"bold",fontSize:15}}> {item.firstname} {item.lastname} </Text>
                
             </View>
                
         </View>
           
           <View style={{marginTop:20}}>
              <Text style={{color:"#808080",fontWeight:"bold"}}> Formation</Text>
           </View>

           <View style={{marginTop:5}}>
              <Text style={{fontWeight:"bold",fontSize:15}}> {item.institution}</Text>
           </View>
          
          <View style={{marginTop:20}}>
              <Text style={{color:"#808080",fontWeight:"bold"}}> Description</Text>
          </View>

          <View style={{marginTop:5}}>
              <Text style={{fontWeight:"bold",fontSize:15}}> {item.description}</Text>
           </View>

          <View style={{marginTop:20}}>
          <TouchableOpacity
              style={styles.buttonFilled}
            
             >
            <Text style={{color:"white"}}>Prendre un cours avec ce teach'r</Text>
           </TouchableOpacity> 

       
          </View> 

          <View style={{marginTop:10}}>
          <TouchableOpacity
              style={styles.buttonOpaque}
            
             >
            <Text style={{color:"#DC143C"}}>Supprimer ce teach'r de mes favoris</Text>
           </TouchableOpacity> 
          </View>

          

          
          
        </View>
      )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 8,
      paddingBottom: 20,
      paddingTop:20,
      paddingLeft:20,
      paddingRight:20,
      shadowColor: "#000",
      width:"100%",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 150 / 2,
        overflow: "hidden",
        
    },
    header: {
      color: "#222",
      fontSize: 28,
      fontWeight: "bold",
      paddingLeft: 20,
      paddingTop: 20
    },
    body: {
      color: "#222",
      fontSize: 18,
      paddingLeft: 20,
      paddingLeft: 20,
      paddingRight: 20
    },

    buttonFilled:{
      backgroundColor:"#1E90FF",
      alignItems:"center",
      paddingTop:10,
      paddingBottom:10
      

    },

    buttonOpaque:{
      alignItems:"center",
      backgroundColor:"white",
      paddingTop:10,
      paddingBottom:10,
      borderWidth:1,
      borderColor:'#DC143C'
    }
  })

  export default CardItem;