import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom"
import "../assets/css/hotMusic/hotMusic.scss"
import { Flex } from '_antd-mobile@2.3.1@antd-mobile';
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
                <div className="hotopct">
                    <img src="https://s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252389c26bcf016816242eaa6aee=" alt="" />
                    <div className="hoticon">

                    </div>
                    <div className="hottime">
                        更新日期：11月28日
                    </div>
                </div>
                <div className="hotList">
                    {
                        this.state.hotList.map((v,i) => (
                            <div key={v.id}  >
                                   
                                <h3> <span className="num">{i+1}</span> {v.name}</h3>
                                <br/>
                                <p className="detail"> 
                                    <span >
                                         <i className="iconfont icon-paihangbang" style={{ fontSize: 15, color: "red" }}> </i>
                                            {v.artists[0].name}-{v.name}
                                    </span>
                                    <Router-Link to={"/music"} >
                                    <i className="iconfont icon-iconfontbofang" style={{ fontSize: 25 }} ></i>
                                    </Router-Link>
                                    
                                </p>
                                <hr/>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    getHotList() {
        this.$axios.get("/recommend/songs").then(({ data }) => {
            this.setState({
                hotList: data.dailySongs,
                id:data.dailySongs.id
            })
            
        })
    }
    componentDidMount() {
        this.getHotList()
    }

}
export default HotMusic