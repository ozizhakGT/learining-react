import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

ReactDOM.render(
<Provider store={createStore(reducers)}>
<App />
</Provider>, 
document.querySelector('#root'))

// Client ID for google OAuth library
// 887477037305-bb53qg2cs7vudqdb6pjj0df8mlo4263r.apps.googleusercontent.com