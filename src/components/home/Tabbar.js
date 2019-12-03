/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { TabBar } from 'antd-mobile';
import Discover from '../../views/Discover';
import HotMusic from '../../views/HotMusic';
import Mine from '../../views/Mine';
import Account from '../../views/Account'

class Tabbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar tintColor="red" hidden={this.state.hidden}>
          <TabBar.Item
            title="首页"
            icon={<i className='iconfont icon-logo-dark'></i>}
            selectedIcon={<i className='iconfont icon-logo-dark'></i>}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}><Discover></Discover>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-iconfontttpodicon3'></i>}
            selectedIcon={<i className='iconfont icon-iconfontttpodicon3'></i>}
            title="热歌"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}><HotMusic></HotMusic>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-yinyue1'></i>}
            selectedIcon={<i className='iconfont icon-yinyue1'></i>}
            title="我的"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          ><Mine router={this.props.router}></Mine>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-user2-copy'></i>}
            selectedIcon={<i className='iconfont icon-user2-copy'></i>}
            title="账号"
            selected={this.state.selectedTab === 'Tab'}
            onPress={() => {
              this.setState({
                selectedTab: 'Tab',
              });
            }}
          ><Account router={this.props.router}></Account>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Tabbar