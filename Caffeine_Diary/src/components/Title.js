import React from 'react';
import {SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import {levelImages} from '../images';
import {basicColor} from '../colors';

const Title = () => {
    return(
        <SafeAreaView style={{flexDirection:'row',alignItems:'center',margin:10}}>
            <Image style={styles.iconImage} source={levelImages.Americano} />
            <Text style={styles.title}>TO-DO-LIST</Text>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        color: basicColor.text,
        fontSize: 50,
        fontWeight: '700',
    },
    iconImage: {
        marginBottom: 8,
        width: 60,
        height: 90,
    },
})

export default Title;