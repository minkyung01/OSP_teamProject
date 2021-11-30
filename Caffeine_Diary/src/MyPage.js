import React, {useContext} from 'react';
import {Text, StyleSheet, Image, SafeAreaView, ScrollView, input, label} from 'react-native';
import {basicColor,themeColor} from './colors';
import TextButton from './components/TextButton';
import SortButton from './components/SortButton';
import {LevelName, Attendance, ID, SkinColor,Level} from './Info';
import {levelImages, iconImages} from './images';

const MyPage = () => {
    return(
        <ScrollView style={styles.container}>
           <TextButton text="Log Out" />
           <SafeAreaView style={styles.box1}>
            <Text style={styles.info}>{ID}</Text>
            <SafeAreaView style={styles.box2}>
                <Text style={styles.text}>has been</Text>
                <SafeAreaView style={styles.box1}>
                    <Text style={styles.text}>attending for </Text>
                    <Text style={styles.title}>{Attendance} Day!</Text>
                </SafeAreaView>
            </SafeAreaView>
           </SafeAreaView>

           <SafeAreaView style={styles.box1}>
           <Image
            style={(()=>{
                if(Attendance<21) return styles.WaterIMG;
                else if(Attendance<60) return styles.BeanIMG;
                else return styles.CoffeeIMG;
            })()} //icon image

            source={(()=>{
                if(Attendance<21) return levelImages.Water;
                else if(Attendance<60) return levelImages.CoffeeBean;
                else return levelImages.Americano;
            })()}/>
            <SafeAreaView style={styles.box2}>
                <Text style={styles.title}>You are</Text>
                <SafeAreaView style={styles.box1}>
                    <Text style={styles.info}>{LevelName[Level]}</Text>
                    <Text style={styles.title}>Level</Text>
                </SafeAreaView>
            </SafeAreaView>
           </SafeAreaView>

           <SafeAreaView style={{marginTop: 30}}>
                <Text style={styles.title}>Choose check sticker/theme color</Text>
                <SafeAreaView style={styles.box1}>
                    <Text style={styles.title}>of {LevelName[Level]} level</Text>
                    <TextButton text="more" />
                </SafeAreaView>
                <SafeAreaView style={styles.box1}>
                    <SafeAreaView style={{backgroundColor:styles.info.color,width:80,height:80, margin:10}}></SafeAreaView>
                    <Image source={iconImages.stickerImages[Level]} style={{width:60,height:60,margin:10}} />
                </SafeAreaView>
           </SafeAreaView>

           <SafeAreaView style={{marginTop: 30}}>
            <Text style={styles.title}>Want To Level Up?</Text>
            <SafeAreaView style={styles.box1}>
                <Text style={styles.title}>Increase Attendance!</Text>
                <TextButton text="more" />
            </SafeAreaView>
           </SafeAreaView>

           <SafeAreaView style={{marginTop: 30}}>
            <Text style={styles.title}>How to list-up?</Text>
           </SafeAreaView>
            <SortButton text="show the closest due date first" method="closest"/>
            <SortButton text="show the latest added date first" method="latest"/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: 10,
      marginTop:20,
      backgroundColor: basicColor.background,
      flexDirection: 'column',
    },
    /*align sideways*/
    box1:{
        flexDirection:'row',
        alignItems: 'center',
    },
    /*align up and down*/
    box2:{
        flexDirection:'column',
        alignItems: 'flex-start',
        padding: 5,
    },
    /*ID,level name*/
    info:{
            fontSize: 40,
            fontWeight: '700',
            marginRight: 10,
            marginBottom: 8,
            color: (() => {
                switch(SkinColor){
                    case "Orange": return themeColor.Orange.dark;
                    case "Mint": return themeColor.Mint.dark;
                    case "Blue": return themeColor.Blue.dark;
                    case "Pink": return themeColor.Pink.dark;
                    case "Purple": return themeColor.Purple.dark;
                    case "LightGreen": return themeColor.LightGreen.dark;
                }
            })(),
        },
    title:{
        fontSize: 23,
        fontWeight: '700',
        color: basicColor.text,

    },
    pointText:{
        fontSize: 18,
        fontWeight: '700',
        color: basicColor.pointText,
    },
    text:{
        fontSize: 20,
        fontWeight:'400',
        color: basicColor.text,
    },
    WaterIMG:{
        marginRight: 10,
        marginBottom: 8,
        width: '25%',
        height: '100%',
    },
    BeanIMG:{
        margin: 7,
        width: '15%',
        height: '60%',
    },
    CoffeeIMG:{
      marginRight: 10,
      marginBottom: 8,
      width: '15%',
      height: '100%',
    },

})

export default MyPage;