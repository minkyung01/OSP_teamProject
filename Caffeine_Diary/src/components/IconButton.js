import React from "react";
import { Pressable, StyleSheet, Image } from "react-native";
import { iconImages } from "../../src/images";
import propTypes from 'prop-types';

const IconButton = ({type, onPressOut, id}) => {
    const _onPressOut = () => {
        onPressOut(id);
    };

    return (
        <Pressable onPressOut={_onPressOut}>
            <Image source={type} style={iconStyle.icon} />
        </Pressable>
    );
};

IconButton.defaultProps = {
    onPressOut: () => {},
};

const iconStyle = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    },
});

IconButton.propTypes = {
    type: propTypes.oneOf(Object.values(iconImages)).isRequired,
    onPressOut: propTypes.func,
    id: propTypes.string,
};

export default IconButton;