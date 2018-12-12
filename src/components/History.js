import React, { Component } from 'react';
import Order from './Order';
import { connect } from "react-redux";
import { Toast } from 'antd-mobile';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingOrders: this.props.parkingOrders,
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
    const dataGet = this.props.getInitData(this.props.token);
    if (this.props.error === "loading") {
      Toast.loading("Loading...", 1);
      return;
    }
    if (JSON.stringify(this.state.parkingOrders) != JSON.stringify(this.props.parkingOrders)) {
      this.setState({ parkingOrders: this.props.parkingOrders });
    }
  }

  render() {
    const checkNoOrders = () => {
      if (this.props.parkingOrders.length === 0) {
        return <div>Your order list is empty now!</div>
      }
    }
    return (
      <div>
        {this.props.parkingOrders.map((order) =>
          <Order order={order} type="History" />)}

        {checkNoOrders()}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  parkingOrders: state.parkingOrders,
  orderId: state.orderId,
  parkingLotId: state.parkingLotId,
  parkingLots: state.parkingLots,
  token: state.token
});

const mapDispatchToProps = dispatch => ({
  getInitData: (token) => {
    fetch("https://parking-lot-backend.herokuapp.com/orders?status=fetched", {
      //getInitData: fetch("http://localhost:8081/orders", 
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      }),
      mode: 'cors',
      method: 'GET'
    })
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

});

export default connect(mapStateToProps, mapDispatchToProps)(History);
