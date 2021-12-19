import React,{useState, useContext} from 'react';
import {Pressable, Text, SafeAreaView, StyleSheet} from 'react-native';
import {basicColor} from '../colors';
import List from './List';
import InfoContext from './InfoContext';
import IconButton from './IconButton';
import { stickerImages } from '../images';

const SelectBtn = ({item}) =>{
    const [mode,setMode] =useState('Select All');
    const [changeLists,setChangeLists] = useState('');
    const userContext = useContext(InfoContext);
    const DATE = new Date().getFullYear().toString()+(new Date().getMonth()+10).toString()+(new Date().getDate()+10).toString(); //오늘 날짜 YYYYMMDD
    return(
        <SafeAreaView style={styles.button}>
        <Pressable
            onPressOut={()=>{
            (()=>{
            if(userContext.Lists){
                if(item=="All Schedule"){
                    Object.values(userContext.Lists).map(listItems=>{
                    (()=>{
                       if(mode=='Select All'){
                            if(!listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Deselect All');
                       }
                       else{
                            if(listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Select All');
                       }

                    })()
                    })}
                else if(item=="Today's Schedule"){
                   Object.values(userContext.Lists).filter(LIST=>parseInt(LIST.deadline) >= DATE).map(listItems=>{
                    (()=>{
                       if(mode=='Select All'){
                            if(!listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Deselect All');
                       }
                       else{
                            if(listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Select All');
                       }

                    })()
                    })}
                else if(item=="Today's Assignment"){
                   Object.values(userContext.Lists).filter(LIST=>LIST.category=='assignment').map(listItems=>{
                    (()=>{
                       if(mode=='Select All'){
                            if(!listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Deselect All');
                       }
                       else{
                            if(listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Select All');
                       }

                    })()
                    })}
                else if(item=="Today's Lecture"){
                   Object.values(userContext.Lists).filter(LIST=>LIST.category=='lecture').map(listItems=>{
                    (()=>{
                       if(mode=='Select All'){
                            if(!listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Deselect All');
                       }
                       else{
                            if(listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Select All');
                       }

                    })()
                    })}
                else if(item=="Today's Hobby"){
                   Object.values(userContext.Lists).filter(LIST=>LIST.category=='hobby').map(listItems=>{
                    (()=>{
                       if(mode=='Select All'){
                            if(!listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Deselect All');
                       }
                       else{
                            if(listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Select All');
                       }

                    })()
                    })}
                else if(item=="Today's etc."){
                   Object.values(userContext.Lists).filter(LIST=>LIST.category=='etc.').map(listItems=>{
                    (()=>{
                       if(mode=='Select All'){
                            if(!listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Deselect All');
                       }
                       else{
                            if(listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Select All');
                       }

                    })()
                    })}
                else if(item=="Completed"){
                   Object.values(userContext.Lists).filter(LIST=>LIST.completed==true).map(listItems=>{
                    (()=>{
                       if(mode=='Select All'){
                            if(!listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Deselect All');
                       }
                       else{
                            if(listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Select All');
                       }

                    })()
                    })}
                else if(item=="Uncompleted"){
                   Object.values(userContext.Lists).filter(LIST=>LIST.completed==false).map(listItems=>{
                    (()=>{
                       if(mode=='Select All'){
                            if(!listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Deselect All');
                       }
                       else{
                            if(listItems.completed){
                                listItems.completed=!listItems.completed;
                                const currentLists = Object.assign({}, userContext.Lists);
                                userContext._setLists(currentLists);
                            }
                            setMode('Select All');
                       }

                    })()
                    })}
                    }
            })()
            }}
        >
            <Text 
                style={{color:basicColor.pointText,
                        fontWeight: '700',
                        fontSize:18,
                        }}>
                {mode}
                </Text>
        </Pressable>
        </SafeAreaView>
    );
};

/*
const checkAll = () => {
    const userContext = useContext(InfoContext);

    return (
        <List >
            <IconButton type={stickerImages.userContext.CheckSticker} />
        </List>
    )
}; */

const styles = StyleSheet.create({
    button: {
        padding: 5,
        borderWidth: 2,
        marginRight:10,
    },
});

export default SelectBtn;