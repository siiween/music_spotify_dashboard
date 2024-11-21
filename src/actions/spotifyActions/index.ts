"use server";

import spotifyAxios from "@/lib/spotifyAxios";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


type PlaylistsParams = {
    limit: number;
    offset: number;
};

export async function fetchPlaylists(params: PlaylistsParams) {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.accessToken;
    if (!accessToken) {
        throw new Error("Unauthorized: Unable to fetch Spotify access token.");
    }
    try {
        const response = await spotifyAxios.get("/browse/featured-playlists", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                limit: params.limit,
                offset: params.offset,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error("Error fetching playlists:", error.response?.data || error.message);
        throw new Error(
            error.response?.data?.error?.message || "Failed to fetch playlists."
        );
    }
}




type ArtistsListParams = {
    limit?: number;
    offset?: number;
    ids: string;
};

export async function fetchArtistsList(params: ArtistsListParams) {

    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.accessToken;
    if (!accessToken) {
        throw new Error("Unauthorized: Unable to fetch Spotify access token.");
    }
    try {
        const response = await spotifyAxios.get("/artists", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                ids: params.ids,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error("Error fetching artist:", error.response?.data || error.message);
        throw new Error(
            error.response?.data?.error?.message || "Failed to fetch artists."
        );
    }
}




export async function fetchArtist(id: string) {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.accessToken;
    if (!accessToken) {
        throw new Error("Unauthorized: Unable to fetch Spotify access token.");
    }
    try {
        const response = await spotifyAxios.get(`/artists/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error("Error fetching artist: " + id, error.response?.data || error.message);
        throw new Error(
            error.response?.data?.error?.message || "Failed to fetch artist: " + id
        );
    }
}

export async function fetchArtistAlbums(id: string) {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.accessToken;
    if (!accessToken) {
        throw new Error("Unauthorized: Unable to fetch Spotify access token.");
    }
    try {
        const response = await spotifyAxios.get(`/artists/${id}/albums`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                limit:15,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error("Error fetching artist albums: " + id, error.response?.data || error.message);
        throw new Error(
            error.response?.data?.error?.message || "Failed to fetch artist albums: " + id
        );
    }
}


export async function fetchArtistTopTracks(id: string) {
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.accessToken;
    if (!accessToken) {
        throw new Error("Unauthorized: Unable to fetch Spotify access token.");
    }
    try {
        const response = await spotifyAxios.get(`/artists/${id}/top-tracks`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                limit:15,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error("Error fetching artist top-tracks: " + id, error.response?.data || error.message);
        throw new Error(
            error.response?.data?.error?.message || "Failed to fetch artist top-tracks: " + id
        );
    }
}