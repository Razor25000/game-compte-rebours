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
  
  return (
    <dialog className="result-modal" ref={dialogRef}>
      <h2>{userLost ? "You lost!" : "You won!"}</h2>
      
      <p>The target time was {targetTime} seconds</p>
      <p>You stopped<strong> {formattedRemainingTime} seconds early</strong></p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
