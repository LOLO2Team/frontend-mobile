import React, { Component } from 'react'
import Order from './Order'
import { connect } from "react-redux";

class History extends Component {
    state = {
        orderId: 1
    }
    render() {
      const dummy = this.props.finishOrder
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
  parkingLots: state.parkingLots
});

const mapDispatchToProps = dispatch => ({
  finishOrder: fetch("https://parking-lot-backend.herokuapp.com/orders?status=fetched", {
      //getInitData: fetch("http://localhost:8081/orders", 
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
  
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
