"use client";

import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import { useRouter } from "next/navigation";
import AlbumCard from "../AlbumCard";


interface RecommendationListProps {
    page: number;
    recommendations: any[];
}

export default function RecommendationList({ page, recommendations }: RecommendationListProps) {
    const router = useRouter();

    const nextPage = () => {
        router.push(`/recommendations?page=${page + 1}`);
    };

    const prevPage = () => {
        if (page > 1) {
            router.push(`/recommendations?page=${page - 1}`);
        }
    };


    return (
        <div>
            <div className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-2 md:gap-3">
                {recommendations.map((album) => (
                    <AlbumCard
                        key={album?.id}
                        name={album?.name}
                        artist={album?.artists[0]?.name}
                        releaseDate={album?.release_date}
                        tracks={album?.total_tracks}
                        imageUrl={album?.images[0]?.url}
                        href="/"
                    />
                ))}
            </div>

            <div className="flex justify-between mt-10">
                <Button size="md" onClick={prevPage} disabled={page === 1}>
                    Previous
                </Button>
                <Text as="span" className="font-semibold">{`Page ${page}`}</Text>
                <Button size="md" onClick={nextPage}>Next</Button>
            </div>
        </div>
    );
}
