import React, { Component } from 'react';
import { connect } from "react-redux";
import { TabBar, List, NavBar, Icon } from 'antd-mobile';
import Order from './Order'

const Item = List.Item;

class FetchList extends Component {
  state = {
    parkingOrders: [
      {
        orderId: 0,
        vehicleNumber: "sdf",
        orderStatus: "parked"
      },
      {
        orderId: 99103,
        vehicleNumber: "abc",
        orderStatus: "fetching"
      }
    ]
  }

  render() {
    const checkNoFetchings = () => {
      if (this.props.parkingOrders.filter((order) => order.orderStatus === "parked" || order.orderStatus === "fetching").length === 0) {
        return <div>Your fetching list is empty now!</div>
      }
    }
    return (
      <div>
        {/* need to change state */}
        {this.state.parkingOrders
          .filter((order) => order.orderStatus === "fetching")
          .map((order) =>
            <div className="fetch-now">
              <Order order={order} type="Fetch" />
            </div>
          )}
          {this.props.parkingOrders
          .filter((order) => order.orderStatus === "parked")
          .map((order) =>
            <div className="parked">
              <Order order={order} />
            </div>
          )}
        {checkNoFetchings()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parkingOrders: state.parkingOrders
});

export default connect(mapStateToProps)(FetchList);