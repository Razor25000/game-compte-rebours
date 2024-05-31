
import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
 
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Facile" targetTime={1} />
        <TimerChallenge title="Moyen" targetTime={5} />
        <TimerChallenge title="Difficile" targetTime={10} />
        <TimerChallenge title="Pro" targetTime={15} />

      </div>
    </>
  );
}

export default App;
