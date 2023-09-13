import {  Button } from 'reactstrap';
import style from '../shared/StudentList.module.css';
import { useState, useEffect } from 'react';
import { SelectAllQuestions } from './Navigation';
import Questions from '../components/Questions';
import { AnswersA,AnswersB,AnswersC,AnswersD } from "./Answers";
import TheSideBar from './TheSideBar';
import Music from './Music';
import useSound from 'use-sound';
import correct_Ans from '../sounds/correct answer.mp3';

const Logic = () =>{
    console.log('im in');
    const [questionNumber,setQuestionNumber] = useState(1);
    const [question_new,setQuestion_new] = useState(SelectAllQuestions);
    const [incorrect,setIncorrect] = useState(false);
    const [bank,setBank] = useState(0);
    const [counter, setCounter] = useState(60);

    const [correct_ans, {stop}] = useSound(correct_Ans, {
        volume: 0.5,
       });

    //Responsible for setting up the timer if the timer is at 0 the game ends
    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            if(counter === 0){
                setIncorrect(0);
            }
            return () => {clearInterval(timer)};
            },[counter] );

    const setDigits = [100,200,300,500,1000,2000,4000,8000,16000,32000,64000,125000,250000,500000,1000000]
    
    const getAnswers = (ans,the_progress,event) => {
        console.log('im in');
        //ui_click();
        console.log(ans);
        console.log(the_progress);
        
        if (ans === 'a' && ans === question_new[the_progress].ans){
            console.log('youve answered question a correctly')
            setQuestionNumber(the_progress+1);
            setBank(setDigits[(the_progress+1) -2]);
            setCounter(60);
            correct_ans();
            console.log(bank);
        }
        else if (ans === 'b' && ans === question_new[the_progress].ans){
            console.log('youve answered question b correctly')
            setQuestionNumber(the_progress+1);
            setBank(setDigits[(the_progress+1) -2]);
            setCounter(60);
            correct_ans();
            console.log(bank);
        }
        else if (ans === 'c' && ans === question_new[the_progress].ans){
            console.log('youve answered question c correctly')
            setQuestionNumber(the_progress+1);
            setBank(setDigits[(the_progress+1) -2]);
            setCounter(60);
            correct_ans();
            console.log(bank);
        }
        else if (ans === 'd' && ans === question_new[the_progress].ans){
            console.log('youve answered question d correctly')
            setQuestionNumber(the_progress+1);
            setBank(setDigits[(the_progress+1) -2]);
            setCounter(60);
            correct_ans();
            console.log(bank);
        }
        else{
            setIncorrect(true);
        }
        
}
    if(incorrect === false){
    return (
    <>
    <Button className={style.question1}><Questions prop={question_new} prop2={questionNumber} /></Button>
    <button className={style.answer1} onClick={(event) => {getAnswers('a',questionNumber,event)} }><AnswersA  prop={question_new} prop2={questionNumber}></AnswersA></button>
    <button className={style.answer2} onClick={(event) => {getAnswers('b',questionNumber,event)} }><AnswersB  prop={question_new} prop2={questionNumber}></AnswersB></button>
    <button className={style.answer3} onClick={(event) => {getAnswers('c',questionNumber,event)} }><AnswersC  prop={question_new} prop2={questionNumber}></AnswersC></button>
    <button className={style.answer4} onClick={(event) => {getAnswers('d',questionNumber,event)} }><AnswersD  prop={question_new} prop2={questionNumber}></AnswersD></button>
    <div className={style.sideBar}><TheSideBar prop={bank} prop2={questionNumber}/></div>,
    <div className={style.my_counter}>{counter}</div>,
    <Music prop={bank}/>
    </>
    
    )
    }
    else if(incorrect === true){
        console.log('You were wrong');
    }
}

export default Logic;