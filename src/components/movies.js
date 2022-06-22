import React from 'react';
import { SET_MOVIE_FILTER } from '../redux/ActionTypes';
import { useDispatch, useSelector } from 'react-redux';
import { industryRating, lightLanguage, heavyLanguage, racialLanguage, religiousLanguage  } from '../shared/labels';

export const FilterMovies = (movies, labels, toggleValues, key, filterSelections) => {
    // const filterSelections = useSelector(state => state.filterSelections)
    // const dispatch = useDispatch()
    console.log(industryRating)
    let industryFilter = [];
    if (key === 'industry_rating') {
        toggleValues.forEach((v, i) => v === false ? industryFilter.push(labels[i]) : 1)
    }
    else {
        filterSelections.industryCheck.forEach((v, i) => v === false ? industryFilter.push(industryRating[i]) : 1)
    }
    let heavyFilter = [];
    if (key === 'heavy_lang_index') {
        heavyFilter = toggleValues
        console.log(heavyFilter)

    }
    else {
        heavyFilter = filterSelections.heavyCheck
        // console.log(heavyFilter)
    }
    let iReturned = movies.movies.filter(function (obj) {
        for (let filter of industryFilter) {
            if (filter === obj.industry_rating) {
                return obj

            }
        }
    });
    let hReturned = iReturned.filter(function (obj) {
        let i = 0
        while (i < heavyFilter.length) {
            if (obj.heavy_lang_index[i] === "1" && heavyFilter[i] === true) {
                break
            }
            if (i === heavyFilter.length - 1) {
                return obj
            }
            i++
        }
        // for (let i = 0; i < heavyFilter.length; i++)
    });
    // console.log(hReturned)
    return hReturned
    // dispatch({ type: SET_MOVIE_FILTER, payload: displayedMovies })
}