export const selectedSong = (song) => {
    return {
        type: 'SONG_SELECT',
        payload: song
    }
}