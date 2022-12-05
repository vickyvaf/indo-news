export const NavbarSkeletonLoader = () => {
  return (
    <div className="max-w-[950px] mx-auto mt-5 mb-2">
      <div className="animate-pulse flex space-x-4">
        <div className="flex items-center justify-between py-1 w-full">
          <div className="w-20 h-3 bg-slate-200 rounded-full" />
          <div className="w-20 h-3 bg-slate-200 rounded-full" />
          <div className="w-20 h-3 bg-slate-200 rounded-full" />
          <div className="w-20 h-3 bg-slate-200 rounded-full" />
          <div className="w-20 h-3 bg-slate-200 rounded-full" />
          <div className="w-20 h-3 bg-slate-200 rounded-full" />
          <div className="w-20 h-3 bg-slate-200 rounded-full" />
          <div className="w-20 h-3 bg-slate-200 rounded-full" />
          <div className="w-20 h-3 bg-slate-200 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const CircularLoader = () => {
  return (
    <div
      className="spinner-border animate-spin inline-block w-7 h-7 border-3 rounded-full text-gray-400 mt-1"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
