import SideBarMenu from "@/components/organisms/SideBarMenu";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row h-screen dark:bg-neutral-900 bg-neutral-100">
      {/* Sidebar Menu */}
      <header className="md:w-64 md:h-full w-full bg-black text-white">
        <SideBarMenu />
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
