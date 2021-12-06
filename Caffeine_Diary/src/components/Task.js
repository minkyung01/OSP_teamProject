import React from "react";
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {basicColor, colors} from '../colors';
import PropTypes from 'prop-types';

const Task = ({ text }) => {
    return (
        <View style={taskStyle.container}>
            <Text style={taskStyle.contents}>{text}</Text>
        </View>
    )
}

const taskStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: basicColor.itemBackground,
    },

    contents: {
        flex: 1,
        fontSize: 24,
        color: basicColor.text,
    },
});

Task.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Task;