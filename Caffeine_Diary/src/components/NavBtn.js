import React,{useState, useContext} from 'react';
import InfoContext from './InfoContext';
import {Pressable, Text, SafeAreaView, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {basicColor} from '../colors';

const NavBtn = ({text}) =>{
    const [isTouch,SetIsTouch] =useState(false);
    return(
        <SafeAreaView style={styles.basic}>
        <Pressable
            onPress={()=>{
                if(isTouch == true) { //눌린 상태
                    SetIsTouch(false);
                }
                else if(isTouch == false) {
                    SetIsTouch(true);
                }
            }}
        >
            <Text style={{
                fontSize:13,
                fontWeight:'700',
                color: (isTouch? basicColor.text : basicColor.background),
                }}>{text}
            </Text>
        </Pressable>
        </SafeAreaView>
    );
};
//일단은 누르면 흰색 -> 까만색, 까만색 -> 흰색 되도록 만들었는데, 그냥 페이지마다 색 다르게 하고 페이지 이동하는 게 나을 듯

NavBtn.propTypes ={
    text:PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    basic: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 100,
    },
});

export default NavBtn;