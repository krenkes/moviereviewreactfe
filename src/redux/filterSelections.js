import * as ActionTypes from './ActionTypes';

export const FilterSelections = (state = {
    general: [],
    lightCheck: [],
    heavyCheck: [],
    racialCheck: [],
    religiousCheck: []

}, action) => {
    switch (action.type) {
        case ActionTypes.GENERAL_CHECK:
            return { ...state, general: action.payload };

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