import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetchCharacters(
  url = 'https://api.jikan.moe/v4/top/characters',
) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const shuffle = (arr) => {
      return arr
        .map((item) => ({ item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ item }) => item);
    };

    const fetchCharacters = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(url);

        const characters = shuffle(
          data.map(({ name, images }) => ({
            name,
            image_url: images?.jpg?.image_url,
          })),
        );

        setCharacters(characters);
      } catch (error) {
        alert(`${error.response}: Could not fetch data.`);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [url]);

  return { characters, isLoading, isError };
}
