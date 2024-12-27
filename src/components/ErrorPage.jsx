
const ErrorPage = ({ message }) => {
  return (
    <div className="bg-red-200 text-red-800 p-4 rounded-md">
      <h2 className="font-bold text-lg">Error</h2>
      <p>{message || "Something went wrong. Please try again later."}</p>
    </div>
  );
};

export default ErrorPage;
