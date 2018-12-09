import React, { Component } from 'react';
import Order from './Order'

export default class OrderList extends Component {
  state = {
    orders: [{ id: 1, carID: "car1" },
    { id: 2, carID: "car2" },
    { id: 3, carID: "car3" }]
  }
  render() {
    return (
      <div>
        {this.state.orders.map((order) =><Order order={order} onClick={() => this.props.onClick("Order Details", order.id)} />)}
        {/* <Order onClick={() => this.props.onClick("Order Details", 1)} /> */}
        
      </div>
    )
  }
}
