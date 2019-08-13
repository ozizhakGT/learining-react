import ApiService from '../api/api.service';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
        await dispatch(fetchPosts());
        _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};
const fetchPosts = () => async dispatch => {
        const response = await ApiService.get('/posts')

        dispatch({
                type: 'FETCH_POSTS',
                payload: response.data
        });
}

const fetchUser = (id) => async dispatch => {
        const response = await ApiService.get(`/users/${id}`);

        dispatch({
                type: 'FETCH_USER',
                payload: response.data
        })
}