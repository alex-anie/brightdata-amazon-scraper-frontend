import { FaTwitter, FaGithub, FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className=" bg-slate-800 text-white p-4">
        <div className="w-[80%] mx-auto flex justify-between items-center">
            {/* Logo */}
      <div className="text-lg font-bold">Alex's Amazon Scraper</div>

  {/* Right-Side Buttons */}
<div className="flex space-x-4">
  <a href="https://x.com/alexanie_" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="hover:text-cyan-500" />
  </a>
  <a href="https://github.com/alex-anie/brightdata-amazon-scraper-frontend" target="_blank" rel="noopener noreferrer">
    <FaGithub className="hover:text-cyan-500" />
  </a>
  <button onClick={toggleTheme} className="hover:text-cyan-500">
    {theme === "light" ? <FaMoon /> : <FaSun />}
  </button>
</div>
        </div>
    </nav>
  );
};

export default Navbar;
