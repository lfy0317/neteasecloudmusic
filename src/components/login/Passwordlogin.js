import React from 'react';
import { createForm } from 'rc-form';
import {bindActionCreators} from 'redux';
import actionCreator from '../../store/actionCreator/login';
import {connect} from 'react-redux';
import { List, InputItem, WhiteSpace, Toast, Button } from 'antd-mobile';
class Passwordlogin extends React.Component{
    constructor(){
        super();
        this.state = {
            hasError: true,
            value: ''
        }
    }
    onErrorClick = () => {if (this.state.hasError) {Toast.info('请输入6-16位可包含数字字母下划线的密码!')}}   
    onChange = (value) => {
        let v = value.replace(/\s/g, '');
        if (v.length < 6 || v.length > 16) {
            this.setState({hasError: true})
        } else {
            this.setState({hasError: false})
        }
        this.setState({value});
    } 
    render(){
        return(
            <div className='passwordlogin'>
                <WhiteSpace/>
                <List>
                    <InputItem type='password' placeholder='请输入密码'
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange} ref='password'>
                        密码：
                    </InputItem>
                </List>
                <WhiteSpace/>
                <Button type='warning' disabled={this.state.hasError} 
                style={{height:'.45rem',lineHeight:'.45rem'}}>登录</Button>
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
export default connect(mapStateToProps,mapDispatchToProps)(createForm()(Passwordlogin))