import React, { Component } from 'react';
import './App.css';
import { TabBar, List, NavBar, Icon } from 'antd-mobile';
import OrderList from './components/OrderList';
import ParkingLotList from './components/ParkingLotList';
import OrderDetails from './components/OrderDetails';
import HeaderBar from './components/HeaderBar';
import BottomNav from './components/BottomNav';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Item = List.Item;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'OrdersTab',
      hidden: false,
      fullScreen: false,
      content: "Orders",
      orderId: 0
    };
  }

  setRenderContent = (newContent, id=0) => {
    this.setState({
      content: newContent,
      orderId: id
    });
  }

  setBottomNav = (navItem) => {
    this.setState({
      selectedTab: navItem
    });
  }

  renderContent(pageText, id=0) {
    switch(pageText) {
      case "Orders":
        return (<OrderList onClick={this.setRenderContent} />);
      
      case "Park":
        return (<ParkingLotList onClick={this.setRenderContent}/>);
        // return null;

      case "History":
        // return (<History />);
        return null;

      case "My Profile":
        // return (<MyProfile />);
        return null;

      case "Order Details":
        return (<OrderDetails onClick={this.setRenderContent} />);

      default:
        return null;
      
    }
    // return (
    //   <Router>
    //     <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
    //     <Switch>
          
    //       <List className="my-list">
    //         <OrderList />
    //       </List>
    //     </Switch>
    //       {/* <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
    //       <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
    //         onClick={(e) => {
    //           e.preventDefault();
    //           this.setState({
    //             hidden: !this.state.hidden,
    //           });
    //         }}
    //       >
    //         Click to show/hide tab-bar
    //       </a>
    //       <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
    //         onClick={(e) => {
    //           e.preventDefault();
    //           this.setState({
    //             fullScreen: !this.state.fullScreen,
    //           });
    //         }}
    //       >
    //         Click to switch fullscreen
    //       </a> */}
    //     </div>
    //   </Router>
    // );
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { minHeight: 892 }}>
        <HeaderBar />
        {this.renderContent(this.state.content)}
        <BottomNav state={this.state} setRenderContent={this.setRenderContent} setBottomNav={this.setBottomNav} setState={(newState) => this.setState(newState)} />
      </div>
    );
  }
}

export default App;
