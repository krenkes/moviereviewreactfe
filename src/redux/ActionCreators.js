import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';



export const fetchMovies = () => dispatch => {
    dispatch(moviesLoading());

    return fetch(baseUrl + 'reviews', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',

    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(movies => dispatch(addMovies(movies)))
        .catch(error => dispatch(moviesFailed(error.message)));
};

export const moviesLoading = () => ({
    type: ActionTypes.MOVIES_LOADING
});

export const moviesFailed = errMess => ({
    type: ActionTypes.MOVIES_FAILED,
    payload: errMess
});

export const addMovies = movies => ({
    type: ActionTypes.ADD_MOVIES,
    payload: movies
});

export const lightCheck = light => ({
    type: ActionTypes.LIGHT_CHECK,
    payload: light
});


export const setMovieFilter = moviesFiltered => ({
    type: ActionTypes.SET_MOVIE_FILTER,
    payload: moviesFiltered
});
