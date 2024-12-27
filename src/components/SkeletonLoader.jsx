
const SkeletonLoader = () => {
  return (
    <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <div className="h-40 bg-slate-300 mb-4 rounded-md"></div>
      <div className="h-40 bg-slate-300 mb-4 rounded-md"></div>
      <div className="h-40 bg-slate-300 mb-4 rounded-md"></div>
      <div className="h-40 bg-slate-300 mb-4 rounded-md"></div>
      <div className="h-40 bg-slate-300 mb-4 rounded-md"></div>
    </div>
  );
};

export default SkeletonLoader;
