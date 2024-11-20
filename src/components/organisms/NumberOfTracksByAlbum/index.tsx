import { fetchArtistAlbums } from "@/actions/spotifyActions";
import Text from "@/components/atoms/Text";
import BarChart from "@/components/molecules/BarChart";

export default async function NumberOfTracksByAlbum({ artistId }: { artistId: string }) {
    const data = await fetchArtistAlbums(artistId);

    const amountOfTracks = data.items.map((album: any) =>  album.total_tracks);
    const albumsTitles = data.items.map((album: any) => album.name);


    return (
        <div className="p-5 bg-neutral-200 dark:bg-neutral-800 rounded-lg border border-neutral-300 dark:border-neutral-700">
            <Text size="lg" className="mb-5 font-semibold text-center ">Tracks by album</Text>
            <BarChart label="Number" data={amountOfTracks} labels={albumsTitles}/>
        </div>
    )

}