import { fetchJobsAPI } from "../api";

export const FETCH_JOBS_INIT = 'FETCH_JOBS_INIT'
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS'
export const FETCH_JOBS_FAILED = 'FETCH_JOBS_FAILED'

export function fetchJobs(body) {
    return dispatch => {
        dispatch({ type: FETCH_JOBS_INIT })
        fetchJobsAPI(body)
        .then(response => dispatch({ type: FETCH_JOBS_SUCCESS, response }))
        .catch(error => dispatch({ type: FETCH_JOBS_FAILED, error }))
    }
}