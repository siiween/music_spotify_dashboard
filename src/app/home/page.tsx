import TopArtistSection from "@/components/organisms/TopArtistSection";
import TopSongsSection from "@/components/organisms/TopSongsSection";

export default function Home() {
    return (
        <main className="flex flex-col gap-10">
            <TopArtistSection />
            <TopSongsSection />
        </main>
    )
}