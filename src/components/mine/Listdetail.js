import React, { Fragment } from 'react';
import '../../assets/css/mine/listdetail.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreator from '../../store/actionCreator/mine/Listdetail';

class Listdetail extends React.Component {
    render(){
        return(
            <div>
               <div className="listDetail">
                   <div className="listTop">
                        <div className="listHeader">
                            <div className="listHeader_left">
                                    <i className="iconfont icon-xia"></i>
                                    <span>歌单</span>
                            </div>
                            <div className="listHeader_right">
                                    <i className="iconfont icon-fangdajing"></i>
                                    <i className="iconfont icon-dian"></i>
                            </div>
                        </div>
                   </div>
                   <div className="listMain">
                        <div className="listMain_con">
                            <dl className="listMain_dl">
                                <dt>
                                    <img src={this.props.playlist.coverImgUrl}  alt="图片加载中..."/>
                                </dt>
                                <dd>
                                    <h4>{this.props.playlist.name}</h4>
                                    <div className="listMain_dl_ph">
                                        <img   alt="图片加载中..."/>
                                        <p>{this.props.userInfo.name} <i className="iconfont icon-zuoyou1"></i></p>
                                    </div>
                                    <p>编辑信息 <i className="iconfont icon-zuoyou1"></i></p>
                                </dd>
                            </dl>
                            <ul className="listMain_ul">
                                <li>
                                    <i className="iconfont icon-xiaoxi1"></i>
                                    <span>评论</span>
                                </li>
                                <li>
                                    <i className="iconfont icon-xiaoxi1"></i>
                                    <span>分享</span>
                                </li>
                                <li>
                                    <i className="iconfont icon-xiaoxi1"></i>
                                    <span>下载</span>
                                </li>
                                <li>
                                    <i className="iconfont icon-xiaoxi1"></i>
                                    <span>多选</span>
                                </li>
                            </ul>
                        </div>
                   </div>
                   <div className="songslist">
                        <div className="songslist_top">
                            <i className="iconfont icon-bofang"></i>
                            <p>播放全部</p>
                            <span>(共{this.props.tracks.length}首)</span>
                        </div>
                        {this.props.tracks ? this.props.tracks.map((v, index) => (
                            <Fragment key={index}>
                                <dl className="songs_dl">
                                    <dt>
                                            {index + 1}
                                    </dt>
                                    <dd>
                                        <div className="songs_dlleft">
                                            <div className="dlleft_top">
                                                <span>{v.name}</span>
                                                <p>{v.alia}</p>
                                            </div>
                                            <div className="dlleft_bottom">
                                                <i className="iconfont icon-redian"></i>
                                                <p> {v.ar[0].name}-{v.name}</p>
                                            </div>
                                        </div>
                                        <div className="songs_dlright">
                                            <i className="iconfont icon-shipin"></i>
                                            <i className="iconfont icon-dian"></i>
                                        </div>
                                    </dd  >
                                </dl>    
                            </Fragment>
                        )) : <div>haha</div>}
                   </div>
                    
                </div>
                <div>
                    我是你爸爸
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getSonglist.call(this)
    }
}

function mapStateToProps({ mineState,listdetailState,loginState}) {
    return {
        sheetId:mineState.sheetId,
        toSinglelist:mineState.toSinglelist,//单个歌单，歌曲列表页开关，
        tracks:listdetailState.tracks,//单个歌单，歌曲信息
        toAddsongs:listdetailState.toAddsongs,//添加歌曲开关
        userInfo:loginState.userInfo,//y用户信息
        playlist:listdetailState.playlist//

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Listdetail)