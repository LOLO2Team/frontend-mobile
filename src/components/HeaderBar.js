import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import { connect } from "react-redux";

class HeaderBar extends Component {
  getHeader = () => {
    switch(this.props.content) {
      case "Login":
        return "Login to Employee System";

      case "Orders":
        return "Pending Orders";
      
      case "ParkList":
        return "Park";
      
      case "FetchList":
        return "Fetch";

      case "History":
        return "History";

      case "MyProfile":
        return "My Profile";

      case "OrderDetails":
        return "Confirm Order";

      case "ParkCar":
        return "Park Car - Select Parking Lot";
      
      case "FetchCar":
        return "Fetch Car"

      default:
        return null;
    }
  }
  render() {
    return (
      <NavBar ><h3>{this.getHeader()} </h3></NavBar >
    )
  }
}

const mapStateToProps = state => ({
  content: state.content
});
export default connect(mapStateToProps)(HeaderBar);