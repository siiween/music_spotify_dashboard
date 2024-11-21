import SideBarArtist from "@/components/organisms/SideBarArtist/page";
import { fetchArtist } from "@/actions/spotifyActions";
import { Suspense } from "react";
import NumberOfTracksByAlbum from "@/components/organisms/NumberOfTracksByAlbum";
import MinutesTopTracks from "@/components/organisms/DurationTopTracks";
import ChartSkeleton from "@/components/atoms/Skeletons/ChartSkeleton";

export default async function ArtistPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const artistData = await fetchArtist(id);

  return (
    <div className="flex md:flex-row flex-col gap-6 h-full">
      <SideBarArtist data={artistData} />
      <div className="flex-1 md:overflow-y-scroll flex flex-col gap-6 lg:px-4">
        <Suspense fallback={ <ChartSkeleton />}>
          <NumberOfTracksByAlbum artistId={id} />
        </Suspense>
        <Suspense fallback={ <ChartSkeleton />}>
          <MinutesTopTracks artistId={id} />
        </Suspense>
      </div>
    </div>
  );
}
