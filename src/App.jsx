import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Game from './components/game/Game';
import Home from './components/home/Home';

export default function App() {
  const [gameState, setGameState] = useState({
    isPlaying: false,
    level: null
  });

  const handleStartGame = level => {
    setGameState({
      isPlaying: true,
      level: level
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-4">
      {!gameState.isPlaying ? (
        <Home handleStartGame={handleStartGame} />
      ) : (
        <Game level={gameState.level} />
      )}
      <Toaster />
    </div>
  );
}
