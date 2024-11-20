"use client";
import LinkWithIcon from "@/components/molecules/LinkWithIcon";
import Text from "@/components/atoms/Text";
import { HomeIcon, HeartIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import { usePathname } from "next/navigation";
import { MusicalNoteIcon } from "@heroicons/react/16/solid";
import useSidebar from "@/hooks/useSidebar";
import Button from "@/components/atoms/Button";


const SideBarArtist: React.FC = () => {
  const pathname = usePathname();
  const { isCollapsed, toggleCollapse} = useSidebar({localStorageKey: "sidebar-collapsed"});
  return (
    <nav
      aria-label="Sidebar"
      className={`${isCollapsed ? "md:w-28" : " md:w-64"} w-full transition-all relative flex flex-row  md:flex-col h-auto md:h-full sm:w-full bg-white dark:bg-black p-4 md:border-r dark:border-neutral-800 border-neutral-300`}
    >
  

      <Button variant="transparent" size="sm" className="absolute top-1/2 -transform-y-1/2 right-1 hidden md:block" onClick={() => toggleCollapse()}>
        {isCollapsed ?
          <ArrowRightIcon className="w-4 h-4 dark:text-white text-neutral-900" /> :
          <ArrowLeftIcon className="w-4 h-4 dark:text-white text-neutral-900" />
        }
      </Button>
    </nav>
  );
}


export default SideBarArtist;