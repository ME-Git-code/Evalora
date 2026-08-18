export default function DashboardLoading() {
  return (
    <div className="w-full flex flex-col gap-6 lg:gap-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="h-10 w-48 bg-slate-200 animate-pulse rounded-xl"></div>
      </div>
      
      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 bg-slate-200 animate-pulse rounded-2xl"></div>
        ))}
      </div>

      {/* Main Content Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2 h-[400px] bg-slate-200 animate-pulse rounded-2xl"></div>
        <div className="h-[400px] bg-slate-200 animate-pulse rounded-2xl"></div>
      </div>
    </div>
  );
}
