import React from 'react';

export const ID = "Ewha Kim";
export const Attendance = 0;
export const LevelName = levelUp();
export const SkinColor = "Orange";
export const Sort = "closest";

function levelUp(){
    if(Attendance<21)
        return "Water";
    else if(Attendance<60)
        return "Coffee-Bean";
    else
        return "Americano";
}
