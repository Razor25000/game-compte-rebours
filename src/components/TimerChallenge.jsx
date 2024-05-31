import { useRef } from "react";
import { useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

    const timerRef = useRef();
    const dialogRef = useRef();

    const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000;
    if (remainingTime <= 0) {
        clearInterval(timerRef.current);
        setRemainingTime(targetTime * 1000);
        dialogRef.current.open();
    }

    function handleStart() {
        timerRef.current = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 10);
        }, 10);

    }
    function handleStop() {
        dialogRef.current.open();
        clearInterval(timerRef.current);


    }
    return (
        <>
            <ResultModal ref={dialogRef} targetTime={targetTime} result="lost" />
            { }
            <section className="challenge">
                <h2>{title}</h2>

                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? "Stop" : "Start"}</button>
                </p>
                <p className={timerIsActive ? "active" : ""}>{timerIsActive ? "Time is Running..." : "Timer inactive"}</p>
            </section>
        </>
    )
}
export default TimerChallenge