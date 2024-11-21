import { render, screen } from '@testing-library/react';
import PlaylistCard from '@/components/molecules/PlaylistCard';

const mockPlaylist = {
    imageUrl: 'https://example.com/image.jpg',
    title: 'My Playlist',
    href: '/playlist/1',
    description: 'This is a test playlist description.',
    tracks: 10,
};

describe('PlaylistCard', () => {
    it('should render the playlist card with correct data', () => {
        render(
            <PlaylistCard
                imageUrl={mockPlaylist.imageUrl}
                title={mockPlaylist.title}
                href={mockPlaylist.href}
                description={mockPlaylist.description}
                tracks={mockPlaylist.tracks}
            />
        );
        const image = screen.getByAltText(mockPlaylist.title);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", expect.stringMatching(/^\/_next\/image\?url=.+$/));
        expect(screen.getByText(mockPlaylist.title)).toBeInTheDocument();
        expect(screen.getByText(mockPlaylist.description)).toBeInTheDocument();
        expect(screen.getByText(`${mockPlaylist.tracks} Tracks`)).toBeInTheDocument();
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', mockPlaylist.href);
    });
});
