import LevelButtons from './LevelButtons';

export default function Home({ handleStartGame }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-4 text-3xl font-bold">Memory Game</h1>
      <h2 className="text-md mb-10">Select your level</h2>
      <LevelButtons handleStartGame={handleStartGame} />
    </div>
  );
}
