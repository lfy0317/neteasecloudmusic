import React from 'react';
import { NavBar, Button, WhiteSpace, } from 'antd-mobile';
import actionCreator from '../store/actionCreator/login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Account extends React.Component {
    render() {
        return (
            <div className='account'>
                <div className='nav' style={{ position: "fixed", width: '100%', zIndex: '1' }}>
                    <NavBar style={{ background: '#fff', height: '.4rem', color: '#000' }}
                        icon={<i className="iconfont icon-saoyisao" style={{ fontSize: '.2rem' }}></i>}>
                        账号</NavBar>
                </div>
                <div style={{ background: '#fff', paddingTop: '.4rem' }}>
                    <div style={{ marginBottom: '.16rem', display: this.props.userId ? 'none' : 'block' }}>
                        <p style={{ marginTop: '.1rem' }}>登录网易云音乐</p>
                        <p>手机电脑多端同步，尽享海量高品质音乐</p>
                        <Button onClick={() => this.props.router.props.history.push('/gologin')}
                            style={{
                                height: '.36rem', lineHeight: '.36rem', margin: '.1rem',
                                borderColor: '#ddd'
                            }}>立即登录</Button>
                    </div>
                    <div style={{
                        marginBottom: '.16rem', display: this.props.userId ? 'block' : 'none',
                        height: '1.3rem',paddingTop: '.2rem'
                    }}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <div style={{width:'.55rem',height:'.55rem',overflow:'hidden',borderRadius:'50%',
                            margin:'0rem .1rem 0rem .2rem'}}>
                                <img src={this.props.userInfo.profile ? this.props.userInfo.profile.avatarUrl : ''}
                                style={{width:'100%',height:'100%'}}
                                alt='加载中...' />
                            </div>
                            <div style={{width:'2.87rem',display:'flex',justifyContent:'space-between'}}>
                                <div style={{textAlign:'left'}}>
                                    <p>{this.props.userInfo.profile?this.props.userInfo.profile.nickname : ''}</p>
                                    <i style={{fontStyle:'italic'}}>Lv.{this.props.userInfo.level}</i>
                                </div>
                                <span style={{marginRight:'.15rem'}}><i className='iconfont icon-redian1'></i>签到</span>
                            </div>
                        </div>
                        <div>
                            <ul style={{display:'flex',paddingTop:'.15rem'}}>
                                <li style={{width:'.93rem',height:'.38rem',display:'flex',
                                flexDirection:'column'}}><i>0</i><span>动态</span></li>
                                <li style={{width:'.93rem',height:'.38rem',display:'flex',
                                flexDirection:'column'}}><i>4</i><span>关注</span></li>
                                <li style={{width:'.93rem',height:'.38rem',display:'flex',
                                flexDirection:'column',}}><i>0</i><span>粉丝</span></li>
                                <li style={{width:'.93rem',height:'.38rem',display:'flex',
                                flexDirection:'column',}}><i className='iconfont icon-mulu'></i>
                                <span>编辑资料</span></li>
                            </ul>
                        </div>
                    </div>
                    <div
                        style={{
                            width: '3.47rem', background: '#2c2c2c', height: '.46rem', margin: '0 auto',
                            borderRadius: '.08rem .08rem 0 0', color: '#ffe9e5', display: 'flex',
                            justifyContent: 'space-around'
                        }}>
                        <div style={{
                            textAlign: 'left', display: 'flex', flexDirection: 'column', textIndent: ".2rem",
                            justifyContent: 'center', width: '1.73rem'
                        }}>
                            <p>开通黑胶VIP</p>
                            <span>新客仅5元></span>
                        </div>
                        <div style={{
                            textAlign: 'left', display: 'flex', flexDirection: 'column', textIndent: ".2rem",
                            justifyContent: 'center', borderLeft: '.01rem solid #ffe9e5', width: '1.73rem'
                        }}>
                            <p>会员中心</p>
                            <span>VIP超享12项特权</span>
                        </div>
                    </div>
                    <div>
                        <ul style={{
                            height: '.88rem', display: 'flex', justifyContent: 'space-around',
                            alignItems: 'center', borderTop: '.01rem solid #f2f2f2'
                        }}>
                            <li style={{ display: 'flex', flexDirection: 'column', fontSize: '.12rem' }}>
                                <i className='iconfont icon-xinxi' style={{ fontSize: '.22rem', color: '#ef726c' }}></i>
                                <span>消息</span>
                            </li>
                            <li style={{ display: 'flex', flexDirection: 'column', fontSize: '.12rem' }}>
                                <i className='iconfont icon-erji' style={{ fontSize: '.22rem', color: '#ef726c' }}></i>
                                <span>商城</span>
                            </li>
                            <li style={{ display: 'flex', flexDirection: 'column', fontSize: '.12rem' }}>
                                <i className='iconfont icon-yule' style={{ fontSize: '.22rem', color: '#ef726c' }}></i>
                                <span>演出</span>
                            </li>
                            <li style={{ display: 'flex', flexDirection: 'column', fontSize: '.12rem' }}>
                                <i className='iconfont icon-yifu' style={{ fontSize: '.22rem', color: '#ef726c' }}></i>
                                <span>个性装扮</span>
                            </li>
                        </ul>
                    </div>
                    <div style={{ backgroundColor: '#f8f8f8' }}>
                        <WhiteSpace />
                        <div style={{ backgroundColor: '#fff' }}>
                            <dl style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <dd style={{ padding: '.1rem 0 .1rem .15rem' }}>
                                    <i className='iconfont icon-icon-'></i></dd>
                                <dt
                                    style={{
                                        display: 'flex', justifyContent: 'space-between', width: '3.28rem',
                                        paddingRight: '.15rem', borderBottom: '.01rem solid #f7f7f7',
                                        padding: '.1rem .15rem 0'
                                    }}>
                                    <span>优惠券</span><i className='iconfont icon-zuoyou1'></i></dt>
                            </dl>
                            <dl style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <dd style={{ padding: '.1rem 0 .1rem .15rem' }}>
                                    <i className='iconfont icon-order'></i></dd>
                                <dt
                                    style={{
                                        display: 'flex', justifyContent: 'space-between', width: '3.28rem',
                                        paddingRight: '.15rem', borderBottom: '.01rem solid #f7f7f7',
                                        padding: '.1rem .15rem 0'
                                    }}>
                                    <span>我的订单</span><i className='iconfont icon-zuoyou1'></i></dt>
                            </dl>
                        </div>
                        <WhiteSpace />
                    </div>
                    <div style={{ backgroundColor: '#f8f8f8' }}>
                        <div style={{ backgroundColor: '#fff' }}>
                            <dl style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <dd style={{ padding: '.1rem 0 .1rem .15rem' }}>
                                    <i className='iconfont icon-shezhi'></i></dd>
                                <dt
                                    style={{
                                        display: 'flex', justifyContent: 'space-between', width: '3.28rem',
                                        paddingRight: '.15rem', borderBottom: '.01rem solid #f7f7f7',
                                        padding: '.1rem .15rem 0'
                                    }}>
                                    <span>设置</span><i className='iconfont icon-zuoyou1'></i></dt>
                            </dl>
                            <dl style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <dd style={{ padding: '.1rem 0 .1rem .15rem' }}>
                                    <i className='iconfont icon-lingsheng'></i></dd>
                                <dt
                                    style={{
                                        display: 'flex', justifyContent: 'space-between', width: '3.28rem',
                                        paddingRight: '.15rem', borderBottom: '.01rem solid #f7f7f7',
                                        padding: '.1rem .15rem 0'
                                    }}>
                                    <span>口袋彩铃</span><i className='iconfont icon-zuoyou1'></i></dt>
                            </dl>
                            <dl style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <dd style={{ padding: '.1rem 0 .1rem .15rem' }}>
                                    <i className='iconfont icon-yinlenaozhong'></i></dd>
                                <dt
                                    style={{
                                        display: 'flex', justifyContent: 'space-between', width: '3.28rem',
                                        paddingRight: '.15rem', borderBottom: '.01rem solid #f7f7f7',
                                        padding: '.1rem .15rem 0'
                                    }}>
                                    <span>音乐闹钟</span><i className='iconfont icon-zuoyou1'></i></dt>
                            </dl>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#f8f8f8' }}>
                        <WhiteSpace />
                        <div style={{ backgroundColor: '#fff' }}>
                            <dl style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <dd style={{ padding: '.1rem 0 .1rem .15rem' }}>
                                    <i className='iconfont icon-fenxiang'></i></dd>
                                <dt
                                    style={{
                                        display: 'flex', justifyContent: 'space-between', width: '3.28rem',
                                        paddingRight: '.15rem', borderBottom: '.01rem solid #f7f7f7',
                                        padding: '.1rem .15rem 0'
                                    }}>
                                    <span>分享网易云音乐</span><i className='iconfont icon-zuoyou1'></i></dt>
                            </dl>
                            <dl style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <dd style={{ padding: '.1rem 0 .1rem .15rem' }}>
                                    <i className='iconfont icon-shuoming'></i></dd>
                                <dt
                                    style={{
                                        display: 'flex', justifyContent: 'space-between', width: '3.28rem',
                                        paddingRight: '.15rem', borderBottom: '.01rem solid #f7f7f7',
                                        padding: '.1rem .15rem 0'
                                    }}>
                                    <span>关于</span><i className='iconfont icon-zuoyou1'></i></dt>
                            </dl>
                        </div>
                        <WhiteSpace />
                    </div>
                    <Button style={{ display: this.props.userId ? 'block' : 'none' }}
                    onClick={this.props.outLogin.bind(this)}>退出登录</Button>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getLoginStatus.call(this)
    }
}
function mapStateToProps({ loginState }) {
    return {
        userId: loginState.userId,
        userInfo: loginState.userInfo
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Account)