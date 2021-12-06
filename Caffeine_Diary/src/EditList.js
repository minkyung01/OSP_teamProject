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
import IconButton from './components/IconButton';

const EditList = () => {
    const userContext = useContext(InfoContext);
    return(
        <ScrollView style={styles.container}>
            <BackArrow />
            <SafeAreaView style={{alignItems:'center'}}>
                <Title />
            </SafeAreaView>
            <SafeAreaView style={{alignItems:'flex-end',marginRight:40}}>
                <TextButton text="delete all" />
            </SafeAreaView>
            <Category title="Edit List" />
            {Object.values(userContext.Lists).reverse().map(listItem => (
                <List key={listItem.date} item={listItem}
                action={()=>{ // delete to-do-list
                    userContext.setLists(Object.values(userContext.Lists).filter(LIST=>LIST.date !== listItem.date));
                }} page={"editList"}/>
            ))}
            <SafeAreaView style={[styles.list,{backgroundColor: userContext.SkinColor.light,marginBottom:30}]}>
                <SafeAreaView style={{margin:15}}>
                    <IconButton type={iconImages.add }/>
                </SafeAreaView>
            </SafeAreaView>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginTop: 20,
        marginBottom:20,
    },
    list: {
        width: '80%',
        alignSelf: 'center',
        marginBottom: 7,
        paddingLeft:10,
        paddingRight:10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
})
export default EditList;