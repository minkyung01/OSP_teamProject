import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
const Title = () => {
 return (
    <View style={styles.container}>
    <Image style={styles.image}
        source={require('./../assets/coffee.png')}
    />
    <Text style={styles.text}>Caffeine Diary</Text>
    </View>
 );
};
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FFE4C3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        padding: 20,
        fontSize: 50,
        fontWeight: '700',
        color: 'black',
    },
    image:{
      width: '60%',
      height: '60%',
    },

})
export default Title;