import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePodcast } from "../api/fetchData.jsx";
import Loading from "../components/Loading.jsx";
import Error from "../components/Error.jsx";
import PodcastDetails from "../components/PodcastDetails.jsx";

export default function ShowDetails() {
  const { id } = useParams();

  const [podcast, setPodcast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSinglePodcast(id, setPodcast, setError, setLoading);
  }, []);

  useEffect(() => {
    const mainElement = document.querySelector("main");
    if (!mainElement) return;

    if (loading || error) {
      mainElement.style.height = "100vh";
    } else {
      mainElement.style.height = "";
    }
  }, [loading, error]);

  return (
    <>
      {loading && <Loading message="Loading Podcast ⚙️" />}

      {error && (
        <Error message={`Error occurred while fetching podcast: ${error}`} />
      )}

      {!loading && !error && <PodcastDetails podcast={podcast} />}
    </>
  );
}
