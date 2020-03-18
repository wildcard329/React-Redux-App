import axios from 'axios';

export const GET_DATA = "GET_DATA";

export const getData = () => dispatch => {
    dispatch ({ type: GET_DATA });
    axios
        .get('https://swapi.co/api/people/')
        .then(res => console.log(res))
        .catch(err => console.error('error fetching data', err))
}