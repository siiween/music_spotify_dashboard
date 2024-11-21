import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import SideBarMenu from "@/components/organisms/SideBarMenu";

jest.mock("next/navigation", () => ({
    usePathname: jest.fn(),
}));

describe("SideBarMenu", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render all sidebar elements correctly", () => {
        (usePathname as jest.Mock).mockReturnValue("/Home");
        render(<SideBarMenu />);
        expect(screen.getByText("Music")).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Favorites")).toBeInTheDocument();
    });

    it("should highlight active link based on current path", () => {
        (usePathname as jest.Mock).mockReturnValue("/home");
        render(<SideBarMenu />);
        const homeLink = screen.getByText("Home");
        expect(homeLink?.getAttribute("class")).toContain("text-gray-900");
        const recommendationsLink = screen.getByText("Recommendations");
        expect(recommendationsLink?.getAttribute("class")).not.toContain("text-gray-900");
    });
    it("should show 'Recommendations' link as active when path is '/recommendations'", () => {
        (usePathname as jest.Mock).mockReturnValue("/recommendations");
        render(<SideBarMenu />);
        const recommendationsLink = screen.getByText("Recommendations");
        expect(recommendationsLink?.getAttribute("class")).toContain("text-gray-900");
        const homeLink = screen.getByText("Home");
        expect(homeLink?.getAttribute("class")).not.toContain("text-gray-900");
    });

    it("must show the copyright text", () => {
        render(<SideBarMenu />);
        expect(screen.getByText("© 2024 Music Dashboard")).toBeInTheDocument();
    });


});
