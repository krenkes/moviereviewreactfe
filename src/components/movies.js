import React from 'react';
import { SET_MOVIE_FILTER } from '../redux/ActionTypes';
import { useDispatch, useSelector } from 'react-redux';

export const FilterMovies = (movies) => {
    // const movies = useSelector(state => state.movies)
    // const dispatch = useDispatch()
    let filter = 'G'
    // let displayedMovies = [];
    return movies.movies.filter(obj => filter === obj.industry_rating).map(obj => obj)
    // dispatch({ type: SET_MOVIE_FILTER, payload: displayedMovies })
}