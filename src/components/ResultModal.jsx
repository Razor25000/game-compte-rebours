import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(({ targetTime, remainingTime, onReset }, ref) => {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current.showModal();
    }
  }));
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  
  return (
    <dialog className="result-modal" ref={dialogRef} onClose={onReset}>
      {userLost && <h2>Vous avez perdu !</h2>}
      {!userLost && <h2>Votre score est {score}</h2>}
      {userLost && <p>Le temps cible était de {targetTime} secondes</p>}
      
      <p>Vous vous êtes arrêté <strong>{isNaN(formattedRemainingTime) ? 0 : formattedRemainingTime} secondes trop tôt</strong></p>
      
      <form method="dialog" onSubmit={onReset}>
        <button>Fermer</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
