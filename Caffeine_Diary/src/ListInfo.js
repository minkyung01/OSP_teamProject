import React, {useState, useContext} from "react";
import {ScrollView, StatusBar, SafeAreaView, Pressable, Text, View, StyleSheet, Image, TextInput, Dimensions} from 'react-native';
import {basicColor} from './colors';
import { viewStyles, textStyles } from './styles';
import InfoContext from './components/InfoContext';
import BackArrow from './components/BackArrow';
import PropTypes from 'prop-types';

const ListInfo = ({date}) => {
    const width = Dimensions.get('window').width;
    const userContext = useContext(InfoContext);
    return(
        <ScrollView>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
                <SafeAreaView style={{paddingTop: 20,marginTop: 20,marginBottom: 20}}>
                    <BackArrow />
                    <SafeAreaView style={{alignItems:'center'}}>
                        <Text style={styles.title}>Information about</Text>
                        <Text style={styles.title}>{userContext.Lists[date].todo}</Text>
                    </SafeAreaView>
                </SafeAreaView>
                <SafeAreaView style={{flexDirection:'row',backgroundColor: basicColor.itemBackground}}>
                    <Text style={styles.greyBox}>Deadline</Text>
                    <Text style={styles.input}>{parseInt(userContext.Lists[date].deadline/10000)+' . '
                    +parseInt((userContext.Lists[date].deadline-parseInt(userContext.Lists[date].deadline/10000)*10000)/100-9)+' . '
                    +parseInt(userContext.Lists[date].deadline-parseInt(userContext.Lists[date].deadline/100)*100-10)}</Text>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row', backgroundColor: basicColor.itemBackground}}>
                    <Text style={styles.greyBox}>Category</Text>
                    <Text style={styles.input}>{userContext.Lists[date].category}</Text>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row', backgroundColor: basicColor.itemBackground}}>
                    <Text style={styles.greyBox}>Comment</Text>
                    <SafeAreaView style={styles.comment}>
                        <Text style={{backgroundColor: '#FFFFFF', width: '90%',  fontSize:23, fontWeight:'400', marginTop: 30, padding: 5}}>
                        {userContext.Lists[date].comment}
                        </Text>
                    </SafeAreaView>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row', backgroundColor: basicColor.itemBackground}}>
                    <Text style={styles.greyBox}>Location</Text>
                    <Text style={styles.input}>Ewha Womans University</Text>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row'}}>
                    <Pressable style={{ flex: 1, backgroundColor: basicColor.itemBackground,alignItems: 'center'}}>
                        <Text style={{fontSize:23,fontWeight:'700',padding: 90}}>Image</Text>
                    </Pressable>
                </SafeAreaView>


                <SafeAreaView style={{flexDirection:'row'}}>
                    <Pressable>
                        <Text style={{ backgroundColor: basicColor.itemBackground, fontSize:23,fontWeight:'700',paddingTop: 13,paddingBottom: 13,paddingLeft: '40%', paddingRight: '40%', margin:15}}>
                        edit</Text>
                    </Pressable>
                </SafeAreaView>

            </ScrollView>
    );
};
ListInfo.propTypes={
    date: PropTypes.string.isRequired,
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
    },
    comment: {
        flex: 2,
        fontSize:23,
        fontWeight:'400',
    },
})

export default ListInfo;