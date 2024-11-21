import { render, screen } from "@testing-library/react";
import TrackCard from "@/components/molecules/TrackCard";
import { millisToMinutesAndSeconds } from "@/utils/tracks";

describe("TrackCard", () => {
    it("should correctly render the track card with the data provided", () => {
        const track = {
            imageUrl: "https://example.com/track-image.jpg",
            title: "Test Track",
            artist: "Test Artist",
            duration: 180000,
            href: "/track/1",
        };

        render(
            <TrackCard
                imageUrl={track.imageUrl}
                title={track.title}
                artist={track.artist}
                duration={track.duration}
                href={track.href}
            />
        );
        expect(screen.getByText(track.title)).toBeInTheDocument();
        expect(screen.getByText(track.artist)).toBeInTheDocument();
        const formattedDuration = millisToMinutesAndSeconds(track.duration);
        expect(screen.getByText(formattedDuration)).toBeInTheDocument();
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute("src", expect.stringMatching(/^\/_next\/image\?url=.+$/));
    });
});
