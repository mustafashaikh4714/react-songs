import { combineReducers } from 'redux'
const songsReducer = () => {
  return [
    { title: "Sia's cheap thrills", duration: '4:15' },
    { title: "Alan Walker's Alone", duration: '3:45' },
    { title: "Imagine Dragon's Believer", duration: '3:38' },
    { title: 'Camila Cabello Havana', duration: '4:25' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
