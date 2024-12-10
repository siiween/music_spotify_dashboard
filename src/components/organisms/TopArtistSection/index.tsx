import { fetchArtistsList } from "@/actions/spotifyActions";
import Text from "@/components/atoms/Text";
import ArtistList from "@/components/molecules/ArtistsList";
import { artists_ids } from "@/utils/artists";

export default async function TopArtistSection() {
  const limit = 18;
  const offset = 0;

  const concatenatedIds = artists_ids.slice(offset, offset + limit).join(",");
  const data = await fetchArtistsList({ ids: concatenatedIds });

  return (
    <section className="flex flex-col gap-5">
      <Text as="h1" size="3xl" variant="primary" className="font-bold">
        Followed Artists
      </Text>
      <ArtistList initialArtists={data?.artists} limit={limit} />
    </section>
  );
}
