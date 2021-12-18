import Title from './Title';
import AppMain from './AppMain';
import MyPage from './MyPage'
import LevelInfo from './LevelInfo';
import Stickers_and_Skins from './Stickers_and_Skins';
import React,{useState} from 'react';
import InfoContext from './components/InfoContext';
import {themeColor} from './colors';
import EditList from './EditList';
import EditContent from './EditContent';
import Ranking from './Ranking';
import AddList from './AddList';
import ListInfo from './ListInfo';
import LoginScreen from './loginScreen';
import SignupScreen from './signupScreen';
import Search from './Search';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () =>{
    const [isReady, setIsReady] = useState(false);
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const [attendance, setAttendance] = useState();
    const [LastAttendance, setLastAttendance] = useState('');
    const [skinColor, setSkinColor] = useState(themeColor.Orange);
    const [sort, setSort] = useState(); // sort method
    const [sticker,setSticker] = useState(); // check sticker type(0~4)
    const [lists, setLists] = useState(); /*date: 현재 date, todo: 할일내용, category:카테고리, comment: 메모, completed: 끝남여부*/
    const [keepSignIn, setKeepSignIn] = useState(false);
    const _loadInfo = async () => {
        const loadedId = await AsyncStorage.getItem('id');
        const loadedPassword = await AsyncStorage.getItem('password');
        const loadedAttendance = await AsyncStorage.getItem('attendance');
        const loadedSkinColor = await AsyncStorage.getItem('skinColor');
        const loadedSort = await AsyncStorage.getItem('sort');
        const loadedLists = await AsyncStorage.getItem('lists');
        const loadedCheckSticker = await AsyncStorage.getItem('sticker');
        const loadedKeepSignIn = await AsyncStorage.getItem('keepSignIn');
        const loadedLastAttendance = await AsyncStorage.getItem('LastAttendance');

        setId(JSON.parse(loadedId)||'');
        setPassword(JSON.parse(loadedPassword)||'');
        setAttendance(JSON.parse(loadedAttendance)||0);
        setSort(JSON.parse(loadedSort)||"closest");
        setSkinColor(JSON.parse(loadedSkinColor)||themeColor.Orange);
        setLists(JSON.parse(loadedLists)||'{}');
        setSticker(JSON.parse(loadedCheckSticker)||0);
        setKeepSignIn(JSON.parse(loadedKeepSignIn)||false);
        setLastAttendance(JSON.parse(loadedLastAttendance)||'');
    }
    const _setId = async id => {
        try{
            await AsyncStorage.setItem('id',JSON.stringify(id));
            setId(id);
        }catch (e){
            console.error(e);
        }
    };
    const _setPassword = async password => {
        try{
            await AsyncStorage.setItem('password',JSON.stringify(password));
            setPassword(password);
        }catch (e){
            console.error(e);
        }
    };
    const _setAttendance = async attendance => {
        try{
            await AsyncStorage.setItem('attendance',JSON.stringify(attendance));
            setAttendance(attendance);
        }catch (e){
            console.error(e);
        }
    };
    const _setSkinColor = async skinColor => {
        try{
            await AsyncStorage.setItem('skinColor',JSON.stringify(skinColor));
            setSkinColor(skinColor);
        }catch (e){
            console.error(e);
        }
    };
    const _setSort = async sort => {
        try{
            await AsyncStorage.setItem('sort',JSON.stringify(sort));
            setSort(sort);
        }catch (e){
            console.error(e);
        }
    };
    const _setLists = async lists => {
        try{
            await AsyncStorage.setItem('lists',JSON.stringify(lists));
            setLists(lists);
        }catch (e){
            console.error(e);
        }
    };
    const _setSticker = async sticker => {
        try{
            await AsyncStorage.setItem('sticker',JSON.stringify(sticker));
            setSticker(sticker);
        }catch (e){
            console.error(e);
        }
    };
    const _setKeepSignIn = async keepSignIn => {
        try{
            await AsyncStorage.setItem('keepSignIn',JSON.stringify(keepSignIn));
            setKeepSignIn(keepSignIn);
        }catch (e){
            console.error(e);
        }
    };
    const _setLastAttendance = async LastAttendance => {
        try{
            await AsyncStorage.setItem('LastAttendance',JSON.stringify(LastAttendance));
            setLastAttendance(LastAttendance);
        }catch (e){
            console.error(e);
        }
    };

    const userInfo={
        ID: id,
        Password: password,
        Attendance: attendance,
        SkinColor: skinColor,
        Sort: sort,
        Level: (()=>{
            if(attendance<21) return 0;
            else if(attendance<60) return 1;
            else return 2;})(),
        LevelName: ["Water","Coffee-Bean","Americano"],
        Category: ["assignment","lecture","hobby","etc.",],
        Lists: lists,
        CheckSticker: sticker,
        KeepSignIn : keepSignIn,
        LastAttendance: LastAttendance,
        _setId,
        _setPassword,
        _setAttendance,
        _setSkinColor,
        _setSort,
        _setSticker,
        _setLists,
        _setKeepSignIn,
        _setLastAttendance,
    };
    const Stack=createNativeStackNavigator();
    return isReady ? (
        <InfoContext.Provider value={userInfo}>
            <NavigationContainer>
            <Stack.Navigator initialRouteName="Title" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Title" component={Title} options={{title:'Caffeine Diary'}}/>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignupScreen} />
                <Stack.Screen name="Main" component={AppMain} />
                <Stack.Screen name="AddList" component={AddList} />
                <Stack.Screen name="Del_Add_List" component={EditList} />
                <Stack.Screen name="ListInfo" component={ListInfo} />
                <Stack.Screen name="EditContent" component={EditContent} />
                <Stack.Screen name="Completion" component={Ranking} />
                <Stack.Screen name="MyPage" component={MyPage} />
                <Stack.Screen name="LevelInfo" component={LevelInfo} />
                <Stack.Screen name="Sticker_and_Skin" component={Stickers_and_Skins} />
                <Stack.Screen name="Search" component={Search} />
            </Stack.Navigator>
            </NavigationContainer>
        </InfoContext.Provider>
    ) : (
        <AppLoading
            startAsync = {_loadInfo}
            onFinish = {()=>setIsReady(true)}
            onError={console.error} />
    );
}
export default App;