import initState from '../../state/init'

export default function(state = initState,action){
    state = JSON.parse(JSON.stringify(state));
    return state;
}