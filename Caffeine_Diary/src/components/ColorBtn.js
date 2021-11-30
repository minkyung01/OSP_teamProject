import React from 'react';
import {Pressable, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import {themeColor} from '../colors';

const ColorBtn = ({color}) => {
    return(
        <Pressable>
            <SafeAreaView style={{backgroundColor:color.dark, width: 100, height: 100, margin: 15}}></SafeAreaView>
        </Pressable>
    );
};
ColorBtn.propTypes={
    color: PropTypes.oneOf(Object.values(themeColor)).isRequired, /*Explanation of the method*/
};

export default ColorBtn;