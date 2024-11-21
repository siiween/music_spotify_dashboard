import { render, screen } from "@testing-library/react";
import TopArtistSection from "@/components/organisms/TopArtistSection";

describe("TopArtistSection", () => {
    it("must render title and artist cards correctly", () => {
        render(<TopArtistSection />);
        const title = screen.getByRole("heading", { name: /Top Artists/i });
        expect(title).toBeInTheDocument();
        const artistCards = screen.getAllByRole("link"); 
        expect(artistCards).toHaveLength(2); 
        const firstArtist = screen.getByText("Jhayco");
        expect(firstArtist).toBeInTheDocument();
        const secondArtist = screen.getByText("Mora");
        expect(secondArtist).toBeInTheDocument();
    });
});
