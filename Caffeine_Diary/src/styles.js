import { StyleSheet } from "react-native";
import { basicColor } from "./colors";


export const textStyles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: '600',
        alignItems: 'flex-start',
        marginTop: 0,
        marginLeft: 0,
    },
});

export const barStyles = StyleSheet.create({
    statusbar: {
        backgroundColor: basicColor.background,
    },
})