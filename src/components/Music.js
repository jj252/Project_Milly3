import {useRef} from 'react';
import oneThousand from '../sounds/1001000 music.mp3';
import twoThousand from '../sounds/200032000.mp3';
import sixtyfour from '../sounds/64000_music.mp3';
import oneFiftyMusic from '../sounds/150music.mp3';
import FiveHundedMusic from '../sounds/500music.mp3';
import millymusic from '../sounds/milmusic.mp3';
import correct_Ans from '../sounds/correct answer.mp3';
import style from '../shared/StudentList.module.css';
import useSound from 'use-sound';

const Music = (bank) => {
    let the_bank = bank.prop;
    const Theme_100 = useRef(new Audio(oneThousand));
    const Theme_2000 = useRef(new Audio(twoThousand));
    const Theme_64 = useRef(new Audio(sixtyfour));
    const Theme_150_Grand = useRef(new Audio(oneFiftyMusic));
    const Theme_500_Grand = useRef(new Audio(FiveHundedMusic));
    const Milly = useRef(new Audio(millymusic));
    const Correct = useRef(new Audio(correct_Ans));

    

    if (the_bank === 100){
        return(
            <div className={style.MusicDiv} onMouseEnter={Correct.current.play()}></div>,
            <div className={style.MusicDiv} onMouseEnter={Theme_100.current.play()}></div>
        )
    }
    if (the_bank === 1000){
        return(
            <div className={style.MusicDiv} onMouseEnter={Theme_100.current.pause()}></div>,
            <div className={style.MusicDiv} onMouseEnter={Correct.current.play()}></div>,
            <div className={style.MusicDiv} onMouseEnter={Theme_2000.current.play()}></div>
        )
    }
    if (the_bank === 32000){
        return(
            <div className={style.MusicDiv} onMouseEnter={Theme_2000.current.pause()}></div>,
            <div className={style.MusicDiv} onMouseEnter={Correct.current.play()}></div>,
            <div className={style.MusicDiv} onMouseEnter={Theme_64.current.play()}></div>
        )
    }
    if (the_bank === 125000){
        return(
            <div className={style.MusicDiv} onMouseEnter={Theme_64.current.pause()}></div>,
            <div className={style.MusicDiv} onMouseEnter={Correct.current.play()}></div>,
            <div className={style.MusicDiv} onMouseEnter={Theme_150_Grand.current.play()}></div>
        )
    }
    if (the_bank === 250000){
        return(
            <div className={style.MusicDiv} onMouseEnter={Theme_150_Grand.current.pause()}></div>,
            <div className={style.MusicDiv} onMouseEnter={Correct.current.play()}></div>,
            <div className={style.MusicDiv} onMouseEnter={Theme_500_Grand.current.play()}></div>
        )
    }
    if (the_bank === 500000){
        return(
            <div className={style.MusicDiv} onMouseEnter={Theme_500_Grand.current.pause()}></div>,
            <div className={style.MusicDiv} onMouseEnter={Correct.current.play()}></div>,
            <div className={style.MusicDiv} onMouseEnter={Milly.current.play()}></div>
        )
    }
    
    
}

export default Music;