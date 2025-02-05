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
  const [bestScores, setBestScores] = useState({});

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
      updateBestScore(score + 1);
      updateRound();
    }
  };

  const updateBestScore = newScore => {
    setBestScores(prevBestScores => {
      const currentBestScore = prevBestScores[selectedLevel.text] || 0;

      if (newScore > currentBestScore) {
        return { ...prevBestScores, [selectedLevel.text]: newScore };
      }

      return prevBestScores;
    });
  };

  const updateRound = () => {
    if (currentRound < selectedLevel.rounds) {
      setCurrentRound(currentRound + 1);
    } else {
      reset();
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
          bestScore={bestScores[selectedLevel.text] || 0}
          handleCardClick={recordClickedCard}
        />
      )}
      <Toaster />
    </div>
  );
}
