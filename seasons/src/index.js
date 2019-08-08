import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    state = {lat: null, errorMassege: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMassege: err.message})
        );
    }

    currentContext() {
        if(this.state.errorMassege && !this.state.lat) {
            return <SeasonDisplay errorMassege={this.state.errorMassege} />
        }
        if(!this.state.errorMassege && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner massege="Click allow for locate you"/>
    }

    render() {
        return (
            <div>
                {this.currentContext()}
            </div>
        );
    }
}

ReactDOM.render( <App /> , document.getElementById('root'));