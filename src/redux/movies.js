import * as ActionTypes from './ActionTypes';

export const Movies = (state = {
    isLoading: true,
    errMess: null,
    movies: [],
    moviesFiltered: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MOVIES:
            return { ...state, isLoading: false, errMess: null, movies: action.payload, moviesFiltered: action.payload };
            
        case ActionTypes.SET_MOVIE_FILTER:
            return { ...state, isLoading: false, errMess: null, moviesFiltered: action.payload };

        case ActionTypes.MOVIES_LOADING:
            return { ...state, isLoading: true, errMess: null, movies: [] };

        case ActionTypes.MOVIES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};