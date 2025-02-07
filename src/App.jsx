import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Game from './components/game/Game';
import Home from './components/home/Home';
import GameOverModal from './components/modals/GameOverModal';
import LevelCompleteModal from './components/modals/LevelCompleteModal';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentRound, setCurrentRound] = useState(1);
  const [score, setScore] = useState(0);
  const [bestScores, setBestScores] = useLocalStorage('bestScores', {});
  const [isGameOver, setIsGameOver] = useState(false);
  const [isLevelComplete, setIsLevelComplete] = useState(false);

  const handleStartGame = level => {
    setIsPlaying(true);
    setSelectedLevel(level);
  };

  const recordClickedCard = cardId => {
    if (clickedCards.includes(cardId)) {
      setIsGameOver(true);
    } else {
      setClickedCards([...clickedCards, cardId]);
      setScore(score + 1);
      updateBestScore(score + 1);
      updateRound();
    }
  };

  const updateBestScore = newScore => {
    setBestScores(prevBestScores => {
      const currentBestScore = prevBestScores[selectedLevel.name] || 0;

      if (newScore > currentBestScore) {
        return { ...prevBestScores, [selectedLevel.name]: newScore };
      }

      return prevBestScores;
    });
  };

  const updateRound = () => {
    if (currentRound < selectedLevel.rounds) {
      setCurrentRound(currentRound + 1);
    } else {
      setIsLevelComplete(true);
    }
  };

  const reset = () => {
    setIsPlaying(false);
    setSelectedLevel(null);
    setClickedCards([]);
    setCurrentRound(1);
    setScore(0);
    setIsGameOver(false);
    setIsLevelComplete(false);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-4">
      {!isPlaying ? (
        <Home bestScores={bestScores} handleStartGame={handleStartGame} />
      ) : (
        <div
          className={
            isGameOver || isLevelComplete ? 'pointer-events-none blur-sm' : ''
          }
        >
          <Game
            level={selectedLevel}
            currentRound={currentRound}
            score={score}
            bestScore={bestScores[selectedLevel.name] || 0}
            handleCardClick={recordClickedCard}
          />
        </div>
      )}
      {isGameOver && <GameOverModal score={score} handleRestart={reset} />}
      {isLevelComplete && <LevelCompleteModal handleRestart={reset} />}
      <Toaster />
    </div>
  );
}
