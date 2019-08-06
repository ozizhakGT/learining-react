import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const a = {text: 'Text'};
    const b = ['first', 'second'];
    return <div style={{color: 'red'}} className='div1'>{a.text}</div>;
};


ReactDOM.render(<App />, document.querySelector('#root'));