import React from 'react';
import ReactDOM from 'react-dom';
import SeassonDisplay from './SeassonDisplay';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {lat: null, errorMassege: ''};
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude});
            },
            (err) => {
                this.setState({errorMassege: err.message})
            }
        );
    }

    render() {
        if(this.state.errorMassege && !this.state.lat) {
            return <div>Error: {this.state.errorMassege}</div>
        }
        if(!this.state.errorMassege && this.state.lat) {
            return <div>Latittude: {this.state.lat}</div>
        }
        return <div>Loading...</div>
    }
}

ReactDOM.render( <App /> , document.getElementById('root'));