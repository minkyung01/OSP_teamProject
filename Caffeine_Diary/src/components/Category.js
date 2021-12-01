import React,{useContext} from "react";
import InfoContext from './InfoContext';
import { View, StyleSheet, Text } from "react-native";
import { basicColor, themeColor } from '../colors';

const Category = ({title}) => {
    const userContext = useContext(InfoContext);
    return (
        <View style={{
            width: '80%',
            backgroundColor: userContext.SkinColor.dark,
            alignContent: 'center',
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 13,
            borderRadius: 5,
        }}>
            <Text style={styles.textCategory}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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