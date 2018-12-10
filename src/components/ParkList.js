import React, { Component } from 'react';
import { connect } from "react-redux";
import Order from './Order';

class ParkList extends Component {
  render() {
    const checkNoParkings = () => {
      if (this.props.parkingOrders.filter((order) => order.orderStatus === "parking").length == 0) {
        return <div>Your parking list is empty now!</div>
      }
    }
    return (
      <div>
        {this.props.parkingOrders
          .filter((order) => order.orderStatus === "parking")
          .map((order) =>
          <Order order={order} type="Park" />)}

        {checkNoParkings()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parkingOrders: state.parkingOrders
});

export default connect(mapStateToProps)(ParkList);