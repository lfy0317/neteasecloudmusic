import React from 'react';
import { Tabs } from 'antd';
import '../assets/css/home/home.scss';
const { TabPane } = Tabs;
class Home extends React.Component{
    render(){
        return (
            <Tabs defaultActiveKey="1" tabBarGutter={0}>
                <TabPane tab="我的" key="1">
                Content of Tab Pane 1
                </TabPane>
                <TabPane tab="发现" key="2">
                Content of Tab Pane 2
                </TabPane>
                <TabPane tab="云村" key="3">
                Content of Tab Pane 3
                </TabPane>
                <TabPane tab="视频" key="4">
                Content of Tab Pane 3
                </TabPane>
            </Tabs>
        )
    }
}
export default Home