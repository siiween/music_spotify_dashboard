import { fetchArtistAlbums } from "@/actions/spotifyActions";
import AlbumCard from "@/components/molecules/AlbumCard";
import { Album } from "@/types/artist";

export default async function ArtistAlbums({ artistId }: { artistId: string }) {
  const data = await fetchArtistAlbums(artistId);

  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 md:gap-3">
      {data?.items?.map((album: Album) => (
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
  );
}
