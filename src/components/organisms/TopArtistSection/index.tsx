import Text from "@/components/atoms/Text"
import ArtistCard from "@/components/molecules/ArtistCard"

const TopArtistSection: React.FC = () => {

    return (

        <section className="flex flex-col gap-5">
            <Text as="h1" size="3xl" variant="primary" className="font-bold">
                Top Artists
            </Text>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-3">
                <ArtistCard imageUrl="https://i.scdn.co/image/ab67616d0000b273ed133ea8f343f0f451346a44" title="Jhayco" href="/home" />
                <ArtistCard imageUrl="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8460d200209e7bf0788a9649df" title="Mora" href="/home" />
            </div>
        </section>
    )
}


export default TopArtistSection;