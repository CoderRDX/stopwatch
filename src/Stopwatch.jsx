import React from "react";
import { useEffect,useState } from "react";

export default function Stopwatch(){
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    let timer = null;

    useEffect(() => {
        if(isRunning){
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1000)
            },1000);

        }else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isRunning]);

    const timeFormat = (time) => {
        const seconds = (`0${Math.floor((time/1000) % 60)}`). slice(-2);
        const minutes = (`${Math.floor((time/60000) % 60)}`). slice(-2);
        return`${minutes}:${seconds}`;
    }


    return(
        <div>
            <h1>Stopwatch</h1>
            <p>Time: {timeFormat(time)}</p>
            <div>
                <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Stop": "Start"}</button>
                <button onClick={() => {
                    setIsRunning(false);
                    setTime(0);
                }
                }>Reset</button>
            </div>
        </div>
    );

}