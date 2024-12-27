import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import SkeletonLoader from './SkeletonLoader';

const MainContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null); // Track errors
  const itemsPerPage = 5;

  useEffect(() => {
    if (searchTerm) {
      fetchData(searchTerm, currentPage);
    }
  }, [searchTerm, currentPage]);

  const fetchData = async (query, page) => {
    try {
      const response = await fetch(`https://brightdata-amazon-scraper-backend.onrender.com/api/scrape?search_term=${query}&page=${page}`);
      const result = await response.json();

      // Check if the result is an array
      if (Array.isArray(result)) {
        console.log("Response from API:", result); 
        setData(result);
        setError(null); // Clear any previous errors
      } else {
        setError('Unexpected data format received');
        console.error('Unexpected response format:', result);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data'); // Set error message
    }
  };

  const handleSearch = () => {
    setCurrentPage(1); // Reset to page 1 when searching new term
    fetchData(searchTerm, 1);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className='w-[60%] mx-auto mt-10'>
      <div className="text-center w-[100%]">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded w-[70%]"
        />
        <button onClick={handleSearch} className="bg-cyan-500 text-white px-4 py-2 rounded ml-2">
          Search
        </button>
      </div>
     
      {error ? (
        <div className="text-red-500 mt-4">Error: {error}</div> // Display error
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {currentData.map((item) => (
            <div key={item.url} className="bg-white p-4 shadow-lg rounded">
              <img src={item.imageCover} alt={item.title} className="w-full h-40 object-cover rounded" />
              <h2 className="font-semibold mt-2">{item.title}</h2>
              <p className="text-gray-500 mt-1">{item.price}</p>
              <a href={item.url} className="text-cyan-500 hover:underline mt-2 block">
                View Product
              </a>
            </div>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default MainContent;






