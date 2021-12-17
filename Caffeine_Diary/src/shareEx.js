//share
import React from 'react';
import { Share, View, Button } from 'react-native';

<Text onPress={() => onShare()}>이거누르면 공유하기 기능나옴</Text>

const onShare = async () => { 
    try { 
        const result = await Share.share( 
            { 
                message: link, 
            } 
        ); 
                
        if (result.action === Share.sharedAction) { 
            if (result.activityType) { 
                console.log('activityType!'); 
            } else { 
                console.log('Share!'); 
            } 
        } else if (result.action === Share.dismissedAction) { 
                 console.log('dismissed'); 
        } 
    } catch (error) {
             alert(error.message); 
    } 
};

//const link = 

