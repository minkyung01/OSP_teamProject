import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { basicColor, themeColor } from '../colors';

const Category = ({title}) => {
    return (
        <View style={styles.category}>
            <Text style={styles.textCategory}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    category: {
        width: '80%',
        backgroundColor: themeColor.Orange.dark,
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 13,
        borderRadius: 5,
    },
    textCategory: {
        alignSelf: 'center',
        fontSize: 30,  
        fontWeight: '700',
        color: basicColor.background,
        marginBottom: 5,
        marginTop: 5,
    },
});

export default Category;