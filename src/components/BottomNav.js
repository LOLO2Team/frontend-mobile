import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';

export default class BottomNav extends Component {
  render() {
    return (
      <div className="nav-bottom">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.props.state.hidden}
        >
          <TabBar.Item
            title="Orders"
            key="Orders"
            icon={<i class="fa-icon fas fa-clipboard-list"></i>
            }
            selectedIcon={<i className="fa-icon fas fa-clipboard-list"></i>
            }
            selected={this.props.state.selectedTab === 'OrdersTab'}
            badge={0}
            onPress={() => {
              this.props.setState({
                selectedTab: 'OrdersTab',
                content: 'Orders'
              });
            }}
            data-seed="logId"
          >
            {/* {this.renderContent(this.props.state.content)} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="fa-icon fas fa-car"></i>
            }
            selectedIcon={
              <i className="fa-icon fas fa-car"></i>
            }
            title="Park/Fetch"
            key="Park/Fetch"
            // badge={'new'}
            selected={this.props.state.selectedTab === 'ParkFetchTab'}
            onPress={() => {
              this.props.setState({
                selectedTab: 'ParkFetchTab',
                content: 'Park/Fetch'
              });
            }}
            data-seed="logId1"
          >
            {/* {this.renderContent('Park/Fetch')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="fa-icon far fa-clock"></i>
            }
            selectedIcon={
              <i className="fa-icon far fa-clock"></i>
            }
            title="History"
            key="History"
            // dot
            selected={this.props.state.selectedTab === 'HistoryTab'}
            onPress={() => {
              this.props.setState({
                selectedTab: 'HistoryTab',
                content: 'History'
              });
            }}
          >
            {/* {this.renderContent('History')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="fa-icon fas fa-user"></i>}
            selectedIcon={<i className="fa-icon fas fa-user"></i>}
            title="My Profile"
            key="My Profile"
            selected={this.props.state.selectedTab === 'MyProfileTab'}
            onPress={() => {
              this.props.setState({
                selectedTab: 'MyProfileTab',
                content: 'My Profile'
              });
            }}
          >
            {/* {this.renderContent('My Profile')} */}
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
