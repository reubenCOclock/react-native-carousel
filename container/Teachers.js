import React,{useState,useEffect} from 'react';
import {View,Button,ScrollView,Text,StyleSheet} from 'react-native';
import Constants from "expo-constants";
import Carousel from 'react-native-snap-carousel'
import {Dimensions} from 'react-native';

import data from './data'

import CardItem from "./CardItem"
import Header from "./Header"

const Teachers=()=>{
    const isCarousel = React.useRef(null);

    const sliderWidth = Dimensions.get('window').width;
    console.log("get slider width");
    console.log(sliderWidth)
     const itemWidth = Math.round(sliderWidth* .7)
    const itemHeight = "100%";
    return (
      <ScrollView style={styles.container}> 
      <Header/>
        <View style={{marginTop:20}}>
          <Carousel
            layout="default"
            layoutCardOffset={9}
            ref={isCarousel}
            data={data}
            renderItem={CardItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            itemHeight={itemHeight}
            inactiveSlideShift={0}
            scrollView={true}
            
          />
        </View>
        </ScrollView>
      
      )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
       
    },

    width:{
        width:50
       
    },

    height:{
        height:20
    },

    flexStart:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly"
        
    }
})

export default Teachers;