import { useRef } from "react";
import { useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timerRef = useRef();
    const dialogRef = useRef();
    function handleStart() {
        timerRef.current = setTimeout(() => {
            setTimerExpired(true);
            dialogRef.current.showModal();
        }, targetTime * 1000);
        setTimerStarted(true);
    }
    function handleStop() {
        clearTimeout(timerRef.current);


    }
    return (
        <>
            <ResultModal ref={dialogRef} targetTime={targetTime} result="lost" />
            {}
            <section className="challenge">
                <h2>{title}</h2>

                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop" : "Start"}</button>
                </p>
                <p className={timerStarted ? "active" : ""}>{timerStarted ? "Time is Running..." : "Timer inactive"}</p>
            </section>
        </>
    )
}
export default TimerChallenge