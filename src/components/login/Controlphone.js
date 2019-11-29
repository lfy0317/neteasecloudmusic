import React from 'react';
import { List, InputItem, Toast, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import '../../assets/css/login/controlphone.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actionCreator from '../../store/actionCreator/login';
class Controlphone extends React.Component{
    constructor(){
        super();
        this.state = {
            hasError: true,
            value: ''
        }
    }
    onErrorClick = () => {if (this.state.hasError) {Toast.info('请输入11位的手机号!')}}   
    onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
            this.setState({hasError: true})
        } else {
            this.setState({hasError: false})
        }
        this.setState({value});
    } 
    render(){
        return(
            <div className='controlphone'>
                <WhiteSpace />
                <p className='phone-tit'>未注册手机号登录后将自动创建账号</p>
                <WhiteSpace />
                <List style={{position:'relative'}}>
                    <InputItem type='phone' placeholder='请输入手机号'
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange} ref='phone'>手机号码：</InputItem>
                    <InputItem type='number' placeholder='请输入验证码' ref='code'>验证码：</InputItem>
                    <Button type="warning" inline={true} className='phone-code' disabled={this.state.hasError}
                    onClick={this.props.getCode.bind(this,Toast)}>获取验证码</Button>
                </List>
                <WhiteSpace/>
                <Button type='warning' disabled={this.state.hasError} 
                onClick={this.props.goLogin.bind(this,Toast)}>下一步</Button>
            </div>
        )
    }
}
function mapStateToProps({ loginState }) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(createForm()(Controlphone))