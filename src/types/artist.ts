export interface Artist {
    external_urls: {
        spotify: string;
    };
    followers: {
        href: string | null; 
        total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: "artist";
    uri: string;
}

export interface Image {
    url: string;
    height: number;
    width: number;
}


export interface Track {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
        isrc: string;
        ean: string;
        upc: string;
    };
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    is_playable: boolean;
    linked_from?: object; 
    restrictions?: {
        reason: string;
    };
    name: string;
    popularity: number;
    preview_url: string | null; 
    track_number: number;
    type: "track"; 
    uri: string;
    is_local: boolean; 
}

export interface Album {
    album_type: string; 
    total_tracks: number; 
    available_markets: string[]; 
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: Image[]; 
    name: string;
    release_date: string; 
    release_date_precision: "year" | "month" | "day"; 
    restrictions?: {
        reason: string;
    };
    type: "album";
    uri: string;
    artists: Artist[]; 
}


export interface Playlist {
    collaborative: boolean;
    description: string;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: Owner;
    public: boolean | null;
    snapshot_id: string;
    tracks: {
        href: string;
        total: number;
    };
    type: string;
    uri: string;
}

export interface Owner {
    external_urls: {
        spotify: string;
    };
    followers: {
        href: string | null;
        total: number;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
}