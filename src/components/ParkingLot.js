import React, { Component } from 'react';
import { connect } from "react-redux";
import { TabBar, List, NavBar, Icon } from 'antd-mobile';

const Item = List.Item;

class ParkingLot extends Component {
  gotoParkCar = () => {
    this.props.setRenderContent("Park Car");
    this.props.setParkingLot(this.props.parkingLot.lotName);
  }

  render() {
    return (
      <div>
        <Item onClick={this.gotoParkCar}>{this.props.parkingLot.lotName}</Item>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setParkingLot: (parkingLot) => {
    dispatch({
      type: "SET_PARKING_LOT",
      payload: parkingLot
    })
  },
  goToOrderDetails: () => {
    dispatch({
      type: "SET_PARKING_LOT",
      payload: "Order Details"
    });
  }
});


export default connect(null, mapDispatchToProps)(ParkingLot);