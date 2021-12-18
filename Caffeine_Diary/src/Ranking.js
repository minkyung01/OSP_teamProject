import React,{useContext, useState,Component} from 'react';
import {Share,StatusBar, SafeAreaView, View,Text, StyleSheet, Image, ScrollView, Dimensions, Pressable} from 'react-native';
import { basicColor } from './colors';
import { textStyles } from './styles';
import {levelImages, iconImages} from './images';
import InfoContext from './components/InfoContext';
import {Picker} from '@react-native-picker/picker';
import NavBar from "./components/NavBar";

const Ranking = ({navigation}) => {
    const width = Dimensions.get('window').width;
    const userContext = useContext(InfoContext);
    const [total,setTotal] = useState(0); //total completion rate
    const [count, setCount] = useState(0); // The number of schedules.
    const [countOne,setCountOne] = useState(0);
    const [countTwo,setCountTwo] = useState(0);
    const [countThree,setCountThree] = useState(0);
    const [countFour,setCountFour] = useState(0);
    const [one,setOne] = useState(0); //assignment completion rate
    const [two,setTwo] = useState(0); //lecture completion rate
    const [three,setThree] = useState(0); //hobby completion rate
    const [four,setFour] = useState(0); //etc. completion rate
    const [newLists, setNewLists] = useState([]);
    const [start,setStart] = useState(false); // Whether click show Result button or not
    const [select,setSelect] = useState(false); // Whether select an option or not
    const [mode,setMode] = useState('option'); //completion rate mode
    const Month = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const DAY = (new Date().getDay()===0?7:new Date().getDay()); //월~일:1~7

    const weekYear = new Date(year,month,day-DAY+1).getFullYear();
    const weekMonth = new Date(year,month,day-DAY+1).getMonth();
    const weekDay = new Date(year,month,day-DAY+1).getDate();

    const DATE = new Date().getFullYear().toString()+(new Date().getMonth()+10).toString()+(new Date().getDate()+10).toString(); //오늘 날짜 YYYYMMDD
    const WeekAgo = new Date(year,month,day-DAY).getFullYear().toString()+(new Date(year,month,day-DAY).getMonth()+10).toString()+(new Date(year,month,day-DAY).getDate()+10).toString();// 일주일전 날짜 YYYYMMDD
    const onShare = async () => {
     try {
        const Message = userContext.ID+" achieved "+Math.round(total/(count==0?1:count)*100)+"% "+mode+".";
        const explanation = "* Assignment: "+Math.round(one/(countOne==0?1:countOne)*100)+"% done!\n* Lecture: "+Math.round(two/(countTwo==0?1:countTwo)*100)+"% done!\n* Hobby: "+Math.round(three/(countThree==0?1:countThree)*100)+"% done!\n* Etc.: "+Math.round(four/(countFour==0?1:countFour)*100)+"% done!\n";
        const last= "I did a lot, right?😉 Show yours, too!"
        const result = await Share.share(
            {
                title: '😎Share my Completion Rate😎',
                message: '🎉🎉🎉Please congratulate me!🎉🎉🎉\n\n'+Message+'\n'+explanation+'\n'+last,
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
    return(
    <SafeAreaView style={{padding:0, height:'100%'}}>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
            
            <SafeAreaView style={{flexDirection:'row',alignItems:'center'}}>
                <Image
                style={(()=>{
                    if(userContext.Level==0) return styles.WaterIMG;
                    else if(userContext.Level==1) return styles.BeanIMG;
                    else return styles.CoffeeIMG;
                })()}
                source={(()=>{
                    if(userContext.Level==0) return levelImages.Water;
                    else if(userContext.Level==1) return levelImages.CoffeeBean;
                    else return levelImages.Americano;
                })()} />
                <SafeAreaView style={{alignItems:'center'}}>
                    <Text style={styles.title}>{userContext.ID}'s</Text>
                    <Text style={styles.text}>completion rate</Text>
                </SafeAreaView>
            {(start)&&(
            <Pressable style={{marginLeft:'auto',marginRight:10}} onPress={onShare}>
                <Image source={iconImages.share} style={{width:40,height:40}} />
            </Pressable>)}
            </SafeAreaView>
            <SafeAreaView style={{justifyContent:'space-between',flexDirection:'row'}}>
                    <Pressable
                        style={[styles.dropdown,{backgroundColor:userContext.SkinColor.dark,width:120}]}
                        onPress={()=>{
                        if(mode ==='option') alert('Please select an option');
                        else{
                        setTotal(0);
                        setCount(0);
                        setCountOne(0);
                        setCountTwo(0);
                        setCountThree(0);
                        setCountFour(0);
                        setOne(0);
                        setTwo(0);
                        setThree(0);
                        setFour(0);
                        setStart(true);
                        setSelect(false);
                        Object.values(newLists).map(listItem => (
                        (()=>{
                            if(listItem.completed){
                                setTotal(total=>total+1);
                                if(listItem.category==='assignment') setOne(one=>one+1);
                                else if(listItem.category==='lecture') setTwo(two=>two+1);
                                else if(listItem.category==='hobby') setThree(three=>three+1);
                                else setFour(four=>four+1);
                            }
                            if(listItem.category=='assignment') setCountOne(countOne=>countOne+1);
                            else if(listItem.category=='lecture') setCountTwo(countTwo=>countTwo+1);
                            else if(listItem.category=='hobby') setCountThree(countThree=>countThree+1);
                            else setCountFour(countFour=>countFour+1);
                            setCount(count=>count+1);
                        })()
                        ))}
                    }}>
                    <Text style={{alignSelf:'center',margin:16,color:basicColor.background,fontWeight:'700',fontSize:15}}>
                       Show Result</Text>
                    </Pressable>
                    <Picker
                      style={[styles.dropdown,{backgroundColor:userContext.SkinColor.light}]}
                      selectedValue={mode}
                      onValueChange={(val,idx)=> {
                        setMode(val);
                        setStart(false);
                        if(val !=='option') setSelect(true);
                        else setSelect(false);
                        (()=>{
                        switch(val){
                            case 'today':
                                setNewLists(Object.values(userContext.Lists).filter(LIST=>parseInt(LIST.deadline) >= DATE));
                                break;
                            case 'this week':
                                setNewLists(Object.values(userContext.Lists).filter(LIST=>parseInt(LIST.deadline) > WeekAgo));
                                break;
                            case 'this month':
                                setNewLists(Object.values(userContext.Lists).filter(LIST=>parseInt(LIST.deadline/100) >= parseInt(DATE/100)));
                                break;
                            default:
                                break;
                        }
                        })()
                        }
                      }>
                        <Picker.Item style={{fontSize:20}} label="Choose an option" value={'option'} />
                        <Picker.Item style={{fontSize:20}} label="Today" value={'today'} />
                        <Picker.Item style={{fontSize:20}} label="This Week" value={'this week'} />
                        <Picker.Item style={{fontSize:20}} label="This Month" value={'this month'} />
                    </Picker>
            </SafeAreaView>
            <ScrollView style={{width:'100%', height: '56.4%'}}>
            <SafeAreaView style={{alignItems:'center',backgroundColor:userContext.SkinColor.dark,paddingTop:40,paddingBottom:40}}>
                <SafeAreaView style={styles.content}>
                    {(start)&&(
                        <Text style={styles.best}>{userContext.ID} achieved {Math.round(total/(count==0?1:count)*100)}% {mode}</Text>)}
                    {(!start)&&(select)&&(<Text style={styles.best}>Please press "Show Result" button.</Text>)}
                    {(!start)&&(!select)&&(<Text style={styles.best}>Please select an option.</Text>)}
                </SafeAreaView>

            </SafeAreaView>

            {(start)&&(
            <SafeAreaView style={{flexDirection:'row', backgroundColor:userContext.SkinColor.dark,marginTop:10,paddingTop:10,paddingBottom:10}}>
                <SafeAreaView style={styles.content}>
                     {(mode==='today')&&(<Text style={styles.completionRate}>{year} . {month+1} . {day}</Text>)}
                     {(mode==='this week')&&(<Text style={styles.completionRate}>{weekYear}.{weekMonth+1}.{weekDay} (Mon) ~ {year}.{month+1}.{day}</Text>)}
                     {(mode==='this month')&&(<Text style={styles.completionRate}>{Month[month]} .</Text>)}
                </SafeAreaView>
            </SafeAreaView>
            )}
            {(start)&&(
            <SafeAreaView style={{flexDirection:'row',backgroundColor:userContext.SkinColor.light,marginTop:10,paddingTop:10,paddingBottom:10}}>
                <SafeAreaView style={styles.content}>
                     <Text style={styles.rankings}>assignment({Math.round(one/(countOne==0?1:countOne)*100)}%)</Text>
                </SafeAreaView>
            </SafeAreaView>
            )}
            {(start)&&(
            <SafeAreaView style={{flexDirection:'row',backgroundColor:userContext.SkinColor.light,marginTop:10,paddingTop:10,paddingBottom:10}}>
                <SafeAreaView style={styles.content}>
                     <Text style={styles.rankings}>lecture({Math.round(two/(countTwo==0?1:countTwo)*100)}%)</Text>
                </SafeAreaView>
            </SafeAreaView>
            )}
            {(start)&&(
            <SafeAreaView style={{flexDirection:'row',backgroundColor:userContext.SkinColor.light,marginTop:10,paddingTop:10,paddingBottom:10}}>
                <SafeAreaView style={styles.content}>
                      <Text style={styles.rankings}>hobby({Math.round(three/(countThree==0?1:countThree)*100)}%)</Text>
                </SafeAreaView>
            </SafeAreaView>
            )}
            {(start)&&(
            <SafeAreaView style={{flexDirection:'row',backgroundColor:userContext.SkinColor.light,marginTop:10,paddingTop:10,paddingBottom:10}}>
                <SafeAreaView style={styles.content}>
                      <Text style={styles.rankings}>etc.({Math.round(four/(countFour==0?1:countFour)*100)}%)</Text>
                </SafeAreaView>
            </SafeAreaView>)}
            </ScrollView>

        </SafeAreaView>
    <NavBar navigation={navigation} />
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent:'space-between',
        padding: 10,
        height:'89%'
    },
    content: {
        marginLeft: 20,
        marginRight:20,
        alignItems: 'flex-start',
        flex: 1,
    },
    title: {
        alignItems: 'center',
        color: basicColor.text,
        fontSize: 40,
        fontWeight: '700',
        marginTop: 20,
        marginLeft: 5,
    },
    text: {
        fontSize: 30,
        marginBottom: 10,
        alignItems: 'center',
    },
    user: { // user 불러와서 Bold체 해주기 위해
        fontWeight: '700',
    },
    dropdown: {
        marginBottom: 20,
        marginTop: 20,
        width:220,
        color: basicColor.text,
        fontSize: 16,
        fontWeight:'700',
        justifyContent:'center',
    },
    best: {
        fontSize:40,
        fontWeight:'700',
        color:basicColor.background,
        flex: 3,
        margin:20,
    },
    completionRate: {
        alignItems: 'center',
        flex: 1,
        fontSize:23,
        fontWeight:'700',
        color: basicColor.background,
        paddingTop: 3,
        paddingBottom: 3,
    },
    rankings: {
        flex: 1,
        fontSize:23,
        fontWeight:'700',
        color: basicColor.text,
        paddingTop: 3,
        paddingBottom: 3,
    },
    WaterIMG:{
        marginRight: 10,
        marginBottom: 8,
        width: '25%',
        height: '100%',
    },
    BeanIMG:{
        margin: 7,
        marginTop:20,
        marginRight:20,
        width: '20%',
        height: '60%',
    },
    CoffeeIMG:{
      margin: 10,
      marginRight: 20,
      width: '15%',
      height: '100%',
    },
})

export default Ranking;