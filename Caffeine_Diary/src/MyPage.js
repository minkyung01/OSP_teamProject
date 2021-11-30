import React, {useContext} from 'react';
import InfoContext from './components/InfoContext';
import {Text, StyleSheet, Image, SafeAreaView, ScrollView, input, label} from 'react-native';
import {basicColor,themeColor} from './colors';
import TextButton from './components/TextButton';
import SortButton from './components/SortButton';
import {levelImages, iconImages} from './images';

const MyPage = () => {
    const userContext = useContext(InfoContext);
    return(
        <ScrollView style={styles.container}>
           <TextButton text="Log Out" />
           <SafeAreaView style={styles.box1}>
            <Text style={{
                fontSize: 40,
                fontWeight: '700',
                marginRight: 10,
                marginBottom: 8,
                color: userContext.SkinColor.dark,
            }}>{userContext.ID}</Text>
            <SafeAreaView style={styles.box2}>
                <Text style={styles.text}>has been</Text>
                <SafeAreaView style={styles.box1}>
                    <Text style={styles.text}>attending for </Text>
                    <Text style={styles.title}>{useContext.Attendance} Day!</Text>
                </SafeAreaView>
            </SafeAreaView>
           </SafeAreaView>

           <SafeAreaView style={styles.box1}>
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
            <SafeAreaView style={styles.box2}>
                <Text style={styles.title}>You are</Text>
                <SafeAreaView style={styles.box1}>
                    <Text style={{
                        fontSize: 40,
                        fontWeight: '700',
                        marginRight: 10,
                        marginBottom: 8,
                        color: userContext.SkinColor.dark,
                    }}>{userContext.LevelName[userContext.Level]}</Text>
                    <Text style={styles.title}>Level</Text>
                </SafeAreaView>
            </SafeAreaView>
           </SafeAreaView>

           <SafeAreaView style={{marginTop: 30}}>
                <Text style={styles.title}>Choose check sticker/theme color</Text>
                <SafeAreaView style={styles.box1}>
                    <Text style={styles.title}>of {userContext.LevelName[userContext.Level]} level</Text>
                    <TextButton text="more" />
                </SafeAreaView>
                <SafeAreaView style={styles.box1}>
                    <SafeAreaView style={{backgroundColor:userContext.SkinColor.dark,width:80,height:80, margin:10}}></SafeAreaView>
                    <Image source={iconImages.stickerImages[userContext.CheckSticker]} style={{width:60,height:60,margin:10}} />
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
      paddingTop:20,
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