import React from 'react';
import {StatusBar, SafeAreaView, View,Text, StyleSheet, Image, ScrollView, Dimensions, Pressable} from 'react-native';
import { textStyles } from './styles';
const Ranking = () => {
    const width = Dimensions.get('window').width;
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
            <ScrollView width = {width-20} height = '80%'>
            
            <SafeAreaView style={{flexDirection:'row'}}>
                <Image style={styles.coffee} source={require('./../assets/coffee.png')} />
                <SafeAreaView style={{flexDirection:'column'}}>
                <Text style={styles.title}>이화사랑's</Text>
                <Text style={styles.text}> achievement today.</Text>
                </SafeAreaView>
            </SafeAreaView>

            <Pressable>
                <Text style={styles.dropdown}>Change standard</Text>
            </Pressable>

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
        marginTop: 30,
        paddingTop: 100,
        width: '20%',
        height: '20%',
        alignItems: 'flex-start',
    },
    title: {
        alignItems: 'center',
        color: '#000000',
        fontSize: 40,
        marginTop: 40,
        marginLeft: 5,
    },
    text: {
        fontSize: 30,
        marginBottom: 10,
    },
    user: { // user 불러와서 Bold체 해주기 위해
        fontWeight: '700',
    },
    dropdown: {
        alignItems: 'flex-start',
        marginBottom: 10,
        marginLeft: '60%',
        marginTop: 10,

        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 5,
        
        backgroundColor: '#FF991C',
        color: '#FFFFFF',
        fontSize: 16,
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
        paddingTop: 3,
        paddingBottom: 3,
    },
})

export default Ranking;