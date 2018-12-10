import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
// import { TabBar, List, NavBar, Icon } from 'antd-mobile';
import OrderList from './components/OrderList';
import OrderDetails from './components/OrderDetails';
import ParkCar from './components/ParkCar';
import HeaderBar from './components/HeaderBar';
import BottomNav from './components/BottomNav';
import ParkList from './components/ParkList';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// const Item = List.Item;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedTab: 'OrdersTab',
      // content: "Orders",
      orderId: 0,
      parkingOrder: null,
      parkingLot: ''
    };
  }

  renderContent(pageText, id=0) {
    switch(pageText) {
      case "Orders":
        return (<OrderList />);
      
      case "Park":
        return (<ParkCar />);
      
      case "Fetch":
        // return (<FetchList />);
        return null;

      case "History":
      return (<ParkList />);
        return null;

      case "My Profile":
        // return (<MyProfile />);
        return null;

      case "Order Details":
        return (<OrderDetails />);

      case "Park Car":
        return (<ParkCar />)

      default:
        return null;
      
    }
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { minHeight: 892 }}>
        <HeaderBar />
        {this.renderContent(this.props.content)}
        <BottomNav />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: state.content,
  parkingLots: state.parkingLots
});

export default connect(mapStateToProps)(App);