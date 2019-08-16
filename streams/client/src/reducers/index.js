import { combineReducers, } from 'redux';
import { reducer as fromReducer } from 'redux-form';
import authReducer from './AuthReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form: fromReducer,
    streams: streamReducer
})