import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getSelectedAnswers } from "../../../store/userSlice";
import { useDispatch } from 'react-redux';



import './style.css';

const Timer = () => {
    const [timer, setTimer] = useState(300);
    const [timeUp, setTimeUp] = useState(false);
    let countdown;
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
  
      return () => {
        clearInterval(countdown);
      };
    }, []);
  
    useEffect(() => {
      if (timer === 0) {
        clearInterval(countdown);
        setTimeUp(true);
        dispatch(getSelectedAnswers());

        Navigate('/result')

        console.log('Timer has completed!');
      }
    }, [timer]);

    return(
        <div>
            <div className="timer-container">
            {
              timeUp?
               <p className="timer">Time's Up</p> :
               <p className="timer">Time Left : {formattedMinutes} : {formattedSeconds}  </p>                
             }
        </div>
        
      </div>
  
    )
}

export default Timer;