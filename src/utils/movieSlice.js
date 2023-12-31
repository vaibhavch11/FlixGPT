import {createSlice} from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        PopularMovies : null,
        trendingMovies : null,
        upcomingMovies : null
    },
    reducers: {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.PopularMovies = action.payload
        },
        addTrendingMovie : (state,action )=> {
          state.trendingMovies = action.payload
        },
        addUpcomingMovies : (state,action) => {
            state.upcomingMovies = action.payload
        }
    }
})

export const {addNowPlayingMovies,addPopularMovies,addTrendingMovie,addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
