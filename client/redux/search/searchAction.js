import { SEARCH } from '../Types';
import axios from 'axios';


const endpoint = 'http://10.100.102.5:65500/api/products/';

export const SearchData = (SearchText) => dispatch => {
    //console.log(endpoint + SearchText);
    axios.get(endpoint + SearchText)
        .then((response) => {
            //console.log('response is ...')
            //console.log(response.data);
            dispatch({
                type: SEARCH,
                payload: response.data
            });
        })
        .catch((e) => {
            dispatch({
                type: SEARCH,
                payload: e
            });
        })
}