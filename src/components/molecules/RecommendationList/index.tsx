"use client";

import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import AlbumCard from "../AlbumCard";
import { Album } from "@/types/artist";
import NewAlbumsSkeleton from "@/components/atoms/Skeletons/NewAlbumsSkeleton";

interface RecommendationListProps {
    page: number;
    recommendations: Album[];
    limit: number;
}

export default function RecommendationList({ page, recommendations, limit }: RecommendationListProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const nextPage = () => {
        startTransition(() => {
            router.push(`/recommendations?page=${page + 1}`);
        });
    };

    const prevPage = () => {
        if (page > 1) {
            startTransition(() => {
                router.push(`/recommendations?page=${page - 1}`);
            });
        }
    };

    return isPending ? <NewAlbumsSkeleton number={12} /> : (
        <div>
            <div className="grid md:grid-cols-4 xl:grid-cols-6 grid-cols-2 md:gap-3">
                {recommendations.map((album) => (
                    <AlbumCard
                        key={album?.id}
                        name={album?.name}
                        artist={album?.artists[0]?.name}
                        releaseDate={album?.release_date}
                        tracks={album?.total_tracks}
                        imageUrl={album?.images[0]?.url}
                        href={`/artist/${album?.artists[0]?.id}`}
                    />
                ))}
            </div>
            <div className="flex justify-between mt-10 items-center">
                <Button name="Previous" size="md" onClick={prevPage} disabled={page === 1 || isPending}>
                    Previous
                </Button>
                <Text as="span" className="font-semibold">{`Page ${page}`}</Text>
                <Button name="Next" size="md" onClick={nextPage} disabled={isPending || recommendations.length < limit}>
                    Next
                </Button>
            </div>
        </div>
    );
}
