import React, { Component } from 'react';
import { connect } from "react-redux";
import Order from './Order';

class ParkList extends Component {
  render() {
    return (
      <div>
        {this.props.parkingOrders
          .filter((order) => order.orderStatus === "parking")
          .map((order) =>
          <Order order={order} setRenderContent={this.props.setRenderContent} 
        />)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parkingOrders: state.parkingOrders
});

export default connect(mapStateToProps)(ParkList);