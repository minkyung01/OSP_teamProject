import React, { useState } from 'react';
import {SafeAreaView, Text, StyleSheet, Image, View, ScrollView} from 'react-native';
import { basicColor, themeColor } from './colors';

import { Header, Contents, Footer } from './components/Layout';

function AppMain() {

    return (
        <SafeAreaView style={styles.basic}>
            <Header>  
            </Header>

            <Contents>
            </Contents>

            <Footer>
            </Footer>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    basic: {
        backgroundColor: basicColor.background,
        marginTop: '10%',
    },
    container: {
        paddingTop:20,
        marginTop: 20,
        marginBottom: 20,
    },
});

export default AppMain;