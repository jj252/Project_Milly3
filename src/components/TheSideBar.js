import {useRef,useEffect} from 'react';
import style from '../shared/StudentList.module.css';



const TheSideBar = (cash_progress) =>{
    
    let the_Question_number = cash_progress.prop2;
    
    
    useEffect(() => {
        setStyle(cash_progress.prop);
        
        }, [the_Question_number]);

    const goingFor100 = useRef(null);
    const goingFor200 = useRef(null);
    const goingFor300 = useRef(null);
    const goingFor500 = useRef(null);
    const goingFor1000 = useRef(null);
    const goingFor2000 = useRef(null);
    const goingFor4000 = useRef(null);
    const goingFor8000 = useRef(null);
    const goingFor16000 = useRef(null);
    const goingFor32000 = useRef(null);
    const goingFor64000 = useRef(null);
    const goingFor125000 = useRef(null);
    const goingFor250000 = useRef(null);
    const goingFor500000 = useRef(null);
    const goingFor1000000 = useRef(null);
    
    

    
    const setStyle = (progress3) =>{
        
        
        if (progress3 === 0){
            goingFor100.current.style.background = 'yellow';
            goingFor100.current.style.color = 'black';
            }
        
        if (progress3 === 100){
        goingFor200.current.style.background = 'yellow';
        goingFor200.current.style.color = 'black';
        goingFor100.current.style.background = 'transparent';
        goingFor100.current.style.color = 'white';
        }
        else if(progress3 === 200){
        goingFor300.current.style.background = 'yellow';
        goingFor300.current.style.color = 'black';
        goingFor200.current.style.background = 'transparent';
        goingFor200.current.style.color = 'white';
        
        }
        else if(progress3 === 300){
        goingFor500.current.style.background = 'yellow';
        goingFor500.current.style.color = 'black';
        goingFor300.current.style.background = 'transparent';
        goingFor300.current.style.color = 'white';
        }
        else if(progress3 === 500){
        goingFor1000.current.style.background = 'yellow';
        goingFor1000.current.style.color = 'black';
        goingFor500.current.style.background = 'transparent';
        goingFor500.current.style.color = 'white';
        }
        else if(progress3 === 1000){
        goingFor2000.current.style.background = 'yellow';
        goingFor2000.current.style.color = 'black';
        goingFor1000.current.style.background = 'transparent';
        goingFor1000.current.style.color = 'orange';
        }
        else if(progress3 === 2000){
        goingFor4000.current.style.background = 'yellow';
        goingFor4000.current.style.color = 'black';
        goingFor2000.current.style.background = 'transparent';
        goingFor2000.current.style.color = 'white';
        }

        else if(progress3 === 4000){
            goingFor8000.current.style.background = 'yellow';
            goingFor8000.current.style.color = 'black';
            goingFor4000.current.style.background = 'transparent';
            goingFor4000.current.style.color = 'white';
            }
            else if(progress3 === 8000){
            goingFor16000.current.style.background = 'yellow';
            goingFor16000.current.style.color = 'black';
            goingFor8000.current.style.background = 'transparent';
            goingFor8000.current.style.color = 'white';
            }
            else if(progress3 === 16000){
            goingFor32000.current.style.background = 'yellow';
            goingFor32000.current.style.color = 'black';
            goingFor16000.current.style.background = 'transparent';
            goingFor16000.current.style.color = 'white';
            }
            else if(progress3 === 32000){
            goingFor64000.current.style.background = 'yellow';
            goingFor64000.current.style.color = 'black';
            goingFor32000.current.style.background = 'transparent';
            goingFor32000.current.style.color = 'orange';
            }
            else if(progress3 === 64000){
            goingFor125000.current.style.background = 'yellow';
            goingFor125000.current.style.color = 'black';
            goingFor64000.current.style.background = 'transparent';
            goingFor64000.current.style.color = 'white';
            }
            else if(progress3 === 125000){
            goingFor250000.current.style.background = 'yellow';
            goingFor250000.current.style.color = 'black';
            goingFor125000.current.style.background = 'transparent';
            goingFor125000.current.style.color = 'white';
            }
            else if(progress3 === 250000){
            goingFor500000.current.style.background = 'yellow';
            goingFor500000.current.style.color = 'black';
            goingFor250000.current.style.background = 'transparent';
            goingFor250000.current.style.color = 'white';
            }
            else if(progress3 === 500000){
            goingFor1000000.current.style.background = 'yellow';
            goingFor1000000.current.style.color = 'black';
            goingFor500000.current.style.background = 'transparent';
            goingFor500000.current.style.color = 'white';
            }
    }
    
    return (
        <>
          <div className={style.sideBar2}>       
            <div ref={goingFor1000000} className={style.sideBar_size} style={{background: 'transparent', color:'orange'}}>15 $1,000,000</div>
            <div ref={goingFor500000} className={style.sideBar_size} style={{background: 'transparent', color:'white'}}>14 $500,000</div>
            <div ref={goingFor250000} className={style.sideBar_size} style={{background: 'transparent', color:'white'}}>13 $250,000</div>
            <div ref={goingFor125000} className={style.sideBar_size} style={{background: 'transparent', color:'white'}}>12 $125,000</div>
            <div ref={goingFor64000} className={style.sideBar_size} style={{background: 'transparent', color:'white'}}>11 $64,000</div>
            <div ref={goingFor32000} className={style.sideBar_size} style={{background: 'transparent', color:'orange'}}>10 $32,000</div>
            <div ref={goingFor16000} className={style.sideBar_size} style={{background: 'transparent', color:'white'}}>9 $16,000</div>
            <div ref={goingFor8000} className={style.sideBar_size} style={{background: 'transparent', color:'white'}}>8 $8,000</div>
            <div ref={goingFor4000} className={style.sideBar_size} style={{background: 'transparent', color:'white'}}>7 $4,000</div>
            <div ref={goingFor2000} className={style.sideBar_size} style={{background: 'transparent', color:'white'}}>6 $2,000</div>
            <div ref={goingFor1000} className={style.sideBar_size} style={{background: 'transparent', color:'orange'}}>5 $1,000</div>
            <div ref={goingFor500} className={style.sideBar_size} style={{background: 'transparent', color:'white'}}>4 $500</div>
            <div ref={goingFor300} className={style.sideBar_size} style={{background: 'transparent', color:'white'}}>3 $300</div>
            <div  ref={goingFor200} className={style.sideBar_size} style={{background: 'transparent', color:'white'}}>2 $200</div>
            <div ref={goingFor100} className={style.sideBar_size} style={{background: 'transparent', color:'white',}}>1 $100</div>
            </div> 
            
            
            
            
        </>
        
    )
    
}

export default TheSideBar;