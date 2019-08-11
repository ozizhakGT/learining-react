import React from 'react';
import { connect } from 'react-redux';


class SongDetail extends React.Component {


    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Song Detail</h1>
                <p>{this.props}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail)