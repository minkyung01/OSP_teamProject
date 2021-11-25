import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { basicColor, themeColor } from '../colors';
import { iconImages } from '../iconImage';
import IconButton from './IconButton';
import propTypes from 'prop-types';

const List = ({ item, toggleList }) => {
    return (
        <View style={[styles.list, {flexDirection: 'row'}]}>
            <View style={styles.box}>
                <IconButton type={item.completed ? iconImages.c_box : iconImages.uc_box} 
                id={item.id} onPressOut={toggleList} />
            </View>
            <Text style={[styles.textList, 
            {textDecorationLine: (item.completed? 'line-through' : 'none')}]}>
                {item.id}
            </Text> 
            <View style={{flexDirection: 'column'}}>
                <View style={styles.up}>
                    <IconButton type={iconImages.up} />
                </View>
                <View style={styles.down}>
                    <IconButton type={iconImages.down} />
                </View>
            </View>
        </View>
    );
};
//나중에 item.id를 item.text로 바꿔야 함

const styles = StyleSheet.create({
    list: {
        width: '80%',
        backgroundColor: themeColor.Orange.light,
        alignContent: 'center',
        alignSelf: 'center',
        marginBottom: 7,
        borderRadius: 5,
    },
    textList: {
        alignSelf: 'center',
        fontSize: 20,  
        fontWeight: '700',
        color: basicColor.text,
        marginBottom: 5,
        marginLeft: 13,
    },
    box: {
        marginLeft: 10,
        marginTop: 15,
    },
    up: {
        marginLeft: 80, //marginLeft 대신 오른쪽 정렬 기능이 필요
    },
    down: {
        marginLeft: 80, //marginLeft 대신 오른쪽 정렬 기능이 필요
    },
});

List.propTypes = {
    item: propTypes.object.isRequired,
    toggleList: propTypes.func.isRequired,
};

export default List;