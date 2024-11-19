import Text from "@/components/atoms/Text"
import TrackCard from "@/components/molecules/TrackCard";

const TopSongsSection: React.FC = () => {

    return (

        <section className="flex flex-col gap-5">
            <Text as="h1" size="3xl" variant="primary" className="font-bold">
                Top Songs
            </Text>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-3">
            <TrackCard imageUrl="https://i.scdn.co/image/ab67616d0000b273552837b3e37071cbf3c9dc53" title="No me conoce - Remix" href="/home" artist={"Jhayco"} duration={213242} />
            <TrackCard imageUrl="https://images.genius.com/0faa16aeea6a56d1c24dafdc152038fc.1000x1000x1.jpg" title="Primer dia de clases" href="/home" artist={"Mora"} duration={253244} />
            </div>
        </section>
    )
}


export default TopSongsSection;