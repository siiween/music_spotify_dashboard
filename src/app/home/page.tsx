import TopArtistSkeleton from "@/components/atoms/Skeletons/TopArtistSkeleton";
import TopPlayListsSkeleton from "@/components/atoms/Skeletons/TopPlayListsSkeleton";
import TopArtistSection from "@/components/organisms/TopArtistSection";
import TopPlaylistsSection from "@/components/organisms/TopPlaylistsSection";
import { Suspense } from "react";

export default function Home() {
    return (
        <main className="flex flex-col gap-10">
            <Suspense fallback={<TopArtistSkeleton number={6}/>} >
                <TopArtistSection />
            </Suspense>
            <Suspense fallback={<TopPlayListsSkeleton number={25} />} >
                <TopPlaylistsSection />
            </Suspense>
        </main>
    )
}