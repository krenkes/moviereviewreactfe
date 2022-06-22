import * as ActionTypes from './ActionTypes';

export const FilterSelections = (state = {
    industryCheck: [false, false, false, false],
    lightCheck: [],
    heavyCheck: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    racialCheck: [],
    religiousCheck: []

}, action) => {
    switch (action.type) {
        case ActionTypes.INDUSTRY_CHECK:
            return { ...state, industryCheck: action.payload };
        case ActionTypes.LIGHT_CHECK:
            return { ...state, lightCheck: action.payload };
        case ActionTypes.HEAVY_CHECK:
            return { ...state, heavyCheck: action.payload };
        case ActionTypes.RACIAL_CHECK:
            return { ...state, racialCheck: action.payload };
        case ActionTypes.RELIGIOUS_CHECK:
            return { ...state, religiousCheck: action.payload };
        default:
            return state;
    }
};