import { useState, useEffect } from "react";

const Sidebar = ({ onSearchHistoryClick }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setHistory(storedHistory);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("searchHistory");
    setHistory([]);
  };

  const removeItem = (item) => {
    const updatedHistory = history.filter((h) => h !== item);
    setHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div className="bg-slate-200 p-4 w-60 border-l border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">Search History</h2>
        <button onClick={clearHistory} className="text-cyan-600 hover:underline">Clear</button>
      </div>
      <ul>
        {history.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <button
              onClick={() => onSearchHistoryClick(item)}
              className="hover:text-cyan-600"
            >
              {item}
            </button>
            <button onClick={() => removeItem(item)} className="text-red-600 hover:underline">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
