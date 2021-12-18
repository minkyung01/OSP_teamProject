import React, {useState} from "react";
import {ScrollView, StatusBar, SafeAreaView, Pressable, Text, View, StyleSheet, Image, TextInput, Dimensions} from 'react-native';
import {basicColor} from './colors';
import { viewStyles, textStyles } from './styles';
import BackArrow from './components/BackArrow';
import PropTypes from 'prop-types';

const ListInfo = ({navigation,route}) => {
    const width = Dimensions.get('window').width;
    const item = route.params.item;
    return(
        <ScrollView>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
                <SafeAreaView style={{paddingTop: 20,marginTop: 20,marginBottom: 20}}>
                    <BackArrow navigation={navigation}/>
                    <SafeAreaView style={{alignItems:'center'}}>
                        <Text style={styles.title}>Information about</Text>
                        <Text style={styles.title}>{item.todo}</Text>
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={{flexDirection:'row',backgroundColor: basicColor.itemBackground}}>
                    <Text style={styles.greyBox}>Deadline</Text>
                    <Text style={styles.input}>{parseInt(item.deadline/10000)+' . '
                    +parseInt((item.deadline-parseInt(item.deadline/10000)*10000)/100-9)+' . '
                    +parseInt(item.deadline-parseInt(item.deadline/100)*100-10)}</Text>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row', backgroundColor: basicColor.itemBackground}}>
                    <Text style={styles.greyBox}>Category</Text>
                    <Text style={styles.input}>{item.category}</Text>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row', backgroundColor: basicColor.itemBackground}}>
                    <Text style={styles.greyBox}>Completed?</Text>
                    <SafeAreaView style={styles.comment}>
                        <Text style={styles.input}>{item.completed?'Yes':'No'}</Text>
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={{flexDirection:'row', backgroundColor: basicColor.itemBackground,paddingBottom:60}}>
                    <Text style={styles.greyBox}>Comment</Text>
                    <SafeAreaView style={styles.comment}>
                        <Text style={{backgroundColor: '#FFFFFF', width: '90%',  fontSize:23, fontWeight:'400', marginTop: 30, padding: 5,marginLeft:10}}>
                        {item.comment}
                        </Text>
                    </SafeAreaView>
                </SafeAreaView>


                <SafeAreaView style={{flexDirection:'row'}}>
                    <Pressable onPress={()=>{navigation.navigate('EditContent',{item:item})}}>
                        <Text style={{ backgroundColor: basicColor.itemBackground, fontSize:23,fontWeight:'700',paddingTop: 13,paddingBottom: 13,paddingLeft: '40%', paddingRight: '40%', margin:15}}>
                        edit</Text>
                    </Pressable>
                </SafeAreaView>

            </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems:'center',
    },
    title: {
        alignContent: 'center',
        color: basicColor.text,
        fontSize: 30,
        fontWeight: '700',
    },
    greyBox: {
        flex: 1,
        fontSize:23,
        fontWeight:'700',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 15,
    },
    input: {
        flex: 2,
        fontSize:23,
        fontWeight:'400',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft:15,
    },
    comment: {
        flex: 2,
        fontSize:23,
        fontWeight:'400',
    },
})

export default ListInfo;