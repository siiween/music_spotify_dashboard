import { render, screen } from "@testing-library/react";
import TopSongsSection from "@/components/organisms/TopSongsSection";

describe("TopSongsSection", () => {
    it("should render title and song cards correctly", () => {
        render(<TopSongsSection />);
        const title = screen.getByRole("heading", { name: /Top Songs/i });
        expect(title).toBeInTheDocument();
        const trackCards = screen.getAllByRole("link");
        expect(trackCards).toHaveLength(2);
        const firstTrack = screen.getByText("No me conoce - Remix");
        expect(firstTrack).toBeInTheDocument();
        const secondTrack = screen.getByText("Primer dia de clases");
        expect(secondTrack).toBeInTheDocument();
        expect(screen.getByText("Jhayco")).toBeInTheDocument();
        expect(screen.getByText("Mora")).toBeInTheDocument();
    });
});
