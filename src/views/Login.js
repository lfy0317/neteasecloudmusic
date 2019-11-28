import React from 'react';
import '../assets/css/login/login.scss';
import { NavBar, Icon } from 'antd-mobile';
import Controlphone from '../components/login/Controlphone'
class Login extends React.Component {
    render() {
        return (
            <div className='login'>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" style={{ color: "#000" }} />}
                    onLeftClick={() => this.props.history.push('/gologin')}>
                    {this.props.location.state.type === 1 ? '手机登录' : '网易账号登录'}
                </NavBar>
                <Controlphone></Controlphone>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props)
    }
}
export default Login