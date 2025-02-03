export default function Scoreboard({ score, bestScore }) {
  return (
    <div className="text-center">
      <p className="text-xl font-bold">Score: {score}</p>
      <p className="text-xl font-bold">Best score: {bestScore}</p>
    </div>
  );
}
