import { useRef } from "react";
import { useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timerRef = useRef();
    function handleStart() {
        setTimerStarted(true);
        timerRef.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
    }
    function handleStop() {
        clearTimeout(timerRef.current);


    }
    return (
        <>
            {timerExpired && <ResultModal targetTime={targetTime} result="lost" />}
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