import {combineReducers} from 'redux';
import loginState from './login';
import searchState from './search';
import mineState from './mine';
import discoverReducer from "./discover"
export default combineReducers({
    loginState,
    searchState,
    mineState,
    discoverReducer
})