import { render, screen } from "@testing-library/react";
import ArtistCard from "@/components/molecules/ArtistCard";

describe("ArtistCard", () => {
    it("must render the artist card correctly", () => {
        const artistData = {
            imageUrl: "https://example.com/artist-image.jpg",
            title: "Jhayco",
            href: "/artists/jhayco",
        };
        render(<ArtistCard {...artistData} />);
        const image = screen.getByAltText(artistData.title);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", expect.stringMatching(/^\/_next\/image\?url=.+$/));
        const title = screen.getByText(artistData.title);
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent(artistData.title);
        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", artistData.href);
    });
});
