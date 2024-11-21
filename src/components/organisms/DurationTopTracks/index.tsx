import {  fetchArtistTopTracks } from "@/actions/spotifyActions";
import Text from "@/components/atoms/Text";
import LineChart from "@/components/molecules/LineChart";

export default async function MinutesTopTracks({ artistId }: { artistId: string }) {
    const data = await fetchArtistTopTracks(artistId);

    const minutesByTrack = data.tracks.map((track: any) =>  track.duration_ms / 1000 / 60);
    const tracksTitles = data.tracks.map((track: any) => track.name);


    return (
        <div className="p-5 bg-neutral-200 dark:bg-neutral-800 rounded-lg border border-neutral-300 dark:border-neutral-700">
            <Text size="lg" className="mb-5 font-semibold text-center">Top tracks duration (min)</Text>
            <LineChart label="Number" data={minutesByTrack} labels={tracksTitles} />
        </div>
    )

}