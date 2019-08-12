import React from 'react';
import { connect } from 'react-redux';


class SongDetail extends React.Component {


    render() {
        if(!this.props.song) {
            return <div>Select a Song</div>
        }
        return <div>
            <h1>Details For:</h1>
            <p>Title: {this.props.song.title}</p>
            <p>Length: {this.props.song.duration}</p>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail)