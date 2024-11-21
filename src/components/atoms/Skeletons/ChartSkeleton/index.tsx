const ChartSkeleton = () => {
  return (
    <div className="h-64 md:h-80 lg:h-96 w-full">
    <div className="w-full h-64 md:h-80 lg:h-96 p-4 bg-neutral-300 dark:bg-neutral-800 rounded-lg animate-pulse flex flex-col">
      <div className="h-6 w-1/3 bg-white dark:bg-neutral-900 rounded mb-6 self-center"></div>
      <div className="flex flex-1 items-end justify-between gap-2">
        <div className="w-full bg-white dark:bg-neutral-900 rounded h-3/4"></div>
        <div className="w-full bg-white dark:bg-neutral-900 rounded h-1/2"></div>
        <div className="w-full bg-white dark:bg-neutral-900 rounded h-4/5"></div>
        <div className="w-full bg-white dark:bg-neutral-900 rounded h-1/3"></div>
        <div className="w-full bg-white dark:bg-neutral-900 rounded h-3/4"></div>
        <div className="w-full bg-white dark:bg-neutral-900 rounded h-2/3"></div>
        <div className="w-full bg-white dark:bg-neutral-900 rounded h-3/4"></div>
        <div className="w-full bg-white dark:bg-neutral-900 rounded h-1/2"></div>
        <div className="w-full bg-white dark:bg-neutral-900 rounded h-4/5"></div>
        <div className="w-full bg-white dark:bg-neutral-900 rounded h-1/3"></div>
        <div className="w-full bg-white dark:bg-neutral-900 rounded h-3/4"></div>
        <div className="w-full bg-white dark:bg-neutral-900 rounded h-2/3"></div>
      </div>
    </div>
    </div>
  );
};

export default ChartSkeleton;
