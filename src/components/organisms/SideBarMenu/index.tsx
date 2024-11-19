"use client";
import LinkWithIcon from "@/components/molecules/LinkWithIcon";
import Text from "@/components/atoms/Text";
import { HomeIcon, HeartIcon } from "@heroicons/react/16/solid";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import { usePathname } from "next/navigation";
import { MusicalNoteIcon } from "@heroicons/react/16/solid";

const SideBarMenu: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Sidebar"
      className="flex flex-row  md:flex-col h-auto md:h-full w-full md:w-64 sm:w-full bg-white dark:bg-black p-4 md:border-r dark:border-neutral-800 border-neutral-300"
    >
      {/* Logo */}
      <div className="flex items-center md:mb-8 gap-3">
        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center  justify-center text-lg font-bold">
          <MusicalNoteIcon className="w-4 h-4 text-white" />
        </div>
        <Text as="h1" size="2xl" variant="primary" className="font-bold">
          Music
        </Text>
      </div>

      <ul className="flex flex-row md:flex-col md:gap-6 md:ml-0 ml-auto items-center md:items-start">
        <li>
          <LinkWithIcon href="/home" icon={HomeIcon} active={pathname.startsWith("/home")}>
            Home
          </LinkWithIcon>
        </li>
        <li>
          <LinkWithIcon href="/favorites" icon={HeartIcon} active={pathname.startsWith("/Favorites")}>
            Favorites
          </LinkWithIcon>
        </li>
        <li className="md:ml-0 ml-3">
          <ThemeToggle />
        </li>
      </ul>


      <div className="mt-auto pt-4 border-t dark:border-neutral-800 border-neutral-300 hidden md:block">
        <Text as="p" size="xs" variant="muted" className="text-gray-500">
          © 2024 Music Dashboard
        </Text>
      </div>
    </nav>
  );
}


export default SideBarMenu;