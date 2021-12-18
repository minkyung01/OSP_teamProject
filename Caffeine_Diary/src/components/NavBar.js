import React, {useContext} from "react";
import InfoContext from './InfoContext';
import { View, StyleSheet, Text, SafeAreaView,Pressable } from "react-native";
import { basicColor, themeColor } from '../colors';
import TextButton from './TextButton';
import { Colors } from "react-native/Libraries/NewAppScreen";
import NavBtn from "./NavBtn";

/*
const NavBar = () => {
    const userContext = useContext(InfoContext);
    return (
    <SafeAreaView style={[styles.nav,{backgroundColor: userContext.SkinColor.dark}]}>
        <NavText text={"View" + "\n" + "TO-DO-LIST"} />
        <NavText text={"My Page"} />
        <NavText text={"Search"} />
        <NavText text={"View" + "\n" + "Completion rate"} />
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
*/

const NavBar = ({navigation}) => {
    const userContext = useContext(InfoContext);
    return (
        <SafeAreaView style={[styles.nav, {backgroundColor: userContext.SkinColor.dark}]}>
            <NavBtn text={"      View\n    TO-DO\n      LIST"} onPressOut={()=>navigation.push('Main')}/>
            <NavBtn text={"My Page"} onPressOut={()=>navigation.push('MyPage')}/>
            <NavBtn text={"Search"} onPressOut={()=>navigation.push('Search')}/>
            <NavBtn text={"       View \n Completion\n       Rate"} onPressOut={()=>navigation.push('Completion')}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    nav: {
        flexDirection:'row',
        width:'100%',
        height:"11%",
        justifyContent:'center',
        alignItems:'center',
    },
});

export default NavBar;