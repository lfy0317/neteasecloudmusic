import React from 'react';
import '../../assets/css/mine/classnav.scss';

class Classnav extends React.Component{
    render(){
        return(
            <div className="classNav">
                 <ul className="classNav_ul">
                        <li>
                            <i className="iconfont icon-jueshiwu"></i>
                            <span>古典专区</span>
                        </li>
                        <li>
                            <i className="iconfont icon-shu1"></i>
                            <span>ACG专区</span>
                        </li>
                        <li>
                            <i className="iconfont icon-jueshiwu"></i>
                            <span>因乐交友</span>
                        </li>
                        <li>
                            <i className="iconfont icon-jueshiwu"></i>
                            <span>私人FM</span>
                        </li>
                        <li>
                            <i className="iconfont icon-jueshiwu"></i>
                            <span>最嗨电音</span>
                        </li>
                        <li>
                            <i className="iconfont icon-jueshiwu"></i>
                            <span>Sati空间</span>
                        </li>
                        <li>
                            <i className="iconfont icon-jueshiwu"></i>
                            <span>私藏推荐</span>
                        </li>
                        <li>
                            <i className="iconfont icon-jueshiwu"></i>
                            <span>亲子频道</span>
                        </li>
                        <li>
                            <i className="iconfont icon-jueshiwu"></i>
                            <span>跑步FM</span>
                        </li>
                        <li>
                            <i className="iconfont icon-jueshiwu"></i>
                            <span>小冰电台</span>
                        </li>
                        <li>
                            <i className="iconfont icon-jueshiwu"></i>
                            <span>爵士电台</span>
                        </li>
                        <li>
                            <i className="iconfont icon-che"></i>
                            <span>驾驶模式</span>
                        </li>
                        <li>
                            <i className="iconfont icon-book-copy"></i>
                            <span>云村正能量</span>
                        </li>
                        <li>
                            <i className="iconfont icon-jueshiwu"></i>
                            <span>编辑</span>
                        </li>
                    </ul>
            </div>
        )
    }
}
export default Classnav;