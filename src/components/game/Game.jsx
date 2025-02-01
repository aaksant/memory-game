import Cards from './Cards';
import useFetchCharacters from '../../hooks/useFetchCharacters';
import Loading from './Loading';

export default function Game({ level }) {
  const { characters, isLoading } = useFetchCharacters();
  const shownCharacters = characters.slice(0, level.numberOfCards);

  return (
    <div className="flex flex-col items-center justify-center">
      {isLoading && <Loading />}
      <Cards characters={shownCharacters} />
    </div>
  );
}
