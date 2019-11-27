import loginState from '../../state/login'
export default function(state = loginState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === 'CHANGE_ISAGREE'){
        state.isAgree = payload.isAgree
    }
    return state;
}