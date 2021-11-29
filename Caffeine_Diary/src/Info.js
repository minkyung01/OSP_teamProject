import React from 'react';
import {stickerImages} from './images';

export const ID = "Ewha Kim";
export const Attendance = 100;
export const LevelName = levelUp();
export const SkinColor = "Orange";
export const Sort = "closest";
export const CheckSticker = LevelSticker()[0];
export const LevelGroupSticker = LevelSticker();

function levelUp(){
    if(Attendance<21)
        return "Water";
    else if(Attendance<60)
        return "Coffee-Bean";
    else
        return "Americano";
}
function LevelSticker() {
    if(Attendance<21)
        return stickerImages.Water;
    else if(Attendance<60)
        return stickerImages.CoffeeBean;
    else
        return stickerImages.Americano;
}
