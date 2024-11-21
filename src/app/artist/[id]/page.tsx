import SideBarArtist from "@/components/organisms/SideBarArtist/page";
import { fetchArtist } from "@/actions/spotifyActions";
import { Suspense } from "react";
import NumberOfTracksByAlbum from "@/components/organisms/NumberOfTracksByAlbum";
import MinutesTopTracks from "@/components/organisms/DurationTopTracks";

export default async function ArtistPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const artistData = await fetchArtist(id); // Llamada al servidor una vez

  return (
    <div className="flex md:flex-row flex-col gap-6 h-full">
      <SideBarArtist data={artistData} /> {/* Pasamos los datos como props */}
      <div className="flex-1  md:overflow-y-scroll gap-6 flex flex-col">
        <Suspense fallback={<div>Loading...</div>}>
            <NumberOfTracksByAlbum artistId={id} />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
            <MinutesTopTracks artistId={id} />
        </Suspense>
      </div>
    </div>
  );
}
