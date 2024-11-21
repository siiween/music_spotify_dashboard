import SideBarMenu from "../SideBarMenu";



export default function MainLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className="flex flex-col md:flex-row h-auto md:h-screen dark:bg-neutral-900 bg-neutral-100">
            {/* Sidebar Menu */}
            <SideBarMenu />
            {/* Main Content */}
            <main className="flex-1 p-6  overflow-y-auto">{children}</main>
        </div>
    );
}