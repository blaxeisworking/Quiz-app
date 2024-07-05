import React, { useContext } from 'react';
import { GameContext } from './context/GameContext';
import LoadingScreen from './components/LoadingScreen';
import Game from './components/Game';
import SelectionScreen from './components/SelectionScreen';

function App() {
  const { loading, category } = useContext(GameContext);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen />
      ) : category ? (
        <Game />
      ) : (
        <SelectionScreen />
      )}
    </div>
  );
}

export default App;