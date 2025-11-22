export async function fetchSinglePodcast(id, setPodcast, setError, setLoading) {
  try {
    setLoading(true);
    setError(null);

    const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch podcast. Status: ${response.status}`);
    }

    const data = await response.json();
    setPodcast(data);
  } catch (error) {
    setError(error.message || "Unknown error occurred");
  } finally {
    setLoading(false);
  }
}
