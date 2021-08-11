import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions/index';

const initialState = {
    // dogs: [],
    dogs: '',
    err: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return ({
                ...state
            });
        case FETCH_SUCCESS:
            return ({
                ...state,
                dogs: action.payload
            });
        case FETCH_FAIL:
            return ({
                ...state,
                err: action.payload
            });
        default:
            return state;
    }
}