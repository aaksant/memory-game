import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Game from './components/game/Game';
import Home from './components/home/Home';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentRound, setCurrentRound] = useState(1);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleStartGame = level => {
    setIsPlaying(true);
    setSelectedLevel(level);
  };

  const recordClickedCard = cardId => {
    if (clickedCards.includes(cardId)) {
      reset();
    } else {
      setClickedCards([...clickedCards, cardId]);
      setScore(score + 1);
      setBestScore(bestScore + 1);
      updateRound();
    }
  };

  const updateRound = () => {
    if (currentRound === selectedLevel.rounds - 1) {
      reset();
    } else {
      setCurrentRound(currentRound + 1);
    }
  };

  const reset = () => {
    setIsPlaying(false);
    setSelectedLevel(null);
    setClickedCards([]);
    setCurrentRound(1);
    setScore(0);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-4">
      {!isPlaying ? (
        <Home handleStartGame={handleStartGame} />
      ) : (
        <Game
          level={selectedLevel}
          currentRound={currentRound}
          score={score}
          bestScore={bestScore}
          handleCardClick={recordClickedCard}
        />
      )}
      <Toaster />
    </div>
  );
}
