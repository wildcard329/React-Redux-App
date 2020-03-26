import axios from "axios";

export const GET_DATA = "GET_DATA";
export const UPDATE_CHARACTERS = "UPDATE_CHARACTERS";

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios.get('https://swapi.co/api/people')
        .then(res => console.log(res))
        dispatch({ type: UPDATE_CHARACTERS, payload: res.data.results})
};