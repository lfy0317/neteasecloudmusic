import React from 'react';
import Tabbar from '../components/home/Tabbar';

class Home extends React.Component{
    render(){
        return (
            <div className='home'>
                <Tabbar router={this}></Tabbar>
            </div>
        )
    }
}

export default Home

