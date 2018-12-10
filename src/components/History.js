import React, { Component } from 'react'
import Order from './Order'

export default class History extends Component {
    state = {
        parkingOrders: [
            {
              orderId: 0,
              vehicleNumber: "sdf",
              orderStatus: "parked"
            },
            {
              orderId: 1,
              vehicleNumber: "abc",
              orderStatus: "fetching"
            }
        ],
        orderId: 1
    }
    render() {
        const checkNoOrders = () => {
          if (this.state.parkingOrders.length === 0) {
            return <div>Your order list is empty now!</div>
          }
        }
        return (
          <div>
            {this.state.parkingOrders.map((order) =>
              <Order order={order} type="History" />)}
    
              {checkNoOrders()}
          </div>
        )
      }
}
