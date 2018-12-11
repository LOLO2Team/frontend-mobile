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
    if (!this.props.error) {
      Toast.loading("Loading...", 100);
    }
  }

  refreshOrderList = () => {
    const dataGet = this.props.getInitData();
    if (dataGet && !this.props.error) {
      Toast.hide();
    }
    if (JSON.stringify(this.state.parkingOrders) != JSON.stringify(this.props.parkingOrders)) {
      this.setState({parkingOrders: this.props.parkingOrders});
    }
  }

  componentWillMount() {
    console.log("start")
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
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  getInitData: () => {
    fetch("https://parking-lot-backend.herokuapp.com/orders?status=pending", {
    //getInitData: fetch("http://localhost:8081/orders", {
      headers: new Headers({
          'Content-Type': 'application/json'
      }),
      mode: 'cors', 
      method: 'GET'    
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
      type: "GET_ORDERS",
      payload: res
      })
   })
   return true;
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);