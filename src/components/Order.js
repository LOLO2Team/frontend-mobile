import React, { Component } from 'react';
import { connect } from "react-redux";
import { TabBar, List, NavBar, Icon } from 'antd-mobile';

const Item = List.Item;

class Order extends Component {
  orderClicked = () => {
    this.props.setRenderContent("Order Details", this.props.order.id);
    this.props.setParkingOrder(this.props.order.orderId);
  }

  render() {
    return (
      <div>
        <Item onClick={this.orderClicked} className="order-item" >
          <div>Parking Order {this.props.order.orderId}</div>
          <div>{this.props.order.carId}</div>
        </Item>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   parkingOrders: state.parkingOrders
// });

const mapDispatchToProps = dispatch => ({
  setParkingOrder: (orderId) => {
    dispatch({
      type: "SET_PARKING_ORDER",
      payload: orderId
    })
  },
  goToOrderDetails: () => {
    dispatch({
      type: "SET_RENDER_CONTENT",
      payload: "Order Details"
    });
  }
});


export default connect(null, mapDispatchToProps)(Order);