import React from 'react';
import { NavBar, Button } from 'antd-mobile';
class Account extends React.Component{
    render(){
        return(
            <div className='account'>
                <div className='nav' style={{position:"fixed",width:'100%'}}>
                    <NavBar style={{background:'#fff',height:'.4rem',color:'#000'}} 
                    icon={<i className="iconfont icon-saoyisao" style={{fontSize:'.2rem'}}></i>}>账号</NavBar>
                </div>
                <div style={{height:'10rem',background:'#fff',paddingTop:'.4rem'}}>
                    <div className='userlogin' style={{marginBottom:'.16rem'}}>
                        <p style={{marginTop:'.1rem'}}>登录网易云音乐</p>
                        <p>手机电脑多端同步，尽享海量高品质音乐</p>
                        <Button 
                        style={{height:'.36rem',lineHeight:'.36rem',margin:'.1rem',borderColor:'#ddd'}}>
                            立即登录</Button>
                    </div>
                    <div 
                    style={{width:'3.47rem',background:'#2c2c2c',height:'.46rem',margin:'0 auto',
                    borderRadius:'.08rem .08rem 0 0',color:'#ffe9e5',display:'flex',justifyContent:'space-around'}}>
                        <div style={{textAlign:'left',display:'flex',flexDirection:'column',textIndent:".2rem",
                        justifyContent:'center',width:'1.73rem'}}>
                            <p>开通黑胶VIP</p>
                            <span>新客仅5元></span>
                        </div>
                        <div style={{textAlign:'left',display:'flex',flexDirection:'column',textIndent:".2rem",
                        justifyContent:'center',borderLeft:'.01rem solid #ffe9e5',width:'1.73rem'}}>
                            <p>会员中心</p>
                            <span>VIP超享12项特权</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Account