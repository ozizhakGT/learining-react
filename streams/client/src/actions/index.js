import ApiService from '../services/api.service';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    CREATE_STREAM,
    DELETE_STREAM
}
from './types'

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

// API ACTIONS
export const createStream = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await ApiService.post('/streams', {...formValues, userId});

    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
    history.push('/');
}
export const fetchStreams = () => async dispatch => { 
    const response = await ApiService.get('/streams');

    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
}
export const fetchStream = id => async dispatch => { 
    const response = await ApiService.get(`/streams/${id}`);

    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
}
export const deleteStream = id => async dispatch => { 
    await ApiService.delete(`/streams/${id}`);

    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
    history.push('/');
}
export const editStream = (id, formValues) => async dispatch => { 
    const response = await ApiService.patch(`/streams/${id}`, formValues);

    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
    history.push('/')
}