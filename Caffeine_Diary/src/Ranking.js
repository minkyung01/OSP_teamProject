import React from 'react';
import {StatusBar, SafeAreaView, View,Text, StyleSheet, Image, ScrollView, Dimensions} from 'react-native';
import { textStyles } from './styles';
const Ranking = () => {
    const width = Dimensions.get('window').width;
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
            <ScrollView width = {width-20} height = '80%'>
            
            <Image style={styles.coffee} source={require('./../assets/coffee.png')} />

            <Text style={styles.title}>이화사랑's achievement today.</Text>
            <Text style={styles.dropdown}>Change standard</Text>

            <SafeAreaView style={{alignItems:'center',flexDirection:'column',backgroundColor:'#FF991C',width:'100%',paddingTop:10,paddingBottom:10}}>
                <SafeAreaView style={styles.content}>
                    <Text style={styles.best}>이화사랑 achieved 80% today</Text>
                </SafeAreaView>
            </SafeAreaView>


            <SafeAreaView style={{alignItems:'center',flexDirection:'row',backgroundColor:'#FFE4C3',width:'100%',marginTop:10,paddingTop:10,paddingBottom:10}}>
                <SafeAreaView style={styles.content}>
                     <Text style={styles.rankings}>Today’s Ranking</Text>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={{alignItems:'center',flexDirection:'row',backgroundColor:'#FFE4C3',width:'100%',marginTop:10,paddingTop:10,paddingBottom:10}}>
                <SafeAreaView style={styles.content}>
                     <Text style={styles.rankings}>Love Caffeine(88%)</Text>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={{alignItems:'center',flexDirection:'row',backgroundColor:'#FFE4C3',width:'100%',marginTop:10,paddingTop:10,paddingBottom:10}}>
                <SafeAreaView style={styles.content}>
                     <Text style={styles.rankings}>이화사랑(44%)</Text>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={{alignItems:'center',flexDirection:'row',backgroundColor:'#FFE4C3',width:'100%',marginTop:10,paddingTop:10,paddingBottom:10}}>
                <SafeAreaView style={styles.content}>
                     <Text style={styles.rankings}>Tirrred(15%)</Text>
                </SafeAreaView>
            </SafeAreaView>

            <SafeAreaView style={{alignItems:'center',flexDirection:'row',backgroundColor:'#FFE4C3',width:'100%',marginTop:10,paddingTop:10,paddingBottom:10}}>
                <SafeAreaView style={styles.content}>
                     <Text style={styles.rankings}>Lazy teddy bear(8%)</Text>
                </SafeAreaView>
            </SafeAreaView>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        padding: 10,
    },
    content: {
        margin: 10,
        alignItems: 'flex-start',
        flex: 1,
    },
    coffee: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 8,
        width: '20%',
        height: '20%',
    },
    title: {
        alignItems: 'center',
        color: '#000000',
        fontSize: 40,
        fontWeight: '700',
    },
    dropdown: {
        alignItems: 'flex-end',
        backgroundColor: '#FF991C',
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight:'700',
    },
    best: {
        fontSize:30,
        fontWeight:'700',
        color:'#FFFFFF',
        flex: 3,
    },
    rankings: {
        fontSize:23,
        fontWeight:'700',
        color:'#FFFFFF',
    },
})

export default Ranking;