import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
// import { TabBar, List, NavBar, Icon } from 'antd-mobile';
import OrderList from './components/OrderList';
import OrderDetails from './components/OrderDetails';
import ParkingLotList from './components/ParkingLotList';
import ParkCar from './components/ParkCar';
import HeaderBar from './components/HeaderBar';
import BottomNav from './components/BottomNav';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// const Item = List.Item;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'OrdersTab',
      content: "Orders",
      orderId: 0,
      parkingOrder: null,
      parkingLot: ''
    };
  }

  setRenderContent = (newContent, id=0) => {
    this.setState({
      content: newContent,
      orderId: id
    });
  }

  setParkingOrder = (newParkingOrder) => {
    this.setState({
      parkingOrder: newParkingOrder,
      orderId: newParkingOrder.orderId
    });
  }

  setParkingLot = (newParkingLot) => {
    this.setState({
      parkingLot: newParkingLot
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
        return (<OrderList setRenderContent={this.setRenderContent} />);
      
      case "Park/Fetch":
        return (<ParkingLotList setRenderContent={this.setRenderContent} setParkingLot={this.setParkingLot} />);

      case "History":
        // return (<History />);
        return null;

      case "My Profile":
        // return (<MyProfile />);
        return null;

      case "Order Details":
        return (<OrderDetails 
          setRenderContent={this.setRenderContent} 
          setBottomNav={this.setBottomNav} />);

      case "Park Car":
        return (<ParkCar 
          setRenderContent={this.setRenderContent} 
          setBottomNav={this.setBottomNav} />)

      default:
        return null;
      
    }
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { minHeight: 892 }}>
        <HeaderBar />
        {this.renderContent(this.state.content)}
        <BottomNav 
          selectedTab={this.state.selectedTab} 
          setRenderContent={this.setRenderContent} 
          setBottomNav={this.setBottomNav} 
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedTab: state.selectedTab,
  content: state.content,
  orderId: state.orderId,
  parkingOrder: state.parkingOrder,
  parkingLot: state.parkingLot
});

const mapDispatchToProps = dispatch => ({
  setRenderContent: (newContent, id=0) => {
    this.setState({
      content: newContent,
      orderId: id
    });
  },

  setParkingOrder: (newParkingOrder) => {
    this.setState({
      parkingOrder: newParkingOrder,
      orderId: newParkingOrder.orderId
    });
  },

  setParkingLot: (newParkingLot) => {
    this.setState({
      parkingLot: newParkingLot
    });
  },

  setBottomNav: (navItem) => {
    this.setState({
      selectedTab: navItem
    });
  }
})

export default App;
// export default connect(mapStateToProps)(App);
