import { useState } from "react";
import { FaTwitter, FaGithub, FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ onSearch, toggleTheme, theme }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <nav className="bg-slate-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-lg font-bold">Alex's Amazon Scraper</div>

      {/* Search Bar */}
      <div className="flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search anything directly from amazon..."
          className="px-4 py-2 text-black rounded-md"
        />
        <button
          onClick={handleSearch}
          className="bg-cyan-600 text-white px-4 py-2 rounded-md ml-2 hover:bg-cyan-500"
        >
          Search
        </button>
      </div>

      {/* Right-Side Buttons */}
      <div className="flex space-x-4">
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-cyan-500" />
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-cyan-500" />
        </a>
        <button onClick={toggleTheme} className="hover:text-cyan-500">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
