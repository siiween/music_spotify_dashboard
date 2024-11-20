import Image from "next/image";
import Text from "@/components/atoms/Text";
import Link from "next/link";
import { millisToMinutesAndSeconds } from "@/utils/tracks";

interface PlaylistCardProps {
  imageUrl: string;
  title: string;
  href: string;
  description: string;
  tracks: number;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ imageUrl, title, href ,description, tracks}) => {
  return (
    <Link href={href} className="w-full md:p-5 p-3 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all rounded-lg">
        <div className="relative w-full aspect-square pt-auto rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full mt-2">
          <Text
            as="h3"
            size="lg"
            variant="primary"
            className="font-semibold text-left"
          >
            {title}
          </Text>
          <Text
            as="p"
            size="sm"
            variant="muted"
            className="font-semibold text-left truncate"
          >
            {description}
          </Text>
          <Text
            as="p"
            size="xs"
            variant="secondary"
            className="text-right mt-2"
          >
            {tracks} Tracks
          </Text>
          

          {/* <div className="flex">
          <Text
            as="p"
            size="md"
            variant="muted"
            className="text-left flex-grow font-semibold"
          >

            {artist}
          </Text>
          <Text
            as="p"
            size="md"
            variant="muted"
            className="text-left"
          >

            {millisToMinutesAndSeconds(duration)}
          </Text>
          </div> */}
          
        </div>
    </Link>
  );
};

export default PlaylistCard;
