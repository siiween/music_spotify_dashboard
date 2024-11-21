"use client";

import { useState } from "react";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { fetchArtistsList } from "@/actions/spotifyActions";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import ArtistCard from "../ArtistCard";
import { artists_ids } from "@/utils/artists";

interface ArtistListProps {
  initialArtists: any[];
  limit: number;
}

export default function ArtistList({ initialArtists, limit }: ArtistListProps) {
  const [offset, setOffset] = useState(limit);
  const [artists, setArtists] = useState(initialArtists);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);


  const fetchMoreArtists = async () => {
    setIsFetching(true);
    const concatenatedIds = artists_ids.slice(offset, offset + limit).join(',');
    const data = await fetchArtistsList({ ids: concatenatedIds });

    setArtists((prev) => [...prev, ...data?.artists]);
    setOffset((prev) => prev + limit);

    if (data?.artists < limit) {
      setHasMore(false);
    }

    setIsFetching(false);
  };


  return (
    <div className="flex flex-col gap-5">
      <div className="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2">
        {artists.map((artist: any, index) =>
          <ArtistCard key={artist?.id + index } imageUrl={artist?.images[0]?.url} name={artist?.name} href={`/artist/${artist?.id}`} />
        )}
      </div>
      <div className="w-full flex flex-col items-center">
        {hasMore ? !isFetching && <Button size="md" className="w-fit" onClick={() => fetchMoreArtists()}>Load More</Button> :
          <Text variant="muted" className="text-center mt-4 mb-10">There are no more artist</Text>}
        {isFetching && <Text className="text-center mt-4 mb-10">Loading more artists...</Text>}
      </div>
    </div>
  );
}
