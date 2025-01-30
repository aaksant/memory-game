// TODO: Implement error handling in useFetchCharacters

import Cards from './Cards';
import useFetchCharacters from '../../hooks/useFetchCharacters';
import Loading from './Loading';

export default function Game() {
  const { characters, isLoading } = useFetchCharacters();

  return (
    <div>
      {isLoading && <Loading />}
      <Cards characters={characters} />
    </div>
  );
}
