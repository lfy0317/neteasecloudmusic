import React from 'react';
import "../assets/css/mine/mine.scss";
import Classnav from "../components/mine/Classnav";
import Playlist from "../components/mine/Playlist";
import Songsheet from "../components/mine/Songsheet";
class Mine extends React.Component{
    render(){
        return(
            <div className="mine">
                <div className="mineTop">
                    <div className="mineTopcon">
                        <div className="mineTop_left">
                            <i className="iconfont icon-yun"></i>
                        </div>
                        <div className="mineTop_right">
                            <span>我的音乐</span>
                        </div>
                    </div>
                </div>
                <div className="classnav">
                    <Classnav></Classnav>
                </div>
                <div className="playlist">
                    <Playlist></Playlist>
                </div>
                <div className="sunsheet">
                    <Songsheet></Songsheet>
                </div>
            </div>
        )
    }
}
export default Mine