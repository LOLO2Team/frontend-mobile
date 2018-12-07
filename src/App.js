import React, { Component } from 'react';
import './App.css';
import { TabBar, List, NavBar, Icon } from 'antd-mobile';
import OrderList from './components/OrderList'

const Item = List.Item;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
      {/* Header */}
      <List renderHeader={() => 'Parking Lots'} className="my-list">
        <OrderList />
      </List>
        {/* <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a> */}
      </div>
    );
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { minHeight: 892 }}>
      <NavBar ><h3>Parking </h3></NavBar >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="Orders"
            key="Orders"
            icon={<i class="fa-icon fas fa-clipboard-list"></i>
            }
            selectedIcon={<i class="fa-icon fas fa-clipboard-list"></i>
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={0}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent('Orders')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i class="fa-icon fas fa-car"></i>
            }
            selectedIcon={
              <i class="fa-icon fas fa-car"></i>
            }
            title="Park/Fetch"
            key="Park/Fetch"
            // badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('Park/Fetch')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i class="fa-icon far fa-clock"></i>
            }
            selectedIcon={
              <i class="fa-icon far fa-clock"></i>
            }
            title="History"
            key="History"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('History')}
          </TabBar.Item>
          <TabBar.Item
            icon={<i class="fa-icon fas fa-user"></i>}
            selectedIcon={<i class="fa-icon fas fa-user"></i>}
            title="My Profile"
            key="My Profile"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent('My Profile')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default App;
