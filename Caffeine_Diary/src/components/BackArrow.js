import React from 'react';
import {StyleSheet, Pressable,Image,SafeAreaView} from 'react-native';
import {iconImages} from '../images';
import MyPage from '../MyPage';

const BackArrow = ({navigation}) => {
    return(
    <SafeAreaView style={{marginRight:20}}>
        <Pressable style={{marginLeft:'auto'}} onPress={()=>navigation.goBack()}>

            <Image style={styles.backIMG} source={iconImages.backArrow} />
        </Pressable>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    backIMG: {
        marginTop: 7,
        marginBottom: 0,
        width: 40,
        height:30,
    },
})
export default BackArrow;