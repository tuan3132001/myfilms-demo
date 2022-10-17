import axios from "axios";
import * as Types from '../types';

const API_KEY = '7779f5121dfcd89efe5276d9c1f8e8a0';
const BASE_URL = ' https://api.themoviedb.org/3';

export const getNetflixOriginal = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({ type: Types.GET_NETFLIX_ORIGINAL, payload: result.data.results })
    } catch (error) {
        console.Log('Get Netflix Api error: ', error);
    }
}

export const getTrendingMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
        );
        dispatch({ type: Types.GET_TRENDING_MOVIES, payload: result.data.results })
    } catch (error) {
        console.Log('Get Trending Api error: ', error);
    }
}

export const getTopRatedMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
        );
        dispatch({ type: Types.GET_TOP_RATED_MOVIES, payload: result.data.results })
    } catch (error) {
        console.Log('Get Top Rated Api error: ', error);
    }
}

export const getActionMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        );
        dispatch({ type: Types.GET_ACTION_MOVIES, payload: result.data.results })
    } catch (error) {
        console.Log('Get Action Api error: ', error);
    }
}

export const getComedyMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        );
        dispatch({ type: Types.GET_COMEDY_MOVIES, payload: result.data.results })
    } catch (error) {
        console.Log('Get Comedy Api error: ', error);
    }
}

export const getHorrorMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        );
        dispatch({ type: Types.GET_HORROR_MOVIES, payload: result.data.results })
    } catch (error) {
        console.Log('Get Horror Api error: ', error);
    }
}

export const getRomanceMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        );
        dispatch({ type: Types.GET_ROMANCE_MOVIES, payload: result.data.results })
    } catch (error) {
        console.Log('Get Romance Api error: ', error);
    }
}

export const getDocumentaries = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
        );
        dispatch({ type: Types.GET_DOCUMENTARIES, payload: result.data.results })
    } catch (error) {
        console.Log('Get Documentaries Api error: ', error);
    }
}

export const setMovieDetail = (movie) => dispatch => {
    dispatch({ type: Types.SET_MOVIE_DETAIL, payload: movie })
}

export const getSearchMovies = (keywords) => async (dispatch) => {
    try {
        const result = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
        )
        dispatch({ type: Types.GET_SEARCH_MOVIES, payload: result.data.results });
    } catch (error) {
        console.Log('Get Search Movies error: ', error);
    }
}