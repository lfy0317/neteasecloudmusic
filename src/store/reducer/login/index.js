import loginState from '../../state/login'
export default function(state = loginState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'CHANGE_ISAGREE'){
        state.isAgree = payload.isAgree
    }else if(type === 'CHANGE_EXIST'){
        state.exist = payload.exist;
        state.nickname = payload.nickname;
        state.hasPassword = payload.hasPassword;
        state.phone = payload.phone
    }
    return state;
}