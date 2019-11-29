import React from 'react';
import '../assets/css/home/home.scss';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
//引入抽屉组件
import Dmenu from '../components/home/Dmenu';
//引入导航
import Classnav from '../components/home/Classnav';

const tabs = [
    { title: <Badge>我的</Badge> },
    { title: <Badge>发现</Badge> },
    { title: <Badge>云村</Badge> },
    { title: <Badge>视频</Badge> },
  ];
  
class Home extends React.Component{
    render(){
        return (
            
            <div className='index'>
                
                <div className="dmenu">
                    <Dmenu></Dmenu>
                </div>
               {/* 内容区 */}
                <div className="top_nav">
                    <Tabs tabs={tabs} initialPage={0} >
                        <div className="tabText tabText_home" >
                            <div className="tabCon">
                                <Classnav></Classnav>
                            </div> 
                        </div>
                        <div className="tabText">
                            Content of second tab
                        </div>
                        <div className="tabText">
                            Content of third tab
                        </div>
                        <div className="tabText">
                            Content of four tab
                        </div>
                    </Tabs>
                </div>
                
                <div className="search">
                    <i className="iconfont icon-fangdajing"></i>
                </div>

                {/* <WhiteSpace /> 空白符 */}
            </div>
        )
    }
}

export default Home

