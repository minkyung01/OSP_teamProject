import React, {useContext} from "react";
import InfoContext from './InfoContext';
import { View, StyleSheet, Text, SafeAreaView,Pressable } from "react-native";
import { basicColor, themeColor } from '../colors';
import TextButton from './TextButton';

const NavBar = () => {
    const userContext = useContext(InfoContext);
    return (
    <SafeAreaView style={[styles.nav,{backgroundColor: userContext.SkinColor.dark}]}>
        <NavText text={"      View" + "\n" + "TO-DO-LIST"} />
        <NavText text={"My Page"} />
        <NavText text={"Search"} />
        <NavText text={"  View" + "\n" + "Ranking"} />
    </SafeAreaView>
    );
};
const NavText = ({text}) => {
    return(
        <Pressable onPress={()=>{alert(text)}}>
            <Text style={styles.textNav}>{text}</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    nav: {
        flexDirection:'row',
        width:'100%',
        height:80,
        justifyContent:'center',
        alignItems:'center',
        padding: 15,

    },
    textNav: {
        fontSize: 18,
        fontWeight: '700',
        color: basicColor.background,
        paddingRight:10,
        paddingLeft:10,
    },
});

export default NavBar;