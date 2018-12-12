import React, { Component } from 'react';
import { connect } from "react-redux";
import { TabBar } from 'antd-mobile';

class BottomNav extends Component {

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
            icon={<i className="fa-icon fas fa-clipboard-list"></i>
            }
            selectedIcon={<i className="fa-icon fas fa-clipboard-list"></i>
            }
            selected={
              this.props.content === 'Orders' ||
              this.props.content === 'OrderDetails'
            }
            badge={0}
            onPress={() => {
              this.props.setRenderContent('Orders');
              // this.props.setBottomNav('OrdersTab');
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="fa-icon fas fa-parking"></i>
            }
            selectedIcon={
              <i className="fa-icon fas fa-parking"></i>
            }
            title="Park"
            key="Park"
            // badge={'new'}
            selected={
              this.props.content === 'ParkList' ||
              this.props.content === 'ParkCar'
            }
            onPress={() => {
              this.props.setRenderContent('ParkList');
              // this.props.setBottomNav('ParkTab');
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="fa-icon fas fa-car"></i>
            }
            selectedIcon={
              <i className="fa-icon fas fa-car"></i>
            }
            title="Fetch"
            key="Fetch"
            // badge={'new'}
            selected={
              this.props.content === 'FetchList' ||
              this.props.content === 'FetchCar'
            }
            onPress={() => {
              this.props.setRenderContent('FetchList');
              // this.props.setBottomNav('FetchTab');
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
            selected={this.props.content === 'History'}
            onPress={() => {
              this.props.setRenderContent('History');
              // this.props.setBottomNav('HistoryTab');
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="fa-icon fas fa-user"></i>}
            selectedIcon={<i className="fa-icon fas fa-user"></i>}
            title="MyProfile"
            key="MyProfile"
            selected={this.props.content === 'MyProfile'}
            onPress={() => {
              this.props.setRenderContent('MyProfile');
              // this.props.setBottomNav('MyProfileTab');
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedTab: state.selectedTab,
  content: state.content
});

const mapDispatchToProps = dispatch => ({
  setRenderContent: (content) => {
    dispatch({
      type: "SET_RENDER_CONTENT",
      payload: content
    });
  },
  setBottomNav: (tab) => {
    dispatch({
      type: "SET_BOTTOM_NAV",
      payload: tab
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav);