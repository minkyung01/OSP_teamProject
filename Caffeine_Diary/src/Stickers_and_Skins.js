import React, {useContext} from 'react';
import InfoContext from './components/InfoContext';
import {ScrollView, SafeAreaView,Text,Image,StyleSheet,Pressable} from 'react-native';
import {basicColor, themeColor} from './colors';
import {levelImages, iconImages, stickerImages} from './images';
import BackArrow from './components/BackArrow';
import ColorBtn from './components/ColorBtn';
import StickerBtn from './components/StickerBtn';

const Stickers_and_Skins = ({navigation}) => {
    const userContext = useContext(InfoContext);
    return(
        <ScrollView style={styles.container}>
            <BackArrow navigation={navigation}/>
            <SafeAreaView style={{flexDirection:'row', alignItems:'center'}}>
                <Image
                    style={(()=>{
                        if(userContext.Level==0) return styles.WaterIMG;
                        else if(userContext.Level==1) return styles.BeanIMG;
                        else return styles.CoffeeIMG;
                    })()} //icon image

                    source={(()=>{
                        if(userContext.Level==0) return levelImages.Water;
                        else if(userContext.Level==1) return levelImages.CoffeeBean;
                        else return levelImages.Americano;
                    })()}/>
                    <SafeAreaView>
                        <Text style={styles.text}>This is a sticker/skin that can be used</Text>
                        <SafeAreaView style={{flexDirection:'row'}}>
                            <Text style={styles.text}>at the </Text>
                            <Text style={{fontWeight:'700',fontSize:18,color:userContext.SkinColor.dark}}>{userContext.LevelName[userContext.Level]}</Text>
                            <Text style={styles.text}> level</Text>
                        </SafeAreaView>
                    </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={styles.box}>
                <SafeAreaView style={styles.row}>
                    <StickerBtn type={stickerImages[0]} num={0} />
                    {userContext.Attendance>=21?<StickerBtn type={stickerImages[1]} num={1} />
                    :<Image style={styles.sticker} source={iconImages.lock} />}
                    {userContext.Attendance>=60?<StickerBtn type={stickerImages[2]} num={2} />
                    :<Image style={styles.sticker} source={iconImages.lock} />}
                    {userContext.Attendance>=60?<StickerBtn type={stickerImages[3]} num={3} />
                    :<Image style={styles.sticker} source={iconImages.lock} />}
                    {userContext.Attendance>=60?<StickerBtn type={stickerImages[4]} num={4} />
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
                    {userContext.Attendance>=21?<ColorBtn color={themeColor.Blue}/>
                     :<Image style={{width:100,height:100,margin:15}} source={iconImages.lock} />}
                     {userContext.Attendance>=21?<ColorBtn color={themeColor.Pink}/>
                     :<Image style={{width:100,height:100,margin:15}} source={iconImages.lock} />}
                </SafeAreaView>
                <SafeAreaView style={styles.row}>
                     {userContext.Attendance>=60?<ColorBtn color={themeColor.Purple}/>
                      :<Image style={{width:100,height:100,margin:15}} source={iconImages.lock} />}
                     {userContext.Attendance>=60?<ColorBtn color={themeColor.LightGreen}/>
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
        paddingTop: 20,
        marginTop: 20,
        marginBottom: 20,

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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