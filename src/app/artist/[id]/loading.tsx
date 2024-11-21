import ChartSkeleton from "@/components/atoms/Skeletons/ChartSkeleton";

export default function Loading() {
    return (
        <div className="flex md:flex-row flex-col gap-6 h-full">
            <div className={`md:w-64 w-full transition-all bg-neutral-300 dark:bg-neutral-800 rounded-lg  h-auto md:h-full sm:w-full`}>
            </div>
            <div className="flex-1 md:overflow-y-scroll flex flex-col gap-6 lg:px-4">
                <ChartSkeleton />
                <ChartSkeleton />
            </div>
        </div>
    )
}