"use client";
import LinkWithIcon from "@/components/atoms/LinkWithIcon";
import Text from "@/components/atoms/Text";
import {
  HomeIcon,
  HandThumbUpIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/16/solid";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import { usePathname } from "next/navigation";
import { MusicalNoteIcon } from "@heroicons/react/16/solid";
import useSidebar from "@/hooks/useSidebar";
import Button from "@/components/atoms/Button";
import { signOut } from "next-auth/react";

const SideBarMenu: React.FC = () => {
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const { isCollapsed, toggleCollapse } = useSidebar({
    localStorageKey: "sidebar-collapsed",
  });
  return (
    <nav
      aria-label="Sidebar"
      className={`${
        isCollapsed ? "md:w-28" : " md:w-64"
      } w-full transition-all relative flex flex-row  md:flex-col h-auto md:h-full sm:w-full bg-white dark:bg-black p-4 md:border-r dark:border-neutral-800 border-neutral-300`}
    >
      {/* Logo */}
      <div
        className={`${
          isCollapsed && "justify-center"
        } flex items-center md:mb-8`}
      >
        <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center  justify-center text-lg font-bold">
          <MusicalNoteIcon className="w-4 h-4 text-white" />
        </div>
        {!isCollapsed && (
          <Text as="h1" size="2xl" variant="primary" className="font-bold ml-3">
            Music
          </Text>
        )}
      </div>

      <ul
        className={`flex flex-row md:flex-col md:gap-6 md:ml-0 ml-auto items-center  ${
          isCollapsed ? "md:items-center" : "md:items-start"
        }`}
      >
        <li>
          <LinkWithIcon
            href="/home"
            icon={HomeIcon}
            active={pathname.startsWith("/home")}
            collapsed={isCollapsed}
          >
            Home
          </LinkWithIcon>
        </li>
        <li>
          <LinkWithIcon
            href="/recommendations"
            icon={HandThumbUpIcon}
            active={pathname.startsWith("/recommendations")}
            collapsed={isCollapsed}
          >
            Recommendations
          </LinkWithIcon>
        </li>
        <li>
          <Button
            onClick={handleLogout}
            name="logout"
            variant="secondary"
            size="sm"
            className="text-left"
          >
            <ArrowLeftEndOnRectangleIcon className="w-4 h-4 text-white " />
            {!isCollapsed && <span className="hidden sm:block ml-1">Logout</span>}
          </Button>
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

      <Button
        name="collapse"
        variant="transparent"
        size="xs"
        className="absolute top-1/2 -transform-y-1/2 right-1 hidden md:block"
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
};

export default SideBarMenu;
