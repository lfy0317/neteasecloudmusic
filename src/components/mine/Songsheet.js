import React from 'react';
import '../../assets/css/mine/songsheet.scss';

class Songsheet extends React.Component{
    
    render(){
        return(
            <div className="Songsheet">
                <div className="creatSheet">
                    <div className="cereat_left">
                        <i className="iconfont icon-zuoyou1"></i>
                        <p>创建的歌单</p>
                        <span>(5)</span>
                    </div>
                    <div className="ereat_right">
                        <i className="iconfont icon-jian"></i>
                        <i className="iconfont icon-dian"></i>
                    </div>
                </div>
                <div className="sheetList">
                    <dl className="sheetList_dl">
                        <dt>
                            <img src={require("../../assets/images/login-logo.png")} />
                        </dt>
                        <dd>
                            <div className="sheetSingle_left">
                                <p>歌单11111</p>
                                <span>（54）</span>
                            </div>
                            <div className="sheetSingle_right">
                                <i className="iconfont icon-dian"></i>
                            </div>
                        </dd>
                    </dl>
                    <dl className="sheetList_dl">
                        <dt>
                            <img src={require("../../assets/images/login-logo.png")} />
                        </dt>
                        <dd>
                            <div className="sheetSingle_left">
                                <p>歌单11111</p>
                                <span>（45）</span>
                            </div>
                            <div className="sheetSingle_right">
                                <i className="iconfont icon-dian"></i>
                            </div>
                        </dd>
                    </dl>
                </div>      
            </div>
        )
    }
}
export default Songsheet;

