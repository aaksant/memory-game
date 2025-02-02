import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function useFetchCharacters(rounds) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorData, setErrorData] = useState({
    isError: false,
    message: null
  });
  const isToastShownRef = useRef(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const url = 'https://api.jikan.moe/v4/top/characters';
        //  Add aditional chracters too make the game harder
        const additionalCharacters = 5;
        const response = await axios.get(url);

        // Response structure might be change
        if (!response.data?.data) {
          throw new Error('Invalid response format from endpoint');
        }

        const characters = response.data.data.map(
          ({ mal_id, name, images }) => {
            if (!mal_id || !name || !images?.jpg?.image_url) {
              throw new Error('Missing required field');
            }

            return { mal_id, name, image_url: images.jpg.image_url };
          }
        );

        setCharacters(characters.slice(0, rounds + additionalCharacters));
      } catch (error) {
        let errorMessage = 'An unexpected error occured';

        if (error.response) {
          errorMessage = `${error.response.status} ${error.response.statusText}`;
        } else if (error.request) {
          errorMessage = 'No response received';
        } else {
          errorMessage = error.message;
        }

        if (!isToastShownRef.current) {
          toast.error(errorMessage);
          isToastShownRef.current = true;
        }

        setErrorData({ isError: true, message: errorMessage });
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [rounds]);

  return { characters, isLoading, errorData };
}
