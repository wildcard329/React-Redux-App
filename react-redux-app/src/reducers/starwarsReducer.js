import {GET_DATA, UPDATE_CHARACTERSLIST} from '../actions'

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
        case UPDATE_CHARACTERSLIST:
            console.log(state, 'state')
            return {
                ...state,
                characters: action.payload,
                isFetchingData: false
            }
        default:
            return state;
    }
}