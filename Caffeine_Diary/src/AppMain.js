import React, { useState } from 'react';
import {SafeAreaView, Text, StyleSheet, Image, View} from 'react-native';
import { basicColor, themeColor } from './colors';

import { Header, SubContents, MainContents, Footer } from './components/Layout';

/*
const AppMain = () => {
    
    return (
        <SafeAreaView style={styles.basic}>
            <Header>  
            </Header>

            <SubContents>
            </SubContents>

            <MainContents>    
            </MainContents>

            <Footer>
            </Footer>
        </SafeAreaView>
    );
};
*/


function AppMain() {

    return (
        <SafeAreaView style={styles.basic}>
            <Header>  
            </Header>

            <SubContents>
            </SubContents>

            <MainContents>    
            </MainContents>

            <Footer>
            </Footer>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    basic: {
        flex: 1,
        backgroundColor: basicColor.background,
        marginTop: '10%',
    },
});

export default AppMain;