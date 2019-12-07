import React from 'react';
import "../assets/css/hotMusic/hotMusic.scss"

class HotMusic extends React.Component {
    constructor() {
        super();
        this.state = {
            id:0,
            hotList: []
        }
    }
    render() {
        return (
            <div className="hotop">
                <div className="hotopct" style={{display:'flex',position:'relative'}}>
                    <img style={{width:'100%'}}
                    src={require('../assets/images/hot_music_bg.jpg')} alt="" />
                    <span style={{
                        position:'absolute',top:'1.1rem',left:'.5rem',fontSize:'.14rem',color:'#fff'
                    }}>更新日期：{(new Date()).getMonth()/1+1}月{(new Date()).getDate()}日</span>
                    <div className='hoticon'></div>
                </div>
                <div className="hotList">
                    {/* {
                        this.state.hotList.map((v,i) => (
                            <div key={i}>
                                <h3> <span className="num">{i+1}</span> {v.name}</h3>
                                <br/>
                                <p className="detail"> 
                                    <span >
                                         <i className="iconfont icon-paihangbang" style={{ fontSize: 15, color: "red" }}> </i>
                                            {v.artists[0].name}-{v.name}
                                    </span>
                                    <div>
                                    <i className="iconfont icon-iconfontbofang" style={{ fontSize: 25 }} ></i>
                                    </div>
                                </p>
                                <hr/>
                            </div>
                        ))
                    } */}
                    {this.state.hotList.map((v, i) => (
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
    getHotList() {
        this.$axios.get("/top/song?type=7").then(({ data }) => {
            this.setState({
                hotList: data,
                // id:data.dailySongs.id
            })
            console.log(this.state.hotList)
        })
    }
    componentDidMount() {
        this.getHotList()
    }

}
export default HotMusic