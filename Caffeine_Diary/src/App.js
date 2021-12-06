import Title from './Title';
import AppMain from './AppMain';
import MyPage from './MyPage'
import LevelInfo from './LevelInfo';
import Stickers_and_Skins from './Stickers_and_Skins';
import React,{useState} from 'react';
import InfoContext from './components/InfoContext';
import {themeColor} from './colors';
import EditList from './EditList';
import Ranking from './Ranking';
import AddList from './AddList';
import ListInfo from './ListInfo';
import LoginScreen from './loginScreen';
import SuccessScreen from './successScreen';
import SignupScreen from './signupScreen';

const App = () =>{
    const [id, setId] = useState('Ewha Kim');
    const [password, setPassword] = useState('1886');
    const [attendance, setAttendance] = useState(100);
    const [skinColor, setSkinColor] = useState(themeColor.Orange);
    const [sort, setSort] = useState('closest'); // sort method
    const [sticker,setSticker] = useState(0); // check sticker type(0~4)
    const [mode,setMode] = useState('option'); //completion rate mode
    const [lists, setLists] = useState({ /*date: 현재 date, todo: 할일내용, category:카테고리, comment: 메모, completed: 끝남여부*/
        '202121158548': {date: '202121158548', todo: "test #1", deadline:"20222116",category:"assignment",comment:"first Test",completed: false},
        '202121158520': {date: '202121158520', todo: "test #2", deadline:"20232120",category:"assignment",comment:"second Test",completed: false},
        '202121158510': {date: '202121158510', todo: "test #3", deadline:"20242120",category:"assignment",comment:"second Test",completed: true},
        '202120308570': {date: '202121308570', todo: "test #4", deadline:"20252120",category:"lecture",comment:"second Test",completed: true},
        '202121128530': {date: '202121128530', todo: "test #5", deadline:"20262120",category:"hobby",comment:"second Test",completed: false},
        '202120408530': {date: '202120408530', todo: "test #6", deadline:"20272120",category:"hobby",comment:"second Test",completed: true},
        '202121148520': {date: '202121148520', todo: "test #7", deadline:"20282120",category:"etc.",comment:"second Test",completed: false},

    });
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
        Mode: mode,
        Lists: lists,
        CheckSticker: sticker,
        setId,
        setAttendance,
        setSkinColor,
        setSort,
        setSticker,
        setLists,
        setMode,
        setPassword,
    };
    return(
        <InfoContext.Provider value={userInfo}>
        <AddList/>
        </InfoContext.Provider>
    );
}
export default App;