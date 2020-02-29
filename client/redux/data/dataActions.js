import { GET_DATA } from '../Types';
import axios from 'axios';


const endpoint = 'http://10.100.102.5:65500/api/products/';

export const getProducts = () => dispatch => {
    axios.get(endpoint)
        .then((response) => {
            dispatch({
                type: GET_DATA,
                payload: response.data
            });
        })
        .catch((e) => {
            dispatch({
                type: GET_DATA,
                payload: e
            });
        })
}

export const LoadMoreProducts = (LoadMore) => dispatch => {
    //console.log(endpoint + LoadMore.userToken + '/' + LoadMore.Counter);
    axios.get(endpoint + LoadMore.userToken + '/' + LoadMore.Counter)
        .then((response) => {
            dispatch({
                type: GET_DATA,
                payload: response.data
            });
        })
        .catch((e) => {
            dispatch({
                type: GET_DATA,
                payload: e
            });
        })
}