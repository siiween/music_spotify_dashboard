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
        console.log(error);
        console.error("Error fetching playlists:", error.response?.data || error.message);
        throw new Error(
            error.response?.data?.error?.message || "Failed to fetch playlists."
        );
    }
}




type ArtistsListParams = {
    limit?: number;
    offset?: number;
};

export async function fetchArtistsList(params: ArtistsListParams) {
  
    const session = await getServerSession(authOptions);
    const accessToken = session?.user?.accessToken;
    if (!accessToken) {
        throw new Error("Unauthorized: Unable to fetch Spotify access token.");
    }
    try {
        const response = await spotifyAxios.get("/me/following", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                limit: params.limit || 100,
                offset: params.offset || 0,
                type: "artist",
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
