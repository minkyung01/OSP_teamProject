import AppMain from './AppMain';
import MyPage from './MyPage'
import LevelInfo from './LevelInfo';
import Stickers_and_Skins from './Stickers_and_Skins';
import React,{useState} from 'react';
import InfoContext from './components/InfoContext';
import {themeColor} from './colors';

const App = () =>{
    const [id, setId] = useState('Ewha Kim');
    const [attendance, setAttendance] = useState(0);
    const [skinColor, setSkinColor] = useState(themeColor.Orange);
    const [sort, setSort] = useState('closest');
    const [sticker,setSticker] = useState(0);

    const userInfo={
        ID: id,
        Attendance: attendance,
        SkinColor: skinColor,
        Sort: sort,
        Level: (()=>{
            if(attendance<21) return 0;
            else if(attendance<60) return 1;
            else return 2;})(),
        LevelName: ["Water","Coffee-Bean","Americano"],
        CheckSticker: sticker,
        setId,
        setAttendance,
        setSkinColor,
        setSort,
        setSticker,
    };
    return(
        <InfoContext.Provider value={userInfo}>
            <LevelInfo />
        </InfoContext.Provider>
    );
}
export default App;