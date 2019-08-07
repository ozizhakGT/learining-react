import React from 'react';
import ReactDOM from 'react-dom';
import SeassonDisplay from './SeassonDisplay';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {lat: null};
    }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {},
            (err) => console.log(err)
        );


        return <div > Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render( <App /> , document.getElementById('root'));