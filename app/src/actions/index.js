import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';


export const getDogs = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        // axios.get('https://dog.ceo/api/breed/pyrenees/images')
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                dispatch(fetchSuccess(res.data.message));
            })
            .catch(err => {
                dispatch(fetchFail(err));
            })
    }
}

export const fetchStart = () => {
    return ({type: FETCH_START});
}

export const fetchSuccess = (success) => {
    return ({type: FETCH_SUCCESS, payload: success});
}

export const fetchFail = (err) => {
    return ({type: FETCH_FAIL, payload: err});
}