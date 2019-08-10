import React from 'react';
import ApiService from '../api/api.service';
import SearchBar from './SearchBar';
import Gallary from './Gallary';

/*
API
// https://api.unsplash.com//search/photos
*/

class App extends React.Component {
    state = {images: []}

    onSearchSubmit = async terms => {
        const response = await ApiService.get('/search/photos', {
            params: {query: terms}
        })
        this.setState({images: response.data.results})
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onTest={this.onSearchSubmit} />
                <Gallary images={this.state.images} />
                </div>
        );
    }
}

export default App;