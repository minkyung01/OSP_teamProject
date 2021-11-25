import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { basicColor, themeColor } from '../colors';

const NavBar = ({menu}) => {
    return (
        <View style={styles.nav}>
            <Text style={styles.textNav}>{menu}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    nav: {
        alignContent: 'center',
        marginBottom: 10,
    },
    textNav: {
        fontSize: 15,  
        fontWeight: '700',
        color: basicColor.background,
        marginLeft: 32,
        marginTop: 25,
    },
});

export default NavBar;