import { useState, useEffect } from "react";

type UseSidebarOptions = {
  localStorageKey?: string;
};

export default function useSidebar({
  localStorageKey = "state",
}: UseSidebarOptions = {}) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  useEffect(() => {
    const savedState = localStorage.getItem(localStorageKey);
   
    if (savedState) {
      const parsed = JSON.parse(savedState);
      setIsCollapsed(parsed.isCollapsed);
    }
  }, [localStorageKey]);


  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
    localStorage.setItem(
        localStorageKey,
        JSON.stringify({ isCollapsed: !isCollapsed })
    );
  };


  return {
    isCollapsed,
    toggleCollapse,
  };
}
