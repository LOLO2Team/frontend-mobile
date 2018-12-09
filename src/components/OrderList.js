import React, { Component } from 'react';
import Order from './Order'

export default class OrderList extends Component {
  state = {
    orders: [{ orderId: 1, carId: "car1" },
    { orderId: 2, carId: "car2" },
    { orderId: 3, carId: "car3" }]
  }
  
  render() {
    return (
      <div>
        {this.state.orders.map((order) =>
          <Order order={order} setRenderContent={this.props.setRenderContent} setParkingOrder={this.props.setParkingOrder} 
        />)}

        {/* <Order onClick={() => this.props.onClick("Order Details", 1)} /> */}
        
      </div>
    )
  }
}
