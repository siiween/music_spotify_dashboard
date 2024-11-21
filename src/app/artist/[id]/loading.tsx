import ChartSkeleton from "@/components/atoms/Skeletons/ChartSkeleton";
import NewAlbumsSkeleton from "@/components/atoms/Skeletons/NewAlbumsSkeleton";

export default function Loading() {
  return (
    <div className="flex md:flex-row flex-col gap-6 h-full">
      <div
        className={`md:w-64 w-full transition-all bg-neutral-300 dark:bg-neutral-800 rounded-lg  h-auto md:h-full sm:w-full`}
      ></div>
      <div className="flex-1 md:overflow-y-scroll flex flex-col gap-6 lg:px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <ChartSkeleton />
          <ChartSkeleton />
        </div>
        <NewAlbumsSkeleton number={12} />
      </div>
    </div>
  );
}
