import ApiService from '../api/api.service'

export const fetchPosts = () =>  async dispatch => {
        const response = await ApiService.get('/posts')

        dispatch({
                type: 'FETCH_POSTS',
                payload: response.data
            });
    }