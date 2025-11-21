import { Route, Routes } from "react-router-dom";
import { PodcastProvider } from "./context/PodcastContext.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";

/**
 * Main app component
 *
 * This component:
 * - Retrieves podcast data and UI state from PodcastContext
 * - Applies pagination using the usePagination hook
 * - Renders search, filters and paginated podcast grid
 *
 * @returns {JSX.Element} The rendered application UI
 */
export default function App() {
  return (
    <>
      <Header />
      <PodcastProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PodcastProvider>
    </>
  );
}
