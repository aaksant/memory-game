export default function RoundCounter({ currentRound, totalRounds }) {
  return (
    <p className="mb-4 text-lg font-semibold">
      {currentRound}/{totalRounds}
    </p>
  );
}
