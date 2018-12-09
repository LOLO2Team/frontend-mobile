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
          hidden={false}
        >
          <TabBar.Item
            title="Orders"
            key="Orders"
            icon={<i class="fa-icon fas fa-clipboard-list"></i>
            }
            selectedIcon={<i className="fa-icon fas fa-clipboard-list"></i>
            }
            selected={this.props.selectedTab === 'OrdersTab'}
            badge={0}
            onPress={() => {
              this.props.setRenderContent('Orders');
              this.props.setBottomNav('OrdersTab');
            }}
            data-seed="logId"
          >
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
            selected={this.props.selectedTab === 'ParkFetchTab'}
            onPress={() => {
              this.props.setRenderContent('Park/Fetch');
              this.props.setBottomNav('ParkFetchTab');
            }}
            data-seed="logId1"
          >
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
            selected={this.props.selectedTab === 'HistoryTab'}
            onPress={() => {
              this.props.setRenderContent('History');
              this.props.setBottomNav('HistoryTab');
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="fa-icon fas fa-user"></i>}
            selectedIcon={<i className="fa-icon fas fa-user"></i>}
            title="My Profile"
            key="My Profile"
            selected={this.props.selectedTab === 'MyProfileTab'}
            onPress={() => {
              this.props.setRenderContent('My Profile');
              this.props.setBottomNav('MyProfileTab');
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
