import mineState from '../../state/mine';
export default function(state = mineState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'SET_PLAYLIST'){
        state.playlist = payload.playlist;
    }else if(type === 'IS_SHOW'){
        state.show = payload.show;
    }else if(type === 'IS_ADD'){
        state.add = payload.add;
        state.showBack = payload.showBack;
        state.manage = payload.manage;
    }else if(type === 'HANDDLE_SHEET'){
        state.add = payload.add;
        state.showBack = payload.showBack;
    }else if(type === 'IS_MANAGE'){
        state.manage = payload.manage;
        state.showBack = payload.showBack;
    }else if(type === 'IS_SINGLE'){
        state.single = payload.single;
        state.showBack = payload.showBack;
    }else if(type === 'CLOSE_ALL'){
        state.add = payload.add;
        state.manage = payload.manage;
        state.single = payload.single;
        state.showBack = payload.showBack;
    }
    // console.log(state)
    return state;
}