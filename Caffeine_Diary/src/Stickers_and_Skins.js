import React from 'react';
import {ScrollView, SafeAreaView,Text,Image,StyleSheet,Pressable} from 'react-native';
import {basicColor, themeColor} from './colors';
import {levelImages, iconImages} from './images';
import BackArrow from './components/BackArrow';
import ColorBtn from './components/ColorBtn';
import StickerBtn from './components/StickerBtn';
import {Attendance, LevelName,Level} from './Info';

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
                        <Text style={styles.text}>at the {LevelName[Level]} level</Text>
                    </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={styles.box}>
                <SafeAreaView style={styles.row}>
                    <StickerBtn type={iconImages.stickerImages[0]} />
                    {Attendance>=21?<StickerBtn type={iconImages.stickerImages[1]} />
                    :<Image style={styles.sticker} source={iconImages.lock} />}
                    {Attendance>=60?<StickerBtn type={iconImages.stickerImages[2]} />
                    :<Image style={styles.sticker} source={iconImages.lock} />}
                    {Attendance>=60?<StickerBtn type={iconImages.stickerImages[3]} />
                    :<Image style={styles.sticker} source={iconImages.lock} />}
                    {Attendance>=60?<StickerBtn type={iconImages.stickerImages[4]} />
                    :<Image style={styles.sticker} source={iconImages.lock} />}
                </SafeAreaView>
                <SafeAreaView style={{alignItems:'center'}}>
                    <Text style={styles.text}>You can pick one of these</Text>
                    <Text style={styles.text}>stickers and use it on the checkbox</Text>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={styles.box}>
                <SafeAreaView style={{flexDirection:'row',justifyContent:'center'}}>
                    <ColorBtn color={themeColor.Orange}/>
                    <ColorBtn color={themeColor.Mint}/>
                </SafeAreaView>
                <SafeAreaView style={styles.row}>
                    {Attendance>=21?<ColorBtn color={themeColor.Blue}/>
                     :<Image style={{width:100,height:100,margin:15}} source={iconImages.lock} />}
                     {Attendance>=21?<ColorBtn color={themeColor.Pink}/>
                     :<Image style={{width:100,height:100,margin:15}} source={iconImages.lock} />}
                </SafeAreaView>
                <SafeAreaView style={styles.row}>
                     {Attendance>=60?<ColorBtn color={themeColor.Purple}/>
                      :<Image style={{width:100,height:100,margin:15}} source={iconImages.lock} />}
                     {Attendance>=60?<ColorBtn color={themeColor.LightGreen}/>
                      :<Image style={{width:100,height:100,margin:15}} source={iconImages.lock} />}
                </SafeAreaView>
                <SafeAreaView style={{alignItems:'center'}}>
                    <Text style={styles.text}>You can pick one of these</Text>
                    <Text style={styles.text}>colors and use it as theme-color</Text>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    box: {
        marginLeft:20,
        marginRight:20,
        paddingTop:40,
        marginTop:20,
        paddingBottom:30,
        backgroundColor:basicColor.itemBackground,
    },
    sticker: {
        width: 50,
        height: 50,
        margin: 10,
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