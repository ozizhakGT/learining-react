import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'If I Was Ready', duration: '4:05'},
        {title: 'Smell Like Teen Spirit', duration: '5:15'},
        {title: 'smoke On The Water', duration: '3:42'},
        {title: 'I Want It That Way', duration: '3:00'}
    ];
};


const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});