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

export const HomepageSkeleton = () => {
  return (
    <div className="bg-white rounded-md px-5 py-6 w-8/12">
      <div className="w-2/12 h-2 bg-slate-200 rounded-full mb-5" />
      <div className="animate-pulse flex space-x-4">
        <div className="flex flex-col w-5/12 ">
          <div className="bg-slate-200 h-40 rounded-xl" />
          <div className="my-5 space-y-2">
            <div className="w-11/12 h-2 bg-slate-200 rounded" />
            <div className="w-6/12 h-2 bg-slate-200 rounded" />
          </div>
          <div className="w-5/12 h-2 bg-slate-200 rounded" />
        </div>
        <div className="flex-1 space-y-5 py-1">
          <div className="space-y-3">
            <div className="w-9/12 h-2 bg-slate-200 rounded" />
            <div className="w-4/12 h-2 bg-slate-200 rounded" />
          </div>
          <div className="space-y-3">
            <div className="w-9/12 h-2 bg-slate-200 rounded" />
            <div className="w-4/12 h-2 bg-slate-200 rounded" />
          </div>
          <div className="space-y-3">
            <div className="w-9/12 h-2 bg-slate-200 rounded" />
            <div className="w-4/12 h-2 bg-slate-200 rounded" />
          </div>
          <div className="space-y-3">
            <div className="w-9/12 h-2 bg-slate-200 rounded" />
            <div className="w-4/12 h-2 bg-slate-200 rounded" />
          </div>
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
