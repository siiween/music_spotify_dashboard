import TopArtistSection from "@/components/organisms/TopArtistSection";
import TopPlaylistsSection from "@/components/organisms/TopPlaylistsSection";
import { Suspense } from "react";

export default function Home() {
    return (
        <main className="flex flex-col gap-10">
            <Suspense fallback={<div>Loading...</div>} >
                <TopArtistSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>} >
                <TopPlaylistsSection />
            </Suspense>
        </main>
    )
}