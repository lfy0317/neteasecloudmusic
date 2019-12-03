import {combineReducers} from 'redux';
<<<<<<< Updated upstream
import loginState from './login';
import searchState from './search';
import mineState from './mine'
export default combineReducers({
    loginState,
    searchState,
    mineState
=======
import loginState from './login'
import discoverReducer from "./discover"
export default combineReducers({
    loginState,
    discoverReducer
>>>>>>> Stashed changes
})