import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Game from './components/game/Game';
import Home from './components/home/Home';

export default function App() {
  const [gameState, setGameState] = useState({
    isPlaying: false,
    level: null
  });
  const [clickedCards, setClickedCards] = useState([]);
  const [currentRound, setCurrentRound] = useState(1);

  const handleStartGame = level => {
    setGameState({
      isPlaying: true,
      level: level
    });
  };

  const recordClickedCard = cardId => {
    if (clickedCards.includes(cardId)) {
      reset();
    } else {
      setClickedCards([...clickedCards, cardId]);
      updateRound();
    }
  };

  const updateRound = () => {
    if (currentRound === gameState.level.rounds - 1) {
      reset();
    } else {
      setCurrentRound(currentRound + 1);
    }
  };

  const reset = () => {
    setGameState({
      isPlaying: false,
      level: null
    });
    setCurrentRound(1);
    setClickedCards([]);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-4">
      {!gameState.isPlaying ? (
        <Home handleStartGame={handleStartGame} />
      ) : (
        <Game
          level={gameState.level}
          currentRound={currentRound}
          handleCardClick={recordClickedCard}
        />
      )}
      <Toaster />
    </div>
  );
}
