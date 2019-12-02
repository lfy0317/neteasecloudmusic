import loginState from '../../state/login'
export default function(state = loginState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'CHANGE_ISAGREE'){
        state.isAgree = payload.isAgree
    }else if(type === 'CHANGE_EXIST'){
        state.exist = payload.exist;
        state.phone = payload.phone
    }else if(type === "CHANGE_LOGIN_STATUS"){
        state.userId = payload.userId
    }else if(type === "CHANGE_USERINFO"){
        state.userInfo = payload.userInfo
    }else if(type === "OUT_LOGIN"){
        state.isAgree = payload.isAgree;
        state.phone = payload.phone;
        state.exist = payload.exist;
        state.userInfo = payload.userInfo;
        state.userId = payload.userId
    }
    return state;
}