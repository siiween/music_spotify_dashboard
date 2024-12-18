import Image from "next/image";
import Text from "@/components/atoms/Text";
import Link from "next/link";

interface ArtistCardProps {
  imageUrl: string;
  name: string;
  href: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ imageUrl, name, href }) => {
  return (
    <Link href={!name ? "" : href} className="w-full p-3 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-all rounded-lg">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={name + " Artist Cover"}
            fill
            sizes="180px"
            className="object-cover"
            priority
          />
        </div>
        <div className="w-full mt-2">
          <Text
            as="h3"
            size="xl"
            variant="primary"
            className="truncate font-semibold text-left"
          >
            {name || "Unknown"}
          </Text>
        </div>
    </Link>
  );
};

export default ArtistCard;
