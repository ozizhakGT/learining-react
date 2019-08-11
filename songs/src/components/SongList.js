import React from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../actions';


class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <li key={song.title} style={{padding: '15px', listStyle: 'none', background: 'orange', margin: '5px', width: '200px', textAlign: 'center'}}>
                    <p>{song.title}</p>
                    <button className="ui button primary">Select Song</button>
                </li>
            )
        });
    }

    render() {
        return (
            <div style={{margin: '40px'}}>
                <ul>{this.renderList()}</ul>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {songs: state.songs};
} 

export default connect(
    mapStatetoProps,
    {selectSong}
    )(SongList);