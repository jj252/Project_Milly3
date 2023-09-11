import {useRef} from 'react';
import oneThousand from '../sounds/1001000 music.mp3';
import oneFiftyMusic from '../sounds/150music.mp3';
import FiveHundedMusic from '../sounds/500music.mp3';
import style from '../shared/StudentList.module.css';

const Music = (bank) => {
    let the_bank = bank.prop;
    const Theme_100 = useRef(new Audio(oneThousand));
    const Theme_150_Grand = useRef(new Audio(oneFiftyMusic));
    const Theme_500_Grand = useRef(new Audio(FiveHundedMusic));
    if (the_bank === 100){
        return(
            <div className={style.MusicDiv} onMouseEnter={Theme_100.current.play()}></div>
        )
    }
    if (the_bank === 1000){
        return(
            <div className={style.MusicDiv} onMouseEnter={Theme_100.current.pause()}></div>,
            <div className={style.MusicDiv} onMouseEnter={Theme_500_Grand.current.play()}></div>
        )
    }
    
    
}

export default Music;