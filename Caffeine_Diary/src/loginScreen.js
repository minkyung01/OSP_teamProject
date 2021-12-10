import { StatusBar } from "expo-status-bar";
import React, { useState,useContext } from "react";
import {Pressable} from "react-native";
import {iconImages} from './images';
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

const LoginScreen = ({navigation}) => {
  const userContext = useContext(InfoContext);
  const [name,setName] = useState("");
  const [password, setPassword] = useState("");
  const [isTouch, setIsTouch] = useState(userContext.KeepSignIn);
    const handleSubmitButton = () => {
      if (name==='' ||password==='') {
        alert('Please fill ID and Password');
      }
      else{
        if(name===userContext.ID && password===userContext.Password)
            navigation.navigate('Main')
        else
            alert('Invalid ID and Password');
        userContext._setKeepSignIn(isTouch);
        setName('');
        setPassword('');
      }

   }
const CheckButton = ({type})=>{
    return(
       <Image source={type} style={styles.icon}/>
    );
};
const LoginButton = ({text})=>{
    return(
        <Pressable style={styles.box}
            onPress={()=>{
                setIsTouch((isTouch)=>!isTouch);
            }}>

            <CheckButton type={(isTouch)?iconImages.completed:iconImages.uncompleted}/>
            <Text style={styles.contents}>{text}</Text>
        </Pressable>
    );
};

  return (
    <View style={styles.container}>
      <Title />
      <StatusBar style="auto" />
      <View style={[styles.inputView,{backgroundColor:userContext.SkinColor.light}]}>
        <TextInput
          style={styles.TextInput}
          placeholder="ID:"
          placeholderTextColor="#000000" //basicColor.text
          onChangeText={(Name) => setName(Name)}
          value={name}
        />
      </View>
 
      <View style={[styles.inputView,{backgroundColor:userContext.SkinColor.light}]}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password:"
          placeholderTextColor="#000000" //basicColor.text
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value = {password}
        />
      </View>
      <LoginButton text="Do you choose to be automatically logged in?" />
      <Pressable style={[styles.loginBtn,{backgroundColor:userContext.SkinColor.dark}]}
      onPress={handleSubmitButton}>
        <Text style={styles.loginText}>Sign In</Text>
      </Pressable>

      

      <Pressable style={[styles.signup_Btn,{backgroundColor:userContext.SkinColor.light}]}
      onPress={()=>{navigation.navigate('SignUp')}}>
        <Text style={styles.loginText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};
 
const styles = StyleSheet.create({
    box:{
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: basicColor.itemBackground,
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

    alignItems: "center",
    },
    contents:{
        alignItems: 'flex-start',
        flex: 1,
        fontSize: 15,
        fontWeight: '700',
        color: basicColor.text,
        fontWeight:'400',
    },
    icon: {
        tintColor: basicColor.text,
        width: 30,
        height: 30,
        margin: 10,
    },

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
    marginLeft: 20,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  signup_Btn: {
    borderRadius: 25,
    width: '80%',
    height:50,
    margin: 10,
    alignItems:'center',
    justifyContent: "center",
  },
  
});

export default LoginScreen;