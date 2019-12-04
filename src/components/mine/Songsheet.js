import React, { Fragment } from 'react';
import '../../assets/css/mine/songsheet.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreator from '../../store/actionCreator/mine';

class Songsheet extends React.Component {
    render() {
        return (
            <div className="Songsheet">
                {/* 弹框背景 */}
                <div className="eventBackground" style={{ display: this.props.showBack ? "block" : "none" }} onClick={this.props.closeAll.bind(this)}></div>
                {/* 添加歌单 */}
                <div className="addModal" style={{ display: this.props.add ? "block" : "none" }}>
                    <h3>新建歌单</h3>
                    <input type="text" defaultValue="请输入歌单标题" ref='sheetName' className="sheetName" />
                    <div className="hidesheet">
                        <input ref="checkpersonal" type="checkbox" />
                        <span>设为隐私歌单</span>
                    </div>
                    <div className="choosesubmit">
                        <input className="chooseBtn" type="button" defaultValue="取消" onClick={this.props.handdleSheet.bind(this, 0)} />
                        <input className="chooseBtn" type="button" defaultValue="提交" onClick={this.props.handdleSheet.bind(this, 1)} />
                    </div>
                </div>
                {/* 歌单管理 */}
                <div className="sheetmanage" style={{ bottom: this.props.manage ? "-0.7rem" : "-3rem" }}>
                    <h3>我创建的歌单(2)</h3>
                    <dl className="manage_dl" onClick={this.props.userId ? this.props.isAdd.bind(this) : () => { this.props.router.props.history.push('/gologin') }}>
                        <dt><i className="iconfont icon-jia-copy"></i></dt>
                        <dd>创建新歌单</dd>
                    </dl>
                    <dl className="manage_dl">
                        <dt><i className="iconfont icon-mulu"></i></dt>
                        <dd>歌单管理</dd>
                    </dl>
                    <dl className="manage_dl">
                        <dt><i className="iconfont icon-jietu"></i></dt>
                        <dd>截图导入歌单</dd>
                    </dl>
                    <dl className="manage_dl">
                        <dt><i className="iconfont icon-shuaxin1"></i></dt>
                        <dd>恢复歌单</dd>
                    </dl>
                </div>

                {/* 单个歌单管理 */}
                <div className="singlemanage" style={{ bottom: this.props.single ? "-0.7rem" : "-3rem" }}>
                    <h3>歌单:<span>{this.props.sheetName}</span></h3>
                    <dl className="manage_dl">
                        <dt><i className="iconfont icon-jia-copy"></i></dt>
                        <dd>下载</dd>
                    </dl>
                    <dl className="manage_dl">
                        <dt><i className="iconfont icon-mulu"></i></dt>
                        <dd>分享</dd>
                    </dl>
                    <dl className="manage_dl">
                        <dt><i className="iconfont icon-jietu"></i></dt>
                        <dd>编辑歌单信息</dd>
                    </dl>
                    <dl className="manage_dl">
                        <dt><i className="iconfont icon-shuaxin1"></i></dt>
                        <dd onClick={this.props.deleteSheeteject.bind()}>删除</dd>
                    </dl>
                </div>
                {/* 删除歌单 */}
                    <div className="deleteSheet" style={{display:this.props.deleteEject?"block":"none"}}>
                        <p>确定要删除此歌单吗?</p>
                        <div className="deleteSure">
                            <input type="button" className="deleteBtn" value="取消" onClick = {this.props.deleteSheet.bind(this, 0)}/>
                            <input type="button" className="deleteBtn" value="确认" onClick = {this.props.deleteSheet.bind(this, 1)}/>
                        </div>
                    </div>

                {/* 创建歌单 */}
                <div className="creatSheet">
                    <div className="cereat_left" onClick={this.props.isShow.bind(this)}>
                        {/* 歌单显示隐藏 */}
                        <i
                            className="iconfont icon-zuoyou1 openchange"
                            style={{ transform: this.props.show ? "rotate(90deg)" : "rotate(0deg)" }}
                        ></i>
                        <p>创建的歌单</p>
                        <span>({this.props.playlist ? this.props.playlist.length : 0})</span>
                    </div>
                    <div className="ereat_right">
                        <i className="iconfont icon-jian addSheet" onClick={this.props.userId ? this.props.isAdd.bind(this) : () => { this.props.router.props.history.push('/gologin') }}></i>
                        <i className="iconfont icon-dian handdleSheet" onClick={this.props.isManage.bind(this)}></i>
                    </div>
                </div>
                <div className="sheetList" style={{ display: this.props.show ? "block" : "none" }}>
                    {this.props.playlist ? this.props.playlist.map((v, index) => (
                        <Fragment key={index}>
                            <dl className="sheetList_dl" onClick={this.props.openSheetlist.bind(this,v.id)}>
                                <dt>
                                    <img src={v.coverImgUrl} alt="加载中..." />
                                </dt>
                                <dd>
                                    <div className="sheetSingle_left">
                                        <p>{v.name}</p>
                                        <span>{v.playCount}首</span>
                                    </div>
                                    <div className="sheetSingle_right" onClick={this.props.isSingle.bind(this, v.name,v.id)}>
                                        <i className="iconfont icon-dian"></i>
                                    </div>
                                </dd>
                            </dl>
                        </Fragment>
                    )) : <div>haha</div>}
                </div>
            </div>
        )
    }
    componentDidMount() {
        if (this.props.userId)
            this.props.sheetDisjunctor.call(this);
    }
    // componentWillReceiveProps() {
    //     if (this.props.userId)
    //         this.props.sheetDisjunctor.call(this);
    // }
    // componentWillUpdate(){
    //     if(this.props.userId){
    //         this.setState({
    //             uid:this.props.userId
    //         })
    //     }
    // }
}

function mapStateToProps({ mineState, loginState }) {
    return {
        userId: loginState.userId,
        playlist: mineState.playlist,
        sheetName: mineState.sheetName,
        sheetId:mineState.sheetId,
        showBack: mineState.showBack,
        show: mineState.show,
        single: mineState.single,
        manage: mineState.manage,
        add: mineState.add,
        deleteEject:mineState.deleteEject

    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Songsheet)







