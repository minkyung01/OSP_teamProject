import React,{useContext} from 'react';
import {Pressable, Text, StyleSheet, Image} from 'react-native';
import {basicColor,themeColor} from './colors'
import InfoContext from './components/InfoContext';

const Title = ({navigation}) => {
const userContext = useContext(InfoContext);
 return (
    <Pressable style={styles.container}
    onPress={()=> {
        if(userContext.KeepSignIn)
            navigation.push('Main');
        else
            navigation.push('Login')}}>
    <Image style={styles.image} //icon image
        source={require('./../assets/coffee.png')} />
    <Text style={styles.text}>Caffeine Diary</Text>
    <Text style={styles.subText}>Tap to Start</Text>
    </Pressable>
 );
};

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: themeColor.Orange.light,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        padding: 20,
        fontSize: 50,
        fontWeight: '700',
        color: basicColor.text,
    },
    subText:{
        fontSize: 30,
        color:'#777777',
    },
    image:{
      width: '60%',
      height: '60%',
    },

})
export default Title;