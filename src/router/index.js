import React from 'react'
import Home from '../views/Home';
import GoLogin from '../views/GoLogin';
import Login from '../views/Login';
import Search from '../views/Search';
import Music from "../views/Music";
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
    },
    {
        name:'search',
        to:'/search',
        component:Search
    },
    {
        name:'music',
        to:'/music',
        component:Music
    },
    {
        name:'*',
        to:'*',
        component:()=><div>404页面丢失...</div>
    }
]