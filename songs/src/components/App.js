import React from 'react';
import ReactDOM from 'react-dom';
import SongList from './SongList';
import SongDetail from './SongDetail';


class App extends React.Component {



    render() {
        return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <SongList />
            <SongDetail />
        </div>
        )
    }
}

export default App;