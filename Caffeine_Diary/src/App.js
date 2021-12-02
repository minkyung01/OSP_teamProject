import {Component} from 'react';
import Title from './Title';
import AppMain from './AppMain';
import MyPage from './MyPage'
import LevelInfo from './LevelInfo';
import Stickers_and_Skins from './Stickers_and_Skins';
import React,{useState} from 'react';
import InfoContext from './components/InfoContext';
import {themeColor} from './colors';
import EditList from './EditList';

const App = () =>{
    const [id, setId] = useState('Ewha Kim');
    const [attendance, setAttendance] = useState(100);
    const [skinColor, setSkinColor] = useState(themeColor.Orange);
    const [sort, setSort] = useState('closest'); // sort method
    const [sticker,setSticker] = useState(0); // check sticker type(0~4)
    const [lists, setLists] = useState({ /*date: 현재 date, todo: 할일내용, category:카테고리, comment: 메모, completed: 끝남여부*/
        '202111118548': {date: '202111118548', todo: "test #1", category:"assignment",comment:"",completed: false},
        '202111118530': {date: '202111118530', todo: "test #2", category:"assignment",comment:"",completed: true},
    });
    class date extends Component{ // calculate date
        state={
            now: new Date()
        }
        render(){
            const {now} = this.state;
            const nowStr=now.getFullYear().toString()+now.getMonth().toString()+now.getDate().toString()+now.getHours().toString()+now.getMinutes().toString()+now.getSeconds().toString();
            return nowStr; //현재 연도+월+일+시간+분+초 string
        }
    }
    // add list page에서 작성한 값 가져와야 함.
    const _addList = () => {
        const Date = new date().render();//현재 date string
        const newListObject = {
            [Date]: {date: Date, todo:"new Schedule", category:"assignment",comment:"",completed: false},
        };
        setLists({...lists, ...newListObject});
    };
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
        Category: ["assignment","lecture","hobby","etc.",],
        Lists: lists,
        CheckSticker: sticker,
        setId,
        setAttendance,
        setSkinColor,
        setSort,
        setSticker,
        setLists,
        _addList,
        date,
    };
    return(
        <InfoContext.Provider value={userInfo}>
        <AppMain/>
        </InfoContext.Provider>
    );
}
export default App;