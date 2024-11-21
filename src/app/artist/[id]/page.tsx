import SideBarArtist from "@/components/organisms/SideBarArtist/page";
import { fetchArtist } from "@/actions/spotifyActions";
import { Suspense } from "react";
import NumberOfTracksByAlbum from "@/components/organisms/NumberOfTracksByAlbum";
import MinutesTopTracks from "@/components/organisms/DurationTopTracks";
import ChartSkeleton from "@/components/atoms/Skeletons/ChartSkeleton";
import NewAlbumsSkeleton from "@/components/atoms/Skeletons/NewAlbumsSkeleton";
import ArtistAlbums from "@/components/organisms/ArtistAlbums";

export default async function ArtistPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const artistData = await fetchArtist(id);

  return (
    <div className="flex lg:flex-row flex-col gap-6 h-full">
      <SideBarArtist data={artistData} />
      <div className="flex-1 lg:overflow-y-scroll flex flex-col gap-6 lg:px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <Suspense fallback={<ChartSkeleton />}>
            <NumberOfTracksByAlbum artistId={id} />
          </Suspense>
          <Suspense fallback={<ChartSkeleton />}>
            <MinutesTopTracks artistId={id} />
          </Suspense>
        </div>

        <h1 className="text-2xl font-bold">Albums</h1>
        <Suspense fallback={<NewAlbumsSkeleton number={12} />}>
          <ArtistAlbums artistId={id} />
        </Suspense>
      </div>
    </div>
  );
}
