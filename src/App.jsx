import { useState } from "react";
import Navbar from "./components/Nabar";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState("light");

  const onSearch = async (searchQuery) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `https://brightdata-amazon-scraper-backend.onrender.com/api/scrape?search_term=${searchQuery}`
      );
      setData(response.data);
      setLoading(false);

      // Save search history to localStorage
      let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
      history = [...new Set([searchQuery, ...history])]; // Ensure no duplicates
      localStorage.setItem("searchHistory", JSON.stringify(history));
    } catch (err) {
      setError("Failed to load data. Please try again later.");
      setLoading(false);
      console.error(err)
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-slate-900 text-white" : "bg-slate-100"}`}>
      <Navbar onSearch={onSearch} toggleTheme={toggleTheme} theme={theme} />
      <div className="flex">
        <MainContent data={data} loading={loading} />
        <Sidebar onSearchHistoryClick={onSearch} />
      </div>
      {error && <ErrorPage message={error} />}
      <Footer />
    </div>
  );
}

export default App;
