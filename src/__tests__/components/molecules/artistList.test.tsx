import { render, screen } from "@testing-library/react";
import ArtistList from "@/components/molecules/ArtistsList";

const mockInitialArtists = [
  {
    id: "1",
    name: "Artist 1",
    images: [{ url: "https://example.com/image1.jpg" }],
  },
  {
    id: "2",
    name: "Artist 2",
    images: [{ url: "https://example.com/image2.jpg" }],
  },
];

const defaultProps = {
  initialArtists: mockInitialArtists,
  limit: 2,
};

describe("ArtistList", () => {
  it("should render the list of artists", () => {
    render(<ArtistList {...defaultProps} />);
    expect(screen.getByText("Artist 1")).toBeInTheDocument();
    expect(screen.getByText("Artist 2")).toBeInTheDocument();
  });
});
