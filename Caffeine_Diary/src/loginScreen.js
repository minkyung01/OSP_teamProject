import { StatusBar } from "expo-status-bar";
import React, { useState,useContext } from "react";
import {Pressable} from "react-native";
import InfoContext from './components/InfoContext';
import Title from './components/Title';
import {basicColor,themeColor} from './colors'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
const LoginScreen = () => {
  const [name,setName] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(InfoContext);
    const handleSubmitButton = () => {
      if (name==='' ||password==='') {
        alert('Please fill ID and Password');
      }
      else{
        if(name===userContext.ID && password===userContext.Password)
            alert('go to main page');
        else
            alert('Invalid ID and Password');
        setName('');
        setPassword('');
      }

   }


  return (
    <View style={styles.container}>
      <Title />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="ID:"
          placeholderTextColor="#000000" //basicColor.text
          onChangeText={(Name) => setName(Name)}
          value={name}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password:"
          placeholderTextColor="#000000" //basicColor.text
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value = {password}
        />
      </View>
 
      <Pressable style={styles.loginBtn} onPress={handleSubmitButton}>
        <Text style={styles.loginText}>Sign In</Text>
      </Pressable>

      

      <Pressable style={styles.signup_Btn}
      onPress={()=>{alert('go to sign up page')}}>
        <Text style={styles.loginText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};
 
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
    backgroundColor:themeColor.Orange.light,
    borderRadius: 25,
    width: '80%',
    height:50,
    margin: 10,
    alignItems:'center',
    justifyContent: "center",
  },
  
});

export default LoginScreen;