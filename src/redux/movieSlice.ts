import { createSlice } from "@reduxjs/toolkit";

export interface NowPlayingMovieType {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: OriginalLanguage;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export enum OriginalLanguage {
    En = "en",
    Fr = "fr",
    It = "it",
}

export interface UserMetaInto {
    nowPlayingMovie?: NowPlayingMovieType[];
    trailerMovie?: GetMovieFromUsingIdRespTypeDatum
}



export interface GetMovieFromUsingIdRespTypeDatum {
    name: string;
    key: string;
    size: number;
    type: string;
    official: boolean;
    published_at: Date;
    id: string;
}


const initialState: UserMetaInto
    = {}

export const movieSlice = createSlice({
    name: 'movie-slice',
    initialState,
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovie = action.payload

        },
        addTrailerMovies: (state, action) => {
            state.trailerMovie = action.payload

        },

    }
})

export const { addNowPlayingMovies, addTrailerMovies } = movieSlice.actions
