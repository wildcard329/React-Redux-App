import {GET_DATA, UPDATE_CHARACTERS} from '../actions'

const initialState = {
    characters: [],
    isFetchingData: false
}

export const starwarsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true
            };
        case UPDATE_CHARACTERS:
            return {
                ...state,
                characers: action.payload
            }
        default:
            return state;
    }
}