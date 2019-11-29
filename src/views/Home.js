import React from 'react';
import '../assets/css/home/home.scss';
import Tabbar from '../components/home/Tabbar';

class Home extends React.Component{
    render(){
        return (
            <div className='home'>
                <Tabbar></Tabbar>
            </div>
        )
    }
}

export default Home

