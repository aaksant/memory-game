import LevelButtons from './LevelButtons';
import Records from './Records';
import levels from '../../levels';

export default function Home({ bestScores, handleStartGame }) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Records levels={levels} bestScores={bestScores} />
      <h1 className="mb-4 text-3xl font-bold">Memory Game</h1>
      <h2 className="text-md mb-10">Select your level</h2>
      <LevelButtons levels={levels} handleStartGame={handleStartGame} />
    </div>
  );
}
