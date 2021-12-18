//share
import React from 'react';
import { Share, View, Button } from 'react-native';

<View style={{ marginTop: 50 }}>
      <Button onPress={onShare} title="Share" />
</View>

const onShare = async () => { 
    try { 
        const result = await Share.share( 
            { 
                title: 'App link',
                message: 'Share To-Do-List with Friends!', 
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


