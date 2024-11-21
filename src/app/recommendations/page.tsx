import { fetchRecommendations } from "@/actions/spotifyActions";
import NewAlbumsSkeleton from "@/components/atoms/Skeletons/NewAlbumsSkeleton";
import RecommendationList from "@/components/molecules/RecommendationList";
import { Suspense } from "react";

export default async function RecommendationsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = parseInt(searchParams.page || "1", 10);
  const limit = 12;
  const offset = (currentPage - 1) * limit;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">New Albums</h1>
      <Suspense fallback={<NewAlbumsSkeleton number={12} />}>
        <RecommendationContent
          page={currentPage}
          limit={limit}
          offset={offset}
        />
      </Suspense>
    </div>
  );
}

async function RecommendationContent({
  page,
  limit,
  offset,
}: {
  page: number;
  limit: number;
  offset: number;
}) {
  const data = await fetchRecommendations({ limit, offset });
  return (
    <RecommendationList
      page={page}
      recommendations={data?.albums?.items}
      limit={limit}
    />
  );
}
