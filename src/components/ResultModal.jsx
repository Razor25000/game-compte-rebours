import { forwardRef,useImperativeHandle,useRef } from "react";

const ResultModal = forwardRef(({ result, targetTime }, ref) => {
  const timeDifference = targetTime - result;
  const dialogRef = useRef();   
  useImperativeHandle(
      ref,
    () => ({
      open: () => {
        dialogRef.current.showModal();
      }
    })
  );  

  return (
    <dialog className="result-modal" ref={dialogRef}>
      <h2>You won!</h2>
      <p>Your time was {result} seconds</p>
      <p>The target time was {targetTime} seconds</p>
      <p>You stopped<strong> {isNaN(timeDifference) ? 0 : timeDifference} seconds early</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
