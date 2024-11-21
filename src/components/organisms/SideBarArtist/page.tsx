"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import useSidebar from "@/hooks/useSidebar";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import Text from "@/components/atoms/Text";

interface SideBarArtistProps {
  data: {
    name: string;
    images: { url: string }[];
    followers: { total: number };
    genres: string[];
    popularity: number;
  };
}

export default function SideBarArtist({ data }: SideBarArtistProps) {
  const { isCollapsed, toggleCollapse } = useSidebar({ localStorageKey: "sidebar-artist-collapsed" });

  return (
    <nav
      aria-label="Sidebar"
      className={`${isCollapsed ? "md:w-28" : "md:w-64"} w-full transition-all relative flex flex-row  md:flex-col h-auto md:h-full sm:w-full`}
    >
      <div className="flex flex-col">
        <div className="relative w-full aspect-square pt-auto rounded-lg overflow-hidden">
          <Image
            src={data?.images[0]?.url}
            alt={data?.name}
            fill
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <Text as="h1" size={isCollapsed ? "lg" : "2xl"} variant="primary" className="font-bold text-left mt-3">
          {data?.name}
        </Text>

        <Text as="p" size="sm" variant="muted" className="text-left">
          {data?.followers?.total.toString()} monthly listeners
        </Text>

        <Text as="p" size="md" variant="secondary" className="text-left mt-5 font-semibold">
          Genres
        </Text>
        <Text as="p" size="sm" variant="muted" className="text-left">
          {data?.genres?.join(", ")}
        </Text>

        <Text as="p" size="md" variant="secondary" className="text-left mt-5 font-semibold">
          Popularity
        </Text>
        <Text as="p" size="sm" variant="muted" className="text-left">
          {data?.popularity}
        </Text>
        
      </div>

      <Button
        variant="transparent"
        size="xs"
        className="absolute top-1/2 -transform-y-1/2 -right-2 hidden md:block"
        onClick={() => toggleCollapse()}
      >
        {isCollapsed ? (
          <ArrowRightIcon className="w-4 h-4 dark:text-white text-neutral-900" />
        ) : (
          <ArrowLeftIcon className="w-4 h-4 dark:text-white text-neutral-900" />
        )}
      </Button>
    </nav>
  );
}
