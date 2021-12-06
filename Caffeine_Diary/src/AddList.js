import React, {useState, useContext, Component} from "react";
import InfoContext from './components/InfoContext';
import {ScrollView,StatusBar, SafeAreaView, Pressable, Text, View, StyleSheet, Image, TextInput, Dimensions} from 'react-native';
import {basicColor} from './colors';
import { viewStyles, textStyles } from './styles';
import {Picker} from '@react-native-picker/picker';
import BackArrow from './components/BackArrow';

const AddList = () => {
    const width = Dimensions.get('window').width;
    const userContext = useContext(InfoContext);
    const YEAR = new Date().getFullYear(); // Current year Constant
    const MONTH = new Date().getMonth()+10; // Current month Constant
    const DAY = new Date().getDate()+10; // Current day Constant
    const [todo,setTodo] = useState(''); // title of Schedule
    const [year,setYear] = useState(new Date().getFullYear().toString()); // deadline => year
    const [month,setMonth] = useState((new Date().getMonth()+10).toString()); // deadline => month
    const [day,setDay] = useState((new Date().getDate()+10).toString()); // deadline => day
    const [now,setNow] = useState(new Date().getFullYear().toString()+(new Date().getMonth()+10).toString()+(new Date().getDate()+10).toString());
    const [category, setCategory] = useState('assignment'); // category of Schedule
    const [comment, setComment] = useState(''); // comment of Schedule
    class date extends Component{ // calculate date
        state={
            now: new Date()
        }
        render(){
            const {now} = this.state;
            const nowStr=now.getFullYear().toString()+(now.getMonth()+10).toString()+(now.getDate()+10).toString()+now.getHours().toString()+now.getMinutes().toString()+now.getSeconds().toString();
            return nowStr; //현재 연도+월+일+시간+분+초 string
        }
    }
    class CategoryPicker extends Component{
        state={
            category: '',
        };
        render(){
            return(
                <View style={styles.container}>
                    <Picker
                      style={{height:50,width:250}}
                      selectedValue={category}
                      onValueChange={(val,idx)=> {
                        this.setState({category:val});
                        setCategory(val);}
                      }>
                        <Picker.Item style={{fontSize:20}} label="assignment" value={"assignment"} />
                        <Picker.Item style={{fontSize:20}} label="lecture" value={"lecture"} />
                        <Picker.Item style={{fontSize:20}} label="hobby" value={"hobby"} />
                        <Picker.Item style={{fontSize:20}} label="etc." value={"etc."} />
                    </Picker>
                </View>
            );
        }
    }
    class DatePicker extends Component{
         state={
             year: new Date().getFullYear().toString(),
             month: new Date().getMonth().toString(),
             day: new Date().getDate().toString(),
         };
         render(){
             return(
                 <View style={styles.container}>
                     <Picker
                       style={{height:50,width:110}}
                       selectedValue={year}
                       onValueChange={(val,idx)=> {
                       this.setState({year:val});
                       setYear(val);}
                       }>
                         <Picker.Item style={{fontSize:20}} label={YEAR.toString()} value={YEAR.toString()} />
                         <Picker.Item style={{fontSize:20}} label={(YEAR+1).toString()} value={(YEAR+1).toString()} />
                         <Picker.Item style={{fontSize:20}} label={(YEAR+2).toString()} value={(YEAR+2).toString()} />
                         <Picker.Item style={{fontSize:20}} label={(YEAR+3).toString()} value={(YEAR+3).toString()} />
                         <Picker.Item style={{fontSize:20}} label={(YEAR+4).toString()} value={(YEAR+4).toString()} />
                         <Picker.Item style={{fontSize:20}} label={(YEAR+5).toString()} value={(YEAR+5).toString()} />
                         <Picker.Item style={{fontSize:20}} label={(YEAR+6).toString()} value={(YEAR+6).toString()} />
                         <Picker.Item style={{fontSize:20}} label={(YEAR+7).toString()} value={(YEAR+7).toString()} />
                         <Picker.Item style={{fontSize:20}} label={(YEAR+8).toString()} value={(YEAR+8).toString()} />
                         <Picker.Item style={{fontSize:20}} label={(YEAR+9).toString()} value={(YEAR+9).toString()} />
                     </Picker>
                     <Picker
                       style={{height:50,width:90}}
                       selectedValue={(parseInt(month)-10).toString()}
                       onValueChange={(val,idx)=> {
                       this.setState({month:val});
                       setMonth((parseInt(val)+10).toString());}
                       }>
                         <Picker.Item style={{fontSize:20}} label="1" value={"0"} />
                         <Picker.Item style={{fontSize:20}} label="2" value={"1"} />
                         <Picker.Item style={{fontSize:20}} label="3" value={"2"} />
                         <Picker.Item style={{fontSize:20}} label="4" value={"3"} />
                         <Picker.Item style={{fontSize:20}} label="5" value={"4"} />
                         <Picker.Item style={{fontSize:20}} label="6" value={"5"} />
                         <Picker.Item style={{fontSize:20}} label="7" value={"6"} />
                         <Picker.Item style={{fontSize:20}} label="8" value={"7"} />
                         <Picker.Item style={{fontSize:20}} label="9" value={"8"} />
                         <Picker.Item style={{fontSize:20}} label="10" value={"9"} />
                         <Picker.Item style={{fontSize:20}} label="11" value={"10"} />
                         <Picker.Item style={{fontSize:20}} label="12" value={"11"} />
                     </Picker>
                     <Picker
                        style={{height:50,width:90}}
                        selectedValue={(parseInt(day)-10).toString()}
                        onValueChange={(val,idx)=> {
                        this.setState({day:val});
                        setDay((parseInt(val)+10).toString());}
                        }>
                         <Picker.Item style={{fontSize:20}} label="1" value={"1"} />
                         <Picker.Item style={{fontSize:20}} label="2" value={"2"} />
                         <Picker.Item style={{fontSize:20}} label="3" value={"3"} />
                         <Picker.Item style={{fontSize:20}} label="4" value={"4"} />
                         <Picker.Item style={{fontSize:20}} label="5" value={"5"} />
                         <Picker.Item style={{fontSize:20}} label="6" value={"6"} />
                         <Picker.Item style={{fontSize:20}} label="7" value={"7"} />
                         <Picker.Item style={{fontSize:20}} label="8" value={"8"} />
                         <Picker.Item style={{fontSize:20}} label="9" value={"9"} />
                         <Picker.Item style={{fontSize:20}} label="10" value={"10"} />
                         <Picker.Item style={{fontSize:20}} label="11" value={"11"} />
                         <Picker.Item style={{fontSize:20}} label="12" value={"12"} />
                         <Picker.Item style={{fontSize:20}} label="13" value={"13"} />
                         <Picker.Item style={{fontSize:20}} label="14" value={"14"} />
                         <Picker.Item style={{fontSize:20}} label="15" value={"15"} />
                         <Picker.Item style={{fontSize:20}} label="16" value={"16"} />
                         <Picker.Item style={{fontSize:20}} label="17" value={"17"} />
                         <Picker.Item style={{fontSize:20}} label="18" value={"18"} />
                         <Picker.Item style={{fontSize:20}} label="19" value={"19"} />
                         <Picker.Item style={{fontSize:20}} label="20" value={"20"} />
                         <Picker.Item style={{fontSize:20}} label="21" value={"21"} />
                         <Picker.Item style={{fontSize:20}} label="22" value={"22"} />
                         <Picker.Item style={{fontSize:20}} label="23" value={"23"} />
                         <Picker.Item style={{fontSize:20}} label="24" value={"24"} />
                         <Picker.Item style={{fontSize:20}} label="25" value={"25"} />
                         <Picker.Item style={{fontSize:20}} label="26" value={"26"} />
                         <Picker.Item style={{fontSize:20}} label="27" value={"27"} />
                         <Picker.Item style={{fontSize:20}} label="28" value={"28"} />
                         {((year%4==0)&&(year%100!=0)||(year%400==0))&&(<Picker.Item style={{fontSize:20}} label="29" value={"29"} />)}
                         {(month!=11)&&(<Picker.Item style={{fontSize:20}} label="30" value={"30"} />)}
                         {(month==10||month==12||month==14||month==16||month==17||month==19||month==21)&&(<Picker.Item style={{fontSize:20}} label="31" value={"31"} />)}
                     </Picker>
                 </View>
             );
         }
     }
    const _addList = () => {
        const Date = new date().render();//현재 date string
        const Deadline = year+month+day;
        const newListObject = {
            [Date]: {date: Date, todo:todo, deadline:Deadline,category:category,comment:comment,completed: false},
        };
        (()=>{ //Check whether the deadline is ahead of the current date.
            if(parseInt(Deadline)>=parseInt(now)){
                userContext.setLists({...userContext.Lists, ...newListObject});
                alert('The schedule has been added successfully.');
                setTodo('');
                setYear(YEAR);
                setMonth(MONTH);
                setDay(DAY);
                setCategory('assignment');
                setComment('');
            }
            else{
                alert("Invalid deadline. Please enter the proper schedule information.");

            }
        })()

    };
    return(
        <ScrollView>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
                <SafeAreaView style={{paddingTop: 20,marginTop: 20,marginBottom: 20}}>
                    <BackArrow />
                    <SafeAreaView style={{alignItems:'center'}}>
                        <Text style={styles.title}>Add new schedule to</Text>
                        <Text style={styles.title}>TO-DO-LIST</Text>
                    </SafeAreaView>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row', backgroundColor: basicColor.itemBackground, alignItems:'center'}}>
                    <Text style={styles.greyBox}>Title</Text>
                    <SafeAreaView style={styles.container}>
                        <TextInput style={styles.input} placeholder={"Please enter a schedule."}
                        onChangeText={text=>setTodo(text)} value={todo}></TextInput>
                    </SafeAreaView>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row',backgroundColor: basicColor.itemBackground, alignItems:'center',paddingTop:10}}>
                    <Text style={styles.greyBox}>Deadline</Text>
                    <DatePicker />
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row', backgroundColor: basicColor.itemBackground, alignItems:'center',paddingTop:30}}>
                    <Text style={styles.greyBox}>Category</Text>
                    <CategoryPicker />
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row', backgroundColor: basicColor.itemBackground, alignItems:'center',paddingTop:40}}>
                    <Text style={styles.greyBox}>Comment</Text>
                    <SafeAreaView style={styles.comment}>
                        <TextInput style={{backgroundColor: basicColor.background, width: '90%', fontSize:20, fontWeight:'400',padding: 5}}
                        placeholder={"Please enter a comment."}
                        onChangeText={text=>setComment(text)}
                        value={comment}>
                        </TextInput>
                    </SafeAreaView>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row'}}>
                    <Pressable style={{ flex: 1, backgroundColor: basicColor.itemBackground, paddingLeft: 40}}>
                        <Text style={{fontSize:23,fontWeight:'700',paddingTop: 30,paddingLeft: 30,}}> Add</Text>
                        <Text style={{fontSize:23,fontWeight:'700',paddingTop: 0,paddingBottom: 40,paddingLeft: 30,}}>Photo</Text>
                    </Pressable>
                    <Pressable style={{ flex: 1, backgroundColor: basicColor.itemBackground, paddingRight: 60}}>
                        <Text style={{fontSize:23,fontWeight:'700',paddingTop: 30,paddingLeft: 40,}}>    Add</Text>
                        <Text style={{fontSize:23,fontWeight:'700',paddingTop: 0,paddingBottom: 40,paddingLeft: 40,}}>Location</Text>
                    </Pressable>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row'}}>
                    <Pressable onPress={_addList}>
                        <Text style={{ backgroundColor: basicColor.itemBackground, fontSize:23,fontWeight:'700',paddingTop: 13,paddingBottom: 13, paddingLeft: '40%', paddingRight: '40%', margin: 20}}>
                        add</Text>
                    </Pressable>
                </SafeAreaView>

            </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 2.5,
        flexDirection:'row',
        fontWeight:'400',
    },
    title: {
        alignContent: 'center',
        color: basicColor.text,
        fontSize: 30,
        fontWeight: '700',
    },
    greyBox: {
        flex: 1,
        fontSize:22,
        fontWeight:'700',
        paddingLeft: 15,
    },
    input: {
        flex: 2,
        fontSize:20,
        fontWeight:'400',
        paddingTop: 30,
        paddingBottom: 30,
    },
    comment: {
        flex: 2.4,
        fontSize:23,
        fontWeight:'400',
    },
})

export default AddList;