import React, { Component } from 'react';
import { connect } from "react-redux";
import Order from './Order'

class OrderList extends Component {
  // checkNoOrders = () => {
  //   if (this.props.parkingOrders.length == 0) {
  //     return <div>Your order list is empty now!</div>
  //   }
  // }

  render() {
    const checkNoOrders = () => {
      if (this.props.parkingOrders.length === 0) {
        return <div>Your order list is empty now!</div>
      }
    }
    return (
      <div>
        {this.props.parkingOrders.map((order) =>
          <Order order={order} type="Orders" />)}

          {checkNoOrders()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parkingOrders: state.parkingOrders
});

const mapDispatchToProps = dispatch => ({
  getInitData: fetch("https://parking-lot-backend.herokuapp.com/orders?status=pending", {
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
     dispatch({
      type: "SET_HEADER",
      payload: "Order List"
    });
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
