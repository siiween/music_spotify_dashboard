import { fetchRecommendations } from "@/actions/spotifyActions";
import RecommendationList from "@/components/molecules/RecommendationList";


export default async function RecommendationsPage({ searchParams }: { searchParams: { page?: string } }) {
    const currentPage = parseInt(searchParams.page || "1", 10);
    const limit = 12;
    const offset = (currentPage - 1) * limit;
    const data = await fetchRecommendations({ limit, offset });
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">New Albums</h1>
            <RecommendationList page={currentPage} recommendations={data?.albums?.items} />
        </div>
    );
}
