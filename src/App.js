import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
// import { TabBar, List, NavBar, Icon } from 'antd-mobile';
import Login from './components/Login';
import OrderList from './components/OrderList';
import FetchList from './components/FetchList';
import OrderDetails from './components/OrderDetails';
import ParkCar from './components/ParkCar';
import FetchCar from './components/FetchCar';
import HeaderBar from './components/HeaderBar';
import BottomNav from './components/BottomNav';
import ParkList from './components/ParkList';
import History from './components/History';
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

  renderContent() {
    switch(this.props.content) {
      case "Login":
        return (<Login />);

      case "Orders":
        return (<OrderList />);
      
      case "ParkList":
        return (<ParkList />);
      
      case "FetchList":
        return (<FetchList />);
        // return null;

      case "History":
      return (<History />);
        // Freturn null;

      case "MyProfile":
        // return (<MyProfile />);
        return null;

      case "OrderDetails":
        return (<OrderDetails />);

      case "ParkCar":
        return (<ParkCar />)
      
      case "FetchCar":
        return (<FetchCar />)

      default:
        return null;
      
    }
  }
  renderBottomNav() {
    if (this.props.content !== "Login") {
      return  <BottomNav />;
    }
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { minHeight: 892 }}>
        <HeaderBar />
        {this.renderContent()}
        {this.renderBottomNav()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  content: state.content,
  parkingLots: state.parkingLots
});

export default connect(mapStateToProps)(App);