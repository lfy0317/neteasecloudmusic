import searchState from '../../state/search';
export default function(state=searchState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === "CHANGE_KEY_WORDS"){
        state.keyWords = payload.keyWords
    }else if(type === "CHANGE_HOT_SEARCH"){
        state.hotSearch = payload.hotSearch
    }
    return state
}