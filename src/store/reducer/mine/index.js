import mineState from '../../state/mine';
export default function(state = mineState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'SET_PLAYLIST'){
        state.playlist = payload.playlist;
    }else if(type === 'IS_SHOW'){//歌单显示隐藏开关
        state.show = payload.show;
    }else if(type === 'IS_ADD'){//添加歌单开关
        state.add = payload.add;
        state.showBack = payload.showBack;
        state.manage = payload.manage;
    }else if(type === 'HANDDLE_SHEET'){//添加歌单并渲染
        state.add = payload.add;
        state.showBack = payload.showBack;
    }else if(type === 'IS_MANAGE'){//歌单管理
        state.manage = payload.manage;
        state.showBack = payload.showBack;
    }else if(type === 'IS_SINGLE'){//单个歌单管理
        state.sheetName = payload.sheetName;
        state.single = payload.single;
        state.sheetId = payload.sheetId;
        state.showBack = payload.showBack;
    }else if(type === 'DELETE_SHEETEJECT'){//删除歌单开关
        state.deleteEject = payload.deleteEject;
        state.single = payload.single;
    }else if(type === 'DELETE_SHEET'){//删除歌单确认
        state.deleteEject = payload.deleteEject;
        state.showBack = payload.showBack;
    }else if(type === 'CLOSE_ALL'){//透明背景开关
        state.add = payload.add;
        state.manage = payload.manage;
        state.single = payload.single;
        state.showBack = payload.showBack;
        state.deleteEject = payload.deleteEject;
    }else if(type === 'OPEN_SHEETLIST'){//单个歌单歌曲列表开关
        state.toSinglelist = payload.toSinglelist;
        state.sheetId = payload.sheetId;
    }
    return state;
}
