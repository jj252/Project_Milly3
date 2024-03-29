import {  Button } from 'reactstrap';
import style from '../shared/StudentList.module.css';
import { useState, useEffect, useRef } from 'react';
import { SelectAllQuestions } from './Navigation';
import Questions from '../components/Questions';
import { AnswersA,AnswersB,AnswersC,AnswersD } from "./Answers";
import TheSideBar from './TheSideBar';
import Music from './Music';
import useSound from 'use-sound';
import correct_Ans from '../sounds/correct answer.mp3';
import beep from '../sounds/beep.mp3';
import { animated, useSpring } from 'react-spring';
import fifty_Fifty from '../assets/ll_fifty.jpg';
import Ask_host from '../assets/ask_host.jpg';
import Phone from '../assets/phone.png';

const Logic = () =>{
    
    const [questionNumber,setQuestionNumber] = useState(1);
    const [question_new,setQuestion_new] = useState(SelectAllQuestions);
    
    const [gameProgress,setGameProgress] = useState(1);
    const [bank,setBank] = useState(0);
    const [counter, setCounter] = useState(60);
    const [isFifty,setisFifty] = useState(false);
    const [isFiftyUsedOnce,setisFiftyUsedOnce] = useState(false);
    const [askTheHost,setaskTheHost] = useState(false);
    const [askHostUsedOnce,setaskHostUsedOnce] = useState(false);
    const [phoneaFriend,setphoneaFriend] = useState(false);
    const [phoneaFriendUsedOnce,setphoneaFriendUsedOnce] = useState(false);
    const [musicOnce,setMusicOnce] = useState(0);
    
    const [correct_ans, {stop}] = useSound(correct_Ans, {
        volume: 0.5,
       });
       const [beeped] = useSound(beep, {
        volume: 2,
       });
    
    //50/50 is only given one second after that it defaults back to original
    useEffect(() => {
        const timer = setTimeout(() => {
        setisFifty(false);
        }, 3000);
        return () => clearTimeout(timer);
        }, [isFifty]);
    //on mouse over button functionality
    const mouseOver = (event) =>{
        event.target.style.backgroundColor = 'orange';
        event.target.style.border = 'orange';
        beeped();
    }
    //on mouse out button functionality
    const mouseOut = (event) =>{
        event.target.style.backgroundColor = 'blue';
    }

    //some use ref hooks for the buttons
    const buttonA = useRef(null);
    const buttonB = useRef(null);
    const buttonC = useRef(null);
    const buttonD = useRef(null);

    //Responsible for setting up the timer if the timer is at 0 the game ends
    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            if(counter === 0){
                setGameProgress(0);
            }
            return () => {clearInterval(timer)};
            },[counter] );

    const setDigits = [100,200,300,500,1000,2000,4000,8000,16000,32000,64000,125000,250000,500000,1000000]
    
    const getAnswers = (ans,the_progress,event) => {
        
        //ui_click();
        console.log(ans);
        console.log(the_progress);
        
        if (ans === 'a' && ans === question_new[the_progress].ans){
            console.log('youve answered question a correctly')
            setQuestionNumber(the_progress+1);
            setBank(setDigits[(the_progress+1) -2]);
            setCounter(60);
            correct_ans();
            setMusicOnce(musicOnce+1);
            console.log(bank);
        }
        else if (ans === 'b' && ans === question_new[the_progress].ans){
            console.log('youve answered question b correctly')
            setQuestionNumber(the_progress+1);
            setBank(setDigits[(the_progress+1) -2]);
            setCounter(60);
            correct_ans();
            setMusicOnce(musicOnce+1);
            console.log(bank);
        }
        else if (ans === 'c' && ans === question_new[the_progress].ans){
            console.log('youve answered question c correctly')
            setQuestionNumber(the_progress+1);
            setBank(setDigits[(the_progress+1) -2]);
            setCounter(60);
            correct_ans();
            setMusicOnce(musicOnce+1);
            console.log(bank);
        }
        else if (ans === 'd' && ans === question_new[the_progress].ans){
            console.log('youve answered question d correctly')
            setQuestionNumber(the_progress+1);
            setBank(setDigits[(the_progress+1) -2]);
            setCounter(60);
            correct_ans();
            setMusicOnce(musicOnce+1);
            console.log(bank);
        }
        else{
            setGameProgress(0);
        }
        
}
    if(gameProgress === 0){
        stop();
        console.log('You were wrong');
    }

    else if(gameProgress === 1){
        
        if(!isFifty && !askTheHost && !phoneaFriend){
            
        return (
        <>
        <Button className={style.question1}><Questions prop={question_new} prop2={questionNumber} /></Button>
        <button ref={buttonA} style={{background: 'blue', color:'white' }} className={style.answer1} onMouseOver={(event) => {mouseOver(event)}} onMouseOut={(event) => {mouseOut(event)}} onClick={(event) => {getAnswers('a',questionNumber,event)} }><AnswersA  prop={question_new} prop2={questionNumber}></AnswersA></button>
        <button ref={buttonB} style={{background: 'blue', color:'white' }} className={style.answer2} onMouseOver={(event) => {mouseOver(event)}} onMouseOut={(event) => {mouseOut(event)}} onClick={(event) => {getAnswers('b',questionNumber,event)} }><AnswersB  prop={question_new} prop2={questionNumber}></AnswersB></button>
        <button ref={buttonC} style={{background: 'blue', color:'white' }} className={style.answer3} onMouseOver={(event) => {mouseOver(event)}} onMouseOut={(event) => {mouseOut(event)}} onClick={(event) => {getAnswers('c',questionNumber,event)} }><AnswersC  prop={question_new} prop2={questionNumber}></AnswersC></button>
        <button ref={buttonD} style={{background: 'blue', color:'white' }} className={style.answer4} onMouseOver={(event) => {mouseOver(event)}} onMouseOut={(event) => {mouseOut(event)}} onClick={(event) => {getAnswers('d',questionNumber,event)} }><AnswersD  prop={question_new} prop2={questionNumber}></AnswersD></button>
        <div className={style.sideBar}><TheSideBar prop={bank} prop2={questionNumber}/></div>,
        <div className={style.my_counter}>{counter}</div>,
        <Music prop={bank} prop2={musicOnce}/>
                {!isFiftyUsedOnce
                ?<div className={style.mybutton} onClick={() => {setisFifty(true);setisFiftyUsedOnce(true);}}><img src={fifty_Fifty} alt='Fifty Fifty'/></div>
                :console.log('IT\'TS WORKING')
                }
                {!askHostUsedOnce
                ?<div className={style.mybutton2} onClick={() => {setaskTheHost(true);setaskHostUsedOnce(true);}}><img src={Ask_host} alt='Ask the host'/></div>
                
                :console.log('IT\'TS WORKING')
                }
                {!phoneaFriendUsedOnce
                ?<div className={style.mybutton3} onClick={() => {setphoneaFriend(true);setphoneaFriendUsedOnce(true);}}><img src={Phone} alt='Phone a Friend'/></div>
                
                :console.log('IT\'TS WORKING')
                }
            
        </>
        )}
        else if(isFifty){
            //hit.current.play();

            if(question_new[questionNumber].option1 === question_new[questionNumber].correct  ){
                return (
                <>
                <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('a',questionNumber);} }className={style.answer1} color="info" ><AnswersA prop={question_new} prop2={questionNumber} /></button>,
                <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('b',questionNumber);} }className={style.answer2} color="info" ><AnswersB prop={question_new} prop2={questionNumber} /></button>
                </>
                )
            }
            else if(question_new[questionNumber].option2 === question_new[questionNumber].correct ){
                return (
                    <>
                    <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('b',questionNumber);} }className={style.answer2} color="info" ><AnswersA prop={question_new} prop2={questionNumber} /></button>,
                    <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('d',questionNumber);} }className={style.answer4} color="info" ><AnswersB prop={question_new} prop2={questionNumber} /></button>
                    </>
                    )
            }
            else if(question_new[questionNumber].option3 === question_new[questionNumber].correct ){
                return (
                    <>
                    <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('a',questionNumber);} } className={style.answer1} color="info" ><AnswersA prop={question_new} prop2={questionNumber} /></button>,
                    <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('c',questionNumber);} } className={style.answer3} color="info" ><AnswersC prop={question_new} prop2={questionNumber} /></button>
                    
                    </>
                    )
            }
            else if(question_new[questionNumber].option4 === question_new[questionNumber].correct ){
                return (
                    <>
                    <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('d',questionNumber);} }className={style.answer2} color="info" ><AnswersD prop={question_new} prop2={questionNumber} /></button>,
                    <button style={{background: 'blue', color:'white' }} onClick={() => {getAnswers('b',questionNumber);} }className={style.answer4} color="info" ><AnswersB prop={question_new} prop2={questionNumber} /></button>
                    </>
                    )
            }
        }
        if(askTheHost){
            //hit.current.play();
            const timer2 = setTimeout(() => {
                setaskTheHost(false);
                
                
            }, 3000);
            
            return (
            <>
            <div className={style.theHost}><img src={Ask_host}></img> The Host Says The Answer Is: {question_new[questionNumber].host}</div>
            </>
            )
        }
        if(phoneaFriend){
            //hit.current.play();
            const timer2 = setTimeout(() => {
                setphoneaFriend(false);
                
                
            }, 3000);
            
            return (
            <>
            <div className={style.theHost}><img src={Phone}></img> Your Friend Say's The Answer Is: {question_new[questionNumber].host}</div>
            </>
            )
        }
            }
}

export default Logic;