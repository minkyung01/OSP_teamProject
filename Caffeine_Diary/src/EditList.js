import React, {useContext} from 'react';
import {ScrollView,SafeAreaView,Text,Image,StyleSheet} from 'react-native';
import InfoContext from './components/InfoContext';
import Title from './components/Title';
import TextButton from './components/TextButton';
import BackArrow from './components/BackArrow';
import {iconImages} from './images';
import {basicColor} from './colors';
import List from './components/List';
import Category from './components/Category';

const EditList = () => {
    const userContext = useContext(InfoContext);
    return(
        <ScrollView style={styles.container}>
            <BackArrow />
            <SafeAreaView style={{alignItems:'center'}}>
                <Title />
            </SafeAreaView>
            <SafeAreaView style={{alignItems:'flex-end',marginRight:20}}>
                <TextButton text="delete all" />
            </SafeAreaView>
            <Category title="Edit List" />

        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginTop: 20,
        marginBottom: 20,
    },
})
export default EditList;