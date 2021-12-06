import React,{useState, useContext} from 'react';
import {Pressable, Text, SafeAreaView, StyleSheet} from 'react-native';
import {basicColor} from '../colors';
import List from './List';
import InfoContext from './InfoContext';
import IconButton from './IconButton';
import { stickerImages } from '../images';

const SelectBtn = () =>{
    const [isTouch,SetIsTouch] =useState(false);
    return(
        <SafeAreaView style={styles.button}>
        <Pressable
            onPress={()=>{
                if(isTouch) { //select all 버튼 눌린 상태에서 또 눌렀을 때
                    //전체 체크 해제
                    SetIsTouch(false);
                }
                else {
                    //전체 체크
                    //checkAll();
                    SetIsTouch(true);
                }
            }}
        >
            <Text 
                style={{color:(isTouch? basicColor.pointText : basicColor.text),
                        fontWeight: (isTouch? '700' : '500'), 
                        border: (isTouch? basicColor.pointText : basicColor.text)}}>
                select all
                </Text>
        </Pressable>
        </SafeAreaView>
    );
};

/*
const checkAll = () => {
    const userContext = useContext(InfoContext);

    return (
        <List >
            <IconButton type={stickerImages.userContext.CheckSticker} />
        </List>
    )
}; */

const styles = StyleSheet.create({
    button: {
        marginLeft: 140,
        padding: 2,
        fontSize: 15,
        borderWidth: 2,
    },
});

export default SelectBtn;