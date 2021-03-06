import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import InfoContext from './components/InfoContext';
import {Pressable} from 'react-native';
import Title from './components/Title';
import {basicColor,themeColor} from './colors';
import BackArrow from './components/BackArrow';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
const SignupScreen =({navigation}) =>{
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [submit,setSubmit] = useState(false);
    const userContext = useContext(InfoContext);
    const handleSubmitButton = () => {
      if (name==='' ||password==='') {
        alert('Please fill ID and Password');
      }
      else{
        navigation.navigate('Login');
        userContext._setId(name);
        userContext._setPassword(password);
        setName('');
        setPassword('');
      }
      
   }
    return (
      <View style={styles.container}>
        <BackArrow navigation={navigation} />
        <Title />
        <StatusBar style="auto" />
        <View style={[styles.inputView,{backgroundColor:userContext.SkinColor.light}]}>
  
          <TextInput
            style={styles.TextInput}
            placeholder="ID:"
            placeholderTextColor={basicColor.text}
            onChangeText={(name) => setName(name)}
            value={name}
          />
        </View>
   
 
      <View style={[styles.inputView,{backgroundColor:userContext.SkinColor.light}]}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#000000" //basicColor.text
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
      </View>
 
      <Pressable style={[styles.signup_Btn,{backgroundColor:userContext.SkinColor.dark}]} onPress={handleSubmitButton}>
        <Text>Sign Up</Text>
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
    alignSelf:'center',

  },
 
  signup_Btn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  
});

export default SignupScreen;
/*if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Image/success.png')}
          style={{
            height: 150,
            resizeMode: 'contain',
            alignSelf: 'center'
          }}
        />
        <Text style={styles.successTextStyle}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  } */