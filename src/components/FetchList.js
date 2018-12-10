import React, { Component } from 'react';
import { connect } from "react-redux";
import { TabBar, List, NavBar, Icon } from 'antd-mobile';
import Order from './Order'

const Item = List.Item;

export default class FetchList extends Component {
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
    ]
  }

  render() {
    const checkNoFetchings = () => {
      // if (this.props.parkingOrders.filter((order) => order.orderStatus === "parked").length === 0) {
      if (this.state.parkingOrders.filter((order) => order.orderStatus === "parked" || order.orderStatus === "fetching").length === 0) {
        return <div>Your fetching list is empty now!</div>
      }
    }
    return (
      <div>
        {this.state.parkingOrders
          .filter((order) => order.orderStatus === "fetching")
          .map((order) =>
            <div className="fetch-now">
              <Order order={order} type="Fetch" />
            </div>
          )}
          {this.state.parkingOrders
          .filter((order) => order.orderStatus === "parked")
          .map((order) =>
            <div className="parked">
              <Order order={order} />
            </div>
          )}
        {checkNoFetchings}

        {/* <Item className="fetch-now" >
                    <i class="fa-icon fetch-now-icon fas fa-exclamation"></i>
                    <i class="car-icon fas fa-car"></i>
                    <div class="order-desc">
                        <div>Order ID </div>
                        <div></div>
                    </div>
                </Item> */}
      </div>
    )
  }
}
