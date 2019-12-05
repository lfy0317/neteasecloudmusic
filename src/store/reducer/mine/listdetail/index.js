import mineState from '../../../state/mine/listdetail';
export default function(state = mineState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'GET_SONGLIST'){
        state.tracks = payload.tracks;
        state.playlist = payload.playlist;
    }
    // else if(type === 'IS_SHOW'){//歌单显示隐藏开关
    //     state.show = payload.show;
    // }
    return state;
}
