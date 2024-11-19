import Image from "next/image";
import Text from "@/components/atoms/Text";
import Link from "next/link";
import { millisToMinutesAndSeconds } from "@/utils/tracks";

interface TrackCardProps {
  imageUrl: string;
  title: string;
  artist: string;
  duration: number;
  href: string;
}

const TrackCard: React.FC<TrackCardProps> = ({ imageUrl, title, artist, duration, href }) => {
  return (
    <Link href={href} className="w-full p-3 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all rounded-lg">
        <div className="relative w-full h-52 rounded-lg overflow-hidden">
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
            size="xl"
            variant="primary"
            className="font-semibold text-left"
          >
            {title}
          </Text>

          <div className="flex">
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
          </div>
          
        </div>
    </Link>
  );
};

export default TrackCard;
