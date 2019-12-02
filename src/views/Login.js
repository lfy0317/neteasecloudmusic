import React from 'react';
import '../assets/css/login/login.scss';
import { NavBar, Icon } from 'antd-mobile';
import Controlphone from '../components/login/Controlphone';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actionCreator from '../store/actionCreator/login';
import Passwordlogin from '../components/login/Passwordlogin'
class Login extends React.Component {
    render() {
        return (
            <div className='login'>
                <div className='nav'>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" style={{ color: "#000" }} />}
                    onLeftClick={() => this.props.history.push('/gologin')}>
                    {this.props.location.state.type === 1 ? '手机登录' : '网易账号登录'}
                </NavBar>
                </div>
                {this.props.exist === 0?<Controlphone></Controlphone>:<Passwordlogin router={this}></Passwordlogin>}
            </div>
        )
    }
}
function mapStateToProps({ loginState }) {
    return {
        exist:loginState.exist
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)