import Cards from './Cards';
import useFetchCharacters from '../../hooks/useFetchCharacters';
import Loading from './Loading';

export default function Game({ level, handleCardClick }) {
  const { characters, isLoading } = useFetchCharacters();

  const shuffle = arr => {
    return arr
      .map(item => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  };

  const shownCharacters = shuffle(characters).slice(0, level.numberOfCards);

  return (
    <div className="flex flex-col items-center justify-center">
      {isLoading && <Loading />}
      <Cards characters={shownCharacters} handleCardClick={handleCardClick} />
    </div>
  );
}
