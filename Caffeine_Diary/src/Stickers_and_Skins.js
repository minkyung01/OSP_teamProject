import React from 'react';
import {ScrollView, SafeAreaView,Text,Image,StyleSheet,Pressable} from 'react-native';
import {basicColor, themeColor} from './colors';
import {stickerImages, levelImages, iconImages} from './images';
import BackArrow from './components/BackArrow';
import {LevelGroupSticker, CheckSticker, Attendance, LevelName} from './Info';

const Stickers_and_Skins = () => {
    return(
        <ScrollView style={styles.container}>
            <BackArrow />
            <SafeAreaView style={{flexDirection:'row', alignItems:'center'}}>
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
                    <SafeAreaView>
                        <Text style={styles.text}>This is a sticker/skin that can be used</Text>
                        <Text style={styles.text}>at the {LevelName} level</Text>
                    </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.box}>
                <SafeAreaView style={{flexDirection:'row',justifyContent:'center'}}>
                    <Pressable style={{padding:10}}><Image style={{width:50,height:50}} source={LevelGroupSticker[2]?LevelGroupSticker[2]:null} /></Pressable>
                    <Pressable style={{padding:10}}><Image style={{width:50,height:50}} source={LevelGroupSticker[1]?LevelGroupSticker[1]:null} /></Pressable>
                    <Pressable style={{padding:10}}><Image style={{width:50,height:50}} source={LevelGroupSticker[0]} /></Pressable>
                    <Pressable style={{padding:10}}><Image style={{width:50,height:50}} source={LevelGroupSticker[3]?LevelGroupSticker[3]:null} /></Pressable>
                    <Pressable style={{padding:10}}><Image style={{width:50,height:50}} source={LevelGroupSticker[4]?LevelGroupSticker[4]:null} /></Pressable>
                </SafeAreaView>
                <SafeAreaView style={{alignItems:'center'}}>
                    <Text style={styles.text}>You can pick one of these</Text>
                    <Text style={styles.text}>stickers and use it on the checkbox</Text>
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.box}>
                <SafeAreaView style={{flexDirection:'row',justifyContent:'center'}}>
                </SafeAreaView>
            </SafeAreaView>

        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    box: {
        marginLeft:20,
        marginRight:20,
        paddingTop:50,
        marginTop:20,
        paddingBottom:30,
        backgroundColor:basicColor.itemBackground,
    },
    colorBox: {
        width: 60,
        height: 60,
        padding: 10,
    },
    WaterIMG:{
        width: 60,
        height: 80,
        marginRight:10,
    },
    BeanIMG:{
        margin: 12,
        width: 60,
        height: 50,
    },
    CoffeeIMG:{
        width: 60,
        height: 90,
        marginLeft:10,
    },
    backIMG: {
            marginTop: 7,
            marginBottom: 0,
            width: 40,
            height:30,
        },
    text: {
        fontWeight: '700',
        fontSize: 18,
    },
})
export default Stickers_and_Skins;