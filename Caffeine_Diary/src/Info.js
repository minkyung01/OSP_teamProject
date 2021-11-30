import React,{useState} from 'react';
import InfoContext from './components/InfoContext';
import {iconImages} from './images';
import {themeColor} from './colors';

export const ID = "Ewha Kim";
export const Attendance = 0;
export const LevelName = ["Water","Coffee-Bean","Americano"];
export const SkinColor = themeColor.Orange;
export const Sort = "closest";
export const Level = (()=>{
            if(Attendance<21) return 0;
            else if(Attendance<60) return 1;
            else return 2;})();
