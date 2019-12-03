import discoverState from '../../state/discover'
export default function(state = discoverState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'GET_MUSIC_LIST'){
       state.songSheet=payload.data;
    }else if(type === "GET_NEW_SONG"){
        state.newSong=payload.data;
    }else if(type === "GET_MUSIC"){
        state.music=payload.data
    }

    return state;
}