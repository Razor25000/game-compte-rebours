import { forwardRef } from "react";

const ResultModal = forwardRef(({ result, targetTime }, dialogRef) => {
  const timeDifference = targetTime - result;

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
