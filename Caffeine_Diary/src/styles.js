import { StyleSheet } from "react-native";
import { basicColor, themeColor } from "./colors";

export const viewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: basicColor.background,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
});

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