import React, {useContext} from "react";
import InfoContext from './InfoContext';
import { View, StyleSheet, Text, Pressable} from "react-native";
import { basicColor, themeColor } from '../colors';
import { iconImages, stickerImages } from '../../src/images';
import IconButton from './IconButton';
import propTypes from 'prop-types';

const List = ({ item, action,page,navigation }) => {
    const userContext = useContext(InfoContext);
    return (
        <View style={[styles.list,{backgroundColor: userContext.SkinColor.light}]}>
            <View style={styles.box}>
                <IconButton type={(()=>{
                    if(page=="showList")
                        return (item.completed ? stickerImages[userContext.CheckSticker] : iconImages.uncompleted);
                    else
                        return iconImages.remove;}
                        )()
                }
                id={item.date} onPressOut={action} />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between', width:'80%'}}>
            <Pressable style={{alignSelf: 'center',marginBottom:2}}
            onPress={()=>navigation.navigate('ListInfo',{date:item.date})}>
            <Text style={[styles.textList,
            {textDecorationLine: (item.completed? 'line-through' : 'none')}]}>
                {item.todo}
            </Text>
            </Pressable>
            {(page=="showList")&&<UpDown />}
            </View>
        </View>
    );
};
const UpDown =()=> {
    return(
        <View>
            <IconButton type={iconImages.up} />
            <IconButton type={iconImages.down} />
        </View>
    );
};
//나중에 item.id를 item.text로 바꿔야 함

const styles = StyleSheet.create({
    list: {
        width: '80%',
        alignSelf: 'center',
        marginBottom: 7,
        paddingLeft:10,
        paddingRight:10,
        borderRadius: 5,
        flexDirection: 'row',
    },
    textList: {
        fontSize: 20,
        fontWeight: '700',
        color: basicColor.text,
        marginRight: 'auto',
        marginLeft: 10,
    },
    box: {
        margin: 15,
    },
});

List.propTypes = {
    item: propTypes.object.isRequired,
    action: propTypes.func.isRequired,
    page: propTypes.string.isRequired,
};

export default List;