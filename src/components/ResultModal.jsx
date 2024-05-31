const ResultModal = ({result,targetTime}) => {
  return (
    <dialog className="result-modal">
        <h2>You won!</h2>
        <p>Your time was {result} seconds</p>
        <p>The target time was {targetTime} seconds</p>
        <p>You stopped<strong> X seconds early</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
  )
}
export default ResultModal;
