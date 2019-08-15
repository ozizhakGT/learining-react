import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import reduxThunk  from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
ReactDOM.render(
<Provider store={createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))}>
<App />
</Provider>, 
document.querySelector('#root'))

// Client ID for google OAuth library
// 887477037305-bb53qg2cs7vudqdb6pjj0df8mlo4263r.apps.googleusercontent.com