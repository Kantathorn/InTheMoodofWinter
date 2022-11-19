import React, { useState,useEffect } from 'react'
import Clock from '../Utils/Clock'

function Timer() {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMins, setTimerMins] = useState();
    const [timerSecs, setTimerSecs] = useState();

    let interval;
    const startTimer=()=>{
        const countdownDate = new Date("2022-12-21T16:00:00+07:00").getTime();
        interval=setInterval(()=>{
            const now = new Date().getTime();
            const distance = countdownDate - now;
            
            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / (1000));

            if(distance<0){
                //stop
                clearInterval(interval.current);
            }
            else {
                //update
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMins(minutes);
                setTimerSecs(seconds);
            }
        })
    }

    useEffect(()=>{
        startTimer();
    })

    return (
        <div>
            <Clock 
                timerDays={timerDays}
                timerHours={timerHours}
                timerMins={timerMins}
                timerSecs={timerSecs}
            />
        </div>
    )
}

export default Timer