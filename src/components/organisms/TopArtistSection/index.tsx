import { fetchArtistsList } from "@/actions/spotifyActions";
import Text from "@/components/atoms/Text"
import ArtistCard from "@/components/molecules/ArtistCard"

export default async function TopArtistSection() {
    const data = await fetchArtistsList({ offset: 0, limit: 20 });

    return (

        <section className="flex flex-col gap-5">
            <Text as="h1" size="3xl" variant="primary" className="font-bold">
                Followed Artists
            </Text>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-3">
                {data.artists.items.map((artist: any) => 
                    <ArtistCard key={artist?.id} imageUrl={artist?.images[0]?.url} title={artist?.name} href={`/artist/${artist?.id}`} />
                )}
                </div>
        </section>
    )
}

