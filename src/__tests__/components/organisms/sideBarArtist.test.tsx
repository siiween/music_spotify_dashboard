import { render, screen } from "@testing-library/react";
import useSidebar from "@/hooks/useSidebar";
import SideBarArtist from "@/components/organisms/SideBarArtist/page";

jest.mock("@/hooks/useSidebar", () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe("SideBarArtist", () => {
    const mockData = {
        name: "Artist Name",
        images: [{ url: "https://example.com/artist-image.jpg" }],
        followers: { total: 1234567 },
        genres: ["Pop", "Rock"],
        popularity: 85,
    };

    beforeEach(() => {
        (useSidebar as jest.Mock).mockReturnValue({
            isCollapsed: false,
            toggleCollapse: jest.fn(),
        });
    });

    it("should render artist information correctly", () => {
        render(<SideBarArtist data={mockData} />);
        expect(screen.getByText(mockData.name)).toBeInTheDocument();
        expect(screen.getByText(`${mockData.followers.total} monthly listeners`)).toBeInTheDocument();
        expect(screen.getByText(mockData.genres.join(", "))).toBeInTheDocument();
        expect(screen.getByText(`${mockData.popularity}`)).toBeInTheDocument();
        const image = screen.getByAltText(mockData.name) as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", expect.stringMatching(/^\/_next\/image\?url=.+$/));

    });
    it("should render the sidebar with collapsed state when isCollapsed is true", () => {
        (useSidebar as jest.Mock).mockReturnValue({
            isCollapsed: true,
            toggleCollapse: jest.fn(),
        });
        render(<SideBarArtist data={mockData} />);
        expect(screen.getByRole("navigation")).toHaveClass("md:w-28");
        expect(screen.getByText(mockData.name)).toHaveClass("text-lg");
    });

    it("should render the sidebar with expanded state when isCollapsed is false", () => {
        render(<SideBarArtist data={mockData} />);
        expect(screen.getByRole("navigation")).toHaveClass("md:w-64");
        expect(screen.getByText(mockData.name)).toHaveClass("text-2xl");
    });
});
