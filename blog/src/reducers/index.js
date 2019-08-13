import { combineReducers } from 'redux';
import postReducer from './postReducer';
import usersReducers from './usersReducers'




const reducers = combineReducers({
    posts: postReducer,
    users: usersReducers
})

export default reducers;