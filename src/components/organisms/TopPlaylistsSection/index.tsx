import Text from "@/components/atoms/Text";
import { fetchPlaylists } from "@/actions/spotifyActions";
import PlaylistList from "@/components/molecules/PlaylistList";

export default async function TopPlaylistsSection() {
  const limit = 50;
  const initialData = await fetchPlaylists({ offset: 50, limit});
  console.log(initialData?.playlists);
  return (
    <section className="flex flex-col gap-5">
      <Text as="h1" size="3xl" variant="primary" className="font-bold">
        Top Playlists
      </Text>
      <PlaylistList initialPlaylists={initialData?.playlists?.items} limit={limit} />
    </section>
  );
}
