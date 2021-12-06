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
 
export default function App() {
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/checkBox.png")} />  
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.signin_Btn}>
        <Text style={styles.signin_Btn}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
 
 
  image: {
    marginBottom: 40,
  },
 
  signin_Btn: {
    height: 30,
    marginBottom: 30,
  },

});
export default successScreen;