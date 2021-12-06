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
  const [email, setID] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmitButton = () => {
    setErrortext('');
    if (!ID) {
      alert('Please fill ID');
      return;
    }
    
    if (!Password) {
      alert('Please fill Password');
      return;
    }
    
 }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/coffee.png")} />  
      <StatusBar style="auto" />
      <View style={styles.inputView}>

        <TextInput
          style={styles.TextInput}
          placeholder="ID:"
          placeholderTextColor="#000000" //basicColor.text
          onChangeText={(Name) => setName(Name)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password:"
          placeholderTextColor="#000000" //basicColor.text
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign In</Text>
      </TouchableOpacity>

      

      <TouchableOpacity style={styles.signup_Btn}>
        <Text style={styles.signup_Btn}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // basicColor.background
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFE4C3", //themeColor.Orange.light
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF991C", //themeColor.Orange.dark
  },
  signup_Btn: {
    height: 30,
    marginBottom: 30,
  },
  
});

export default loginScreen;