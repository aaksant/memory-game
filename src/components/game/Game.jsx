import Cards from './Cards';
import useFetchCharacters from '../../hooks/useFetchCharacters';
import Loading from './Loading';
import RoundCounter from './RoundCounter';
import Scoreboard from './Scoreboard';

export default function Game({
  level,
  currentRound,
  score,
  bestScore,
  handleCardClick
}) {
  const { characters, isLoading } = useFetchCharacters(level.rounds);

  const shuffle = arr => {
    return arr
      .map(item => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  const shownCharacters = shuffle(characters).slice(0, level.numberOfCards);

  return (
    <div className="flex flex-col items-center justify-center">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Scoreboard score={score} bestScore={bestScore} />
          <RoundCounter
            currentRound={currentRound}
            totalRounds={level.rounds}
          />
          <Cards
            characters={shownCharacters}
            handleCardClick={handleCardClick}
          />
        </>
      )}
    </div>
  );
}
