import React, {useState} from "react";
import {SafeAreaView, Pressable, Text, View, StyleSheet, Image, TextInput, Dimensions} from 'react-native';
import {basicColor} from './colors';
import { viewStyles, textStyles } from './styles';
import Input from './Input';
import Task from './components/Task';

export default function Events(){
    const width = Dimensions.get('window').width;
    const [newTask, setNewTask] = useState('');

    const [tasks, setTasks] = useState({
        '1': {id: '1', text: "Todo item #1", completed: false},
        '2': {id: '2', text: "Todo item #2", completed: true},
    });

    const _addTask = () => {
        alert(`Add: ${newTask}`);
        const ID = Date.now().toString();
        const newTaskObject = {
            [ID]: {id: ID, text: newTask, completed: false},
        };
        setNewTask('');
        setTasks({...tasks, ...newTaskObject });
    }
    
    const _handleTextChange = text => {
        setNewTask(text);
    };

    return (
        <SafeAreaView style={viewStyles.container}>
            <Input value={newTask} onChangeText={_handleTextChange}
            onSubmitEditing={_addTask}/>
            <View width ={width-20}>
                {Object.values(tasks).reverse().map(item => (
                    <Task ket={item.id} text={item.text} />
                ))}
            </View>
        </SafeAreaView>
    );
};