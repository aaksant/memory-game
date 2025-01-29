// TODO: Implement error handling in useFetchCharacters

import Cards from './Cards';
import useFetchCharacters from '../../hooks/useFetchCharacters';

export default function Game() {
  const { characters, isLoading } = useFetchCharacters();
  
  return (
    <div>
      {isLoading && <p>loading...</p>}
      <Cards characters={characters} />
    </div>
  );
}
