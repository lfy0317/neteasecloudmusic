import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreator from '../store/actionCreator/discover';


class Discover extends React.Component {
    render() {
        return (
            <div>
                <div style={{
                    display: 'flex', alignItems: 'center', padding: '.1rem', position: 'fixed',
                    background: '#fff', width: '100%'
                }}
                    onClick={() => this.props.router.props.history.push('/search')}>
                    <i className={"iconfont icon-fangdajing"} style={{ position: 'absolute', left: '.3rem' }}></i>
                    <input placeholder='搜索'
                        style={{ height: '.24rem', width: '3.45rem', paddingLeft: '.4rem', border: 'none', borderRadius: '.12rem', background: '#f7f7f7' }} />
                </div>
                <h4 style={{ display: 'flex', paddingTop: '.6rem', paddingBottom: '.1rem', textIndent: '.1rem' }}>| 推荐歌单</h4>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                    {
                        this.props.songSheet.map((v) => (
                            <div key={v.id} style={{ height: "1.6rem" }}>
                                <img src={v.picUrl} alt="加载中..." style={{ width: "1.1rem" }}></img>
                                <div style={{ width: "1.14rem", height: "0.36rem", overflow: "hidden" }}>{v.name}</div>
                            </div>
                        ))
                    }
                </div>
                <h4 style={{ display: 'flex', padding: '.1rem' }}>| 最新音乐</h4>
                <div>
                    {this.props.newSong.map((v, i) => (
                        <div key={i} className='clear_fix' style={{
                            dispaly: "flex", padding: ".05rem 0.1rem",borderTop:'.01rem solid #ccc'
                        }}>
                            <div style={{width:'2.5rem',float:'left'}}>
                            <p style={{
                                fontSize: '.18rem',width: '2.5rem', overflow: 'hidden',
                                whiteSpace: 'nowrap',textOverflow:'ellipsis',textAlign:'left'
                            }}
                                onClick={() => this.props.router.props.history.push({ pathname: "/music", state: { id: v.id } })} >
                                {v.name}</p>
                                <div style={{textAlign:'left',display:'flex'}}>
                                    <i className="iconfont icon-vip" style={{color:'#f00',fontSize:'.18rem'}}></i>
                                    <span style={{fontSize:'.12rem'}}>{v.artists[0].name}--{v.album.name}</span>
                                </div>
                            </div>
                            <div style={{width:'.18rem',float:'right',lineHeight:'.45rem'}}><i className={"iconfont icon-bofang"}></i></div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getMusicList.call(this);
        this.props.getNewSong.call(this);
    }
}
function mapStateToProps(state) {
    return {
        newSong: state.discoverReducer.newSong,
        songSheet: state.discoverReducer.songSheet
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreator, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Discover)