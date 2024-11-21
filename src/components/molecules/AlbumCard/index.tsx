import Image from "next/image";
import Text from "@/components/atoms/Text";
import Link from "next/link";
import moment from "moment";

interface PlaylistCardProps {
  imageUrl: string;
  name: string;
  href: string;
  releaseDate: string;
  tracks: number;
  artist: string;
}

const AlbumCard: React.FC<PlaylistCardProps> = ({ imageUrl, name, href ,releaseDate, tracks, artist}) => {
  return (
    <Link href={href} className="w-full  p-3 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all rounded-lg">
        <div className="relative w-full aspect-square pt-auto rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={name + " Album Cover"}
            fill
            sizes="180px"
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
            {name}
          </Text>
          <Text
            as="p"
            size="sm"
            variant="muted"
            className="font-semibold text-left truncate"
          >
            {artist}
          </Text>
          <div className="flex justify-between">
          <Text
            as="p"
            size="xs"
            variant="secondary"
            className="text-right mt-2"
          >
            {moment(releaseDate).format("MMM Do YY")}
          </Text>
          <Text
            as="p"
            size="xs"
            variant="secondary"
            className="text-right mt-2"
          >
            {tracks} Tracks
          </Text>
          </div>
         
          

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

export default AlbumCard;
