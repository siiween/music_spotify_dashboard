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
    <Link href={href} className="w-full p-3 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-all rounded-lg">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
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
