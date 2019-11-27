import Home from '../views/Home';
import GoLogin from '../views/GoLogin'
export default[
    {
        name:'home',
        to:'/',
        exact:true,
        component:Home
    },
    {
        name:'gologin',
        to:'/gologin',
        component:GoLogin
    }
]