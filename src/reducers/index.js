import {
    FETCH_JOBS_INIT,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILED
} from '../actions'

const initialState = {
    jobs: [],
    loading: true,
    loadError: undefined
}

export default function fetchReducer(state = initialState, action){
    switch(action.type){
        case FETCH_JOBS_INIT: 
            return {
                ...state
            }
        case FETCH_JOBS_SUCCESS: 
            return {
                ...state,
                jobs: action.response,
                loading: false
            }
        case FETCH_JOBS_FAILED: 
            return {
                ...state,
                loadError: action.error
            }
        default: 
            return state
    }
}