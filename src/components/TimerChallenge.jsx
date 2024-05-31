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
        
        dialogRef.current.open();
    }
    function handleReset(){
        setRemainingTime(targetTime * 1000);
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
            <ResultModal ref={dialogRef} targetTime={targetTime} remainingTime={remainingTime} onReset={handleReset} />
            { }
            <section className="challenge">
                <h2>{title}</h2>

                <p className="challenge-time">
                    {targetTime} seconde{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? "Arrêter" : "Démarrer"}</button>
                </p>
                
                <p className={timerIsActive ? "active" : ""}>{timerIsActive ? "Le temps passe..." : "Minuteur inactif"}</p>
            </section>
        </>
    )
}
export default TimerChallenge