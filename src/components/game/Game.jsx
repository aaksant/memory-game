import Cards from './Cards';
import useFetchCharacters from '../../hooks/useFetchCharacters';
import Loading from './Loading';
import RoundCounter from './RoundCounter';

export default function Game({ level, currentRound, handleCardClick }) {
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
