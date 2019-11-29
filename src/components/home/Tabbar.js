/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { TabBar } from 'antd-mobile';
import Discover from '../../views/Discover';
import Movie from '../../views/Movie';
import Mine from '../../views/Mine';
import Yuncun from '../../views/Yuncun';
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
            title="发现"
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
            icon={<i className='iconfont icon-xiadaohangtubiaojihe-xingzhuang_tab_ico_-'></i>}
            selectedIcon={<i className='iconfont icon-xiadaohangtubiaojihe-xingzhuang_tab_ico_-'></i>}
            title="视频"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}><Movie></Movie>
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
          ><Mine></Mine>
          </TabBar.Item>
          <TabBar.Item
            icon={<i className='iconfont icon-women'></i>}
            selectedIcon={<i className='iconfont icon-women'></i>}
            title="云村"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          ><Yuncun></Yuncun>
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
          ><Account></Account>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Tabbar