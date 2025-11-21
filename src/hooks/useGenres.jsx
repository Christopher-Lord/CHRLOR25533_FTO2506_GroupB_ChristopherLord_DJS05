import { useEffect, useState } from "react";

const GENRE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function useGenres() {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadGenres() {
      try {
        setIsLoading(true);

        const results = await Promise.all(
          GENRE_IDS.map((id) =>
            fetch(`https://podcast-api.netlify.app/genre/${id}`).then(
              (response) => {
                if (!response.ok) throw new Error(`Genre ${id} not found`);
                return response.json();
              },
            ),
          ),
        );

        setGenres(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadGenres();
  }, []);

  return { genres, isLoading, error };
}
