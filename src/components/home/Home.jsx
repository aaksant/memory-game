import LevelButtons from './LevelButtons';

export default function Home({ handleStartGame }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-8 text-3xl font-bold">Memory Game</h1>
      <LevelButtons handleStartGame={handleStartGame} />
    </div>
  );
}
