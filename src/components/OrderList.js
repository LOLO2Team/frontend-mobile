import React, { Component } from 'react';
import { connect } from "react-redux";
import Order from './Order';
import { Toast } from 'antd-mobile';

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingOrders: this.props.parkingOrders
    }
    this.refreshOrderList();
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

  componentWillMount() {
    this.props.resetError();
    this.refreshOrderList();
  }

  componentDidMount() {
    this.refreshOrderList();
    this.interval = setInterval(this.refreshOrderList, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    const checkNoOrders = () => {
      if (this.state.parkingOrders.length === 0) {
        return <h2 className="empty-list">Your order list is empty now!</h2>
      }
    }
    return (
      <div>
        {this.state.parkingOrders
          .filter((order) => order.orderStatus === "pending")
          .map((order) =>
            <Order order={order} type="Orders" />)}

        {checkNoOrders()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parkingOrders: state.parkingOrders,
  error: state.error,
  token: state.token
});

const mapDispatchToProps = dispatch => ({
  getInitData: (token) => {
    // dispatch({
    //   type: "SET_ERROR",
    //   payload: "loading"
    // });
    fetch("https://parking-lot-backend.herokuapp.com/orders?status=pending", {
      // fetch("http://localhost:8081/orders?status=pending", {
      //getInitData: fetch("http://localhost:8081/orders", {
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
            payload: "false"
          });
        }
      })
    return true;

  },
  resetError: () => {
    dispatch({
      type: "SET_ERROR",
      payload: "loading"
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);