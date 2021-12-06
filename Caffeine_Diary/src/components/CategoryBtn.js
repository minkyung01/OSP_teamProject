import React,{useState, useContext} from 'react';
import InfoContext from './InfoContext';
import {Pressable, Text, SafeAreaView, StyleSheet} from 'react-native';
import {basicColor, themeColor} from '../colors';
import {Picker} from '@react-native-picker/picker';

const CategoryBtn = ({category}) =>{
    const userContext = useContext(InfoContext);
    const [item,setItem] = useState(category);
    return(
        <SafeAreaView style={[styles.button,{backgroundColor:userContext.SkinColor.light}]}>
                    <Picker
                      style={{width:160}}
                      selectedValue={item}
                      onValueChange={(val,idx)=> {
                        setItem(val);}
                      }>
                        <Picker.Item style={styles.buttonText} label="Today" value={"today"} />
                        <Picker.Item style={styles.buttonText} label="Assignment" value={"assignment"} />
                        <Picker.Item style={styles.buttonText} label="Lecture" value={"lecture"} />
                        <Picker.Item style={styles.buttonText} label="Hobby" value={"hobby"} />
                        <Picker.Item style={styles.buttonText} label="etc." value={"etc."} />
                        <Picker.Item style={styles.buttonText} label="Completed" value={"completed"} />
                        <Picker.Item style={styles.buttonText} label="Uncompleted" value={"uncompleted"} />
                    </Picker>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    button: {
        width: 160,
        height: 40,
        borderRadius: 10,
        marginLeft: 40,
        paddingBottom: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '700',
        color: basicColor.text,
    },
});

export default CategoryBtn;