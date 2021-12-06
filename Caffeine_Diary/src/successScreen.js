import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
//import {basicColor,themeColor} from '../colors'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
const SuccessScreen=()=> {
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/checkBox.png")} />  
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.signin_Btn}>
        <Text style={{fontSize:50,alignSelf:'center'}}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
 container:{
    alignItems:'center',
    marginBottom:'auto',
    marginTop:'auto',
 },
  image: {
    marginBottom: 40,
    alignSelf:'center',
    margin:30,
  },
 
  signin_Btn: {
    marginBottom: 30,
  },

});
export default SuccessScreen;