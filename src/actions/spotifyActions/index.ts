"use server";

import spotifyAxios from "@/lib/spotifyAxios";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AxiosError } from "axios";

type Params = {
  limit?: number;
  offset?: number;
  ids?: string;
  seed_artists?: string;
  seed_genres?: string;
  seed_tracks?: string;
};

type PlaylistsParams = {
  limit: number;
  offset: number;
};

type ArtistsListParams = {
  limit?: number;
  offset?: number;
  ids: string;
};

type RecommendationsParams = {
  limit: number;
  offset: number;
};

/**
 * Helper function to get Spotify Access Token from session.
 */
async function getSpotifyAccessToken(): Promise<string> {
  const session = await getServerSession(authOptions);
  const accessToken = session?.user?.accessToken;

  if (!accessToken) {
    throw new Error("Unauthorized: Unable to fetch Spotify access token.");
  }

  return accessToken;
}

/**
 * Type guard to check if an error is an Axios error.
 */
function isAxiosError(error: unknown): error is AxiosError {
  return typeof error === "object" && error !== null && "isAxiosError" in error;
}

/**
 * Helper function to make Spotify API requests with axios.
 */
async function spotifyApiRequest(
  endpoint: string,
  params: Params = {},
  method: "GET" | "POST" = "GET"
) {
  const accessToken = await getSpotifyAccessToken();

  try {
    const response = await spotifyAxios.request({
      url: endpoint,
      method,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params,
    });

    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error(
        `Error in Spotify API request to ${endpoint}:`,
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data?.error?.message || `Failed to fetch data from ${endpoint}.`
      );
    } else {
      console.error(`Unexpected error: ${error}`);
      throw new Error("An unexpected error occurred.");
    }
  }
}

/**
 * Fetch featured playlists from Spotify.
 */
export async function fetchPlaylists(params: PlaylistsParams) {
  return spotifyApiRequest("/browse/featured-playlists", {
    limit: params.limit,
    offset: params.offset,
  });
}

/**
 * Fetch a list of artists by IDs.
 */
export async function fetchArtistsList(params: ArtistsListParams) {
  return spotifyApiRequest("/artists", {
    ids: params.ids,
  });
}

/**
 * Fetch details for a specific artist.
 */
export async function fetchArtist(id: string) {
  return spotifyApiRequest(`/artists/${id}`);
}

/**
 * Fetch albums for a specific artist.
 */
export async function fetchArtistAlbums(id: string) {
  return spotifyApiRequest(`/artists/${id}/albums`, {
    limit: 15,
  });
}

/**
 * Fetch top tracks for a specific artist.
 */
export async function fetchArtistTopTracks(id: string) {
  return spotifyApiRequest(`/artists/${id}/top-tracks`, {
    limit: 15,
  });
}

/**
 * Fetch new releases or recommendations from Spotify.
 */
export async function fetchRecommendations(params: RecommendationsParams) {
  return spotifyApiRequest("/browse/new-releases", {
    limit: params.limit,
    offset: params.offset,
    seed_artists: "4NHQUGzhtTLFvgF5SZesLK",
    seed_genres: "pop",
    seed_tracks: "0c6xIDDpzE81m2q797ordA",
  });
}
