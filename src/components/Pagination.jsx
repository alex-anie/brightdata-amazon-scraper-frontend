const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded-md ${currentPage === page ? 'bg-cyan-500 text-white' : 'bg-slate-200 text-black'}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  