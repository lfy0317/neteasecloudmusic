import React from 'react';
import '../assets/css/login/gologin.scss';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import actionCreator from '../store/actionCreator/login';

class GoLogin extends React.Component{
    render(){
        return(
            <div className='login'>
                <span>&times;</span>
                <div className='login-logo'>
                    {/* img elements must have an alt prop, either with meaningful text, 
                        or an empty string for decorative images.eslint(jsx-a11y/alt-text) */}
                    {/* <img src={require('../assets/images/login-logo.png')} alt="图片加载中..."/> */}
                    <i className='iconfont'>&#xe7ee;</i>
                </div>
                <div className='go-login'>
                    <Link
                        className='phone-login'
                        to={this.props.isAgree ? { pathname: '/login', state: { type: 1 } } : '/gologin'}
                        >
                        手机号登录</Link>
                    <ul className='third-party-login'>
                        <Link to={'/gologin'} className="li">
                            <i className='iconfont'>&#xe641;</i></Link>
                        <Link to={'/gologin'} className="li">
                            <i className='iconfont'>&#xe602;</i></Link>
                        <Link to={'/gologin'} className="li">
                            <i className='iconfont'>&#xe647;</i></Link>
                        <Link
                            to={this.props.isAgree ? { pathname: '/login', state: { type: 5 } } : '/gologin'}
                            className="li">
                            <i className='iconfont'>&#xe644;</i>
                        </Link>
                    </ul>
                    <p className='is-agree'>
                        <i className={this.props.isAgree ? 'iconfont icon-zhengque-kongxin-yuanxing' : 'iconfont icon-weixuan-kongxin-yuanxing'}
                            onClick={this.props.changeGoLogin.bind(this,!this.props.isAgree)}></i> 同意
                        {/* {eslint-disable-next-line jsx-a11y/anchor-has-content} */}
                        <a href='https://www.baidu.com'>《服务条款》</a>
                        <a href='https://www.baidu.com'>《隐私政策》</a>
                        <a href='https://www.baidu.com'>《儿童隐私政策》</a>
                    </p>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ loginState }) {
    return {
        isAgree: loginState.isAgree
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator,dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(GoLogin)