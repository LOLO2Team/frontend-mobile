import React, { Component } from 'react';
import { connect } from "react-redux";
import Order from './Order';
import { Toast } from 'antd-mobile';
import orderResources from "../resources/orderResources"

class ParkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingOrders: this.props.parkingOrders
    }
    this.props.resetError(this.props.error);
    this.initLoading();
    this.refreshOrderList();
  }

  initLoading = () => {
    if (!this.props.error) {
      Toast.loading("Loading...", 1);
    }
  }

  refreshOrderList = () => {
    if (this.props.error === "orderListFetchError") {
      return;
    }
    const dataGet = this.props.getInitData(this.props.token, this.props.user.employeeId);
    if (this.props.error === "loading") {
      Toast.loading("Loading...", 1);
      return;
    }
    if (JSON.stringify(this.state.parkingOrders) != JSON.stringify(this.props.parkingOrders)) {
      this.setState({ parkingOrders: this.props.parkingOrders });
    }
  }

  render() {
    const dataGet = this.props.getInitData(this.props.token, this.props.user.employeeId);
    if (dataGet && !this.props.error) {
      Toast.hide();
    }
    const checkNoParkings = () => {
      if (this.props.parkingOrders.filter((order) => order.orderStatus === "parking").length === 0) {
        return <h2 className="empty-list">Your parking list is empty now!</h2>
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
  parkingOrders: state.parkingOrders,
  token: state.token,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getInitData: (token, id) => {
    orderResources.getOrderWithEmployee(token, id)
      .then(res => {
        if (res.status !== 200) {
          Toast.info("An error occurred when getting order list from server.", 1);
          dispatch({
            type: "SET_ERROR",
            payload: "orderListFetchError"
          });
          return "_ERROR";
        } else {
          return res.json();
        }
      })
      .then(res => {
        if (res !== "_ERROR") {
          dispatch({
            type: "GET_ORDERS",
            payload: res
          });
          dispatch({
            type: "SET_ERROR",
            payload: false
          });
        }
      })
    return true;
  },
  resetError: (error) => {
    if (!error) {
      dispatch({
        type: "SET_ERROR",
        payload: "loading"
      })
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ParkList);