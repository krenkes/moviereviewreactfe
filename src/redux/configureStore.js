import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Movies } from './movies';
import { FilterSelections } from './filterSelections';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            movies: Movies,
            filterSelections: FilterSelections,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};