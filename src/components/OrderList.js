import React, { Component } from 'react';
import { connect } from "react-redux";
import Order from './Order'

class OrderList extends Component {
  render() {
    return (
      <div>
        {this.props.parkingOrders.map((order) =>
          <Order order={order} setRenderContent={this.props.setRenderContent} setParkingOrder={this.props.setParkingOrder} 
        />)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parkingOrders: state.parkingOrders
});

export default connect(mapStateToProps, null)(OrderList);
