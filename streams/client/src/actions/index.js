import ApiService from '../services/api.service';

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};

// API ACTIONS
export const createStream = formValues => async dispatch => {
    const response = await ApiService.post('/streams', formValues);

    dispatch({
        type: 'CREATE_STREAM',
        payload: response.data
    })
}
export const fetchStreams = () => async dispatch => { 
    const response = await ApiService.get('/streams');

    dispatch({
        type: 'FETCH_STREAMS',
        payload: response.data
    })
}
export const fetchStream = id => async dispatch => { 
    const response = await ApiService.get(`/streams/${id}`);

    dispatch({
        type: 'FETCH_STREAM',
        payload: response.data
    })
}
export const deleteStream = id => async dispatch => { 
    await ApiService.delete(`/streams/${id}`);

    dispatch({
        type: 'DELETE_STREAMS',
        payload: id
    })
}
export const editStreams = (id, formValues) => async dispatch => { 
    const response = await ApiService.put(`/streams${id}`, formValues);

    dispatch({
        type: 'FETCH_STREAMS',
        payload: response.data
    })
}