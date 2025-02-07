import LevelButtons from './LevelButtons';
import Records from './Records';
import levels from '../../levels';

export default function Home({ bestScores, handleStartGame }) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">Memory Game</h1>
      <Records levels={levels} bestScores={bestScores} />
      <h2 className="text-md mb-4 font-medium sm:mb-8">Select your level</h2>
      <LevelButtons levels={levels} handleStartGame={handleStartGame} />
    </div>
  );
}
