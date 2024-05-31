import { forwardRef,useImperativeHandle,useRef, } from "react";

const ResultModal = forwardRef(({targetTime, remainingTime, onReset}, ref) => {

  const dialogRef = useRef();   
  useImperativeHandle(
      ref,
    () => ({
      open: () => {
        dialogRef.current.showModal();
      }
    })
  ); 
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime*1000))*100);
  
  return (
    <dialog className="result-modal" ref={dialogRef} onClose={onReset}>
      {userLost && <h2>You lost!</h2>}
      {!userLost && <h2>Your score is {score}</h2>}
      {userLost && <p>The target time was {targetTime} seconds</p>}
      <p>The target time was {targetTime} seconds</p>
      <p>You stopped<strong> {formattedRemainingTime} seconds early</strong></p>
      
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
