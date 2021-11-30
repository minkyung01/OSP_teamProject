import React from 'react';
import {ScrollView,SafeAreaView, View,Text, StyleSheet, Image,Pressable} from 'react-native';
import {iconImages, levelImages} from './images';
import BackArrow from './components/BackArrow';
import Title from './components/Title';

const LevelInfo = () => {
    return(
        <ScrollView style={styles.container}>
        <BackArrow />
        <SafeAreaView style={{paddingRight:10, paddingLeft:10}} >
            <Title />
            <Text style={styles.content,{fontSize: 18,fontWeight:'700',marginRight:'auto'}}>Your level determined by attendance!</Text>

            <SafeAreaView style={{alignItems:'center',flexDirection:'row',backgroundColor:'#482800',width:'100%',paddingTop:20,paddingBottom:20}}>
                <Image style={styles.CoffeeIMG}
                        source={levelImages.Americano}/>
                <SafeAreaView style={styles.content}>
                    <Text style={{fontSize:23,fontWeight:'700',color:'#FFFFFF'}}>AMERICANO LEVEL</Text>
                    <Text style={{fontSize:18,fontWeight:'700',color:'#FFFFFF'}}>: attended more than 2 months</Text>
                    <Text style={{fontSize:22,fontWeight:'700',color:'#FFFFFF',marginTop:10}}>You are a Coffee Master</Text>
                    <Text style={{fontSize:18,fontWeight:'700',color:'#FFFFFF'}}>Now compete to see who has the higher level!</Text>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={{alignItems:'center',flexDirection:'row',backgroundColor:'#864B03',width:'100%',marginTop:10,paddingTop:20,paddingBottom:20}}>
                <Image style={styles.BeanIMG}
                         source={levelImages.CoffeeBean}/>
                <SafeAreaView style={styles.content}>
                     <Text style={{fontSize:23,fontWeight:'700',color:'#FFFFFF'}}>COFFEE-BEAN LEVEL</Text>
                     <Text style={{fontSize:18,fontWeight:'700',color:'#FFFFFF'}}>: attended more than 3 weeks but less than 2 months</Text>
                     <Text style={{fontSize:22,fontWeight:'700',color:'#FFFFFF',marginTop:10}}>You are a Coffee-Bean</Text>
                     <Text style={{fontSize:18,fontWeight:'700',color:'#FFFFFF'}}>You're making a good habit of doing what you have to do on time!</Text>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={{alignItems:'center',flexDirection:'row',backgroundColor:'#C9893B',width:'100%',marginTop:10,paddingTop:20,paddingBottom:20}}>
                <Image style={styles.WaterIMG}
                          source={levelImages.Water}/>
                <SafeAreaView style={styles.content}>
                      <Text style={{fontSize:23,fontWeight:'700',color:'#FFFFFF'}}>WATER LEVEL</Text>
                      <Text style={{fontSize:18,fontWeight:'700',color:'#FFFFFF'}}>: attended less than 3 weeks</Text>
                      <Text style={{fontSize:22,fontWeight:'700',color:'#FFFFFF',marginTop:10}}>You are a Water</Text>
                      <Text style={{fontSize:18,fontWeight:'700',color:'#FFFFFF'}}>Please use "Caffeine Diary" more to go to the higher level!</Text>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {

        marginTop: 20,
        marginBottom: 20,
    },
    content: {
        margin: 10,
        alignItems: 'flex-start',
        flex: 1,
    },
    title: {
        alignItems: 'center',
        color: '#000000',
        fontSize: 40,
        fontWeight: '700',
    },
    WaterIMG:{
        width: '25%',
        height: '60%',
    },
    BeanIMG:{
        margin: 12,
        width: '20%',
        height: '40%',
    },
    CoffeeIMG:{
        width: '27%',
        height: '60%',
    },
})
export default LevelInfo;