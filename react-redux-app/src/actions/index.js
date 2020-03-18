import axios from 'axios';

export const GET_DATA = "GET_DATA";
export const UPDATE_CHARACTERSLIST = 'UPDATE_CHARACTERSLIST';

export const getData = () => dispatch => {
    dispatch ({ type: GET_DATA });
    axios
        .get('https://swapi.co/api/people/')
        .then(res => {
            console.log(res.data);
            dispatch({ type: UPDATE_CHARACTERSLIST, payload: res.data.results });
        })
        .catch(err => console.error('error fetching data', err))
}