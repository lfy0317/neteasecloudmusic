import Home from '../views/Home';
import GoLogin from '../views/GoLogin';
import Login from '../views/Login'
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
    },
    {
        name:'login',
        to:'/login',
        component:Login
    }
]