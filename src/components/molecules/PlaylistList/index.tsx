"use client";

import { useState } from "react";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { fetchPlaylists } from "@/actions/spotifyActions";
import PlaylistCard from "../PlaylistCard";
import Text from "@/components/atoms/Text";



interface PlaylistListProps {
  initialPlaylists: any[];
  limit: number;
}

export default function PlaylistList({ initialPlaylists, limit }: PlaylistListProps) {
  const [offset, setOffset] = useState(limit);
  const [playlists, setPlaylists] = useState(initialPlaylists);
  const [hasMore, setHasMore] = useState(true);

  const fetchMorePlaylists = async () => {
    const data = await fetchPlaylists({ offset, limit });
    setPlaylists((prev) => [...prev, ...data?.playlists?.items]);
    setOffset((prev) => prev + limit);
    if (data?.playlists?.items < limit) {
      setHasMore(false);
    }
  };
 
  const { lastElementRef, isFetching } = useInfiniteScroll({
    fetchMore: fetchMorePlaylists,
    hasMore,
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 md:gap-3">
        {playlists?.map((list: any, index) => (
          <PlaylistCard
            key={list.id + index}
            imageUrl={list?.images[0]?.url}
            title={list?.name}
            href="/home"
            description={list?.description}
            tracks={list?.tracks?.total}
            owner={list?.owner?.display_name}
          />
        ))}
        
      </div>
      {hasMore ? <div ref={lastElementRef} className="h-10 w-full"></div> :
          <Text variant="muted" className="text-center mt-4 mb-10">There are no more playlists</Text>}
      {isFetching && <Text className="text-center mt-4 mb-10">Loading more playlists...</Text>}
    </div>
  );
}
