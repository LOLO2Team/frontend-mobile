import React, { Component } from 'react';
import { connect } from "react-redux";
import Order from './Order';
import { Toast } from 'antd-mobile';

class ParkList extends Component {
  constructor(props) {
    super(props);
    if (!this.props.error){
      Toast.loading("Loading...", 100);
    }
  }


  render() {
    const dataGet = this.props.getInitData;
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
  parkingOrders: state.parkingOrders
});

const mapDispatchToProps = dispatch => ({
  getInitData: fetch("https://parking-lot-backend.herokuapp.com/orders/", {
    //getInitData: fetch("http://localhost:8081/orders", 
      headers: new Headers({
          'Content-Type': 'application/json'
      }),
      mode: 'cors', 
      method: 'GET'    
    })
    .then(res => res.json())
    .then(res => 
      dispatch({
      type: "GET_ORDERS",
      payload: res
    }),
    dispatch({
      type: "SET_HEADER",
      payload: "Park List"
    }))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(ParkList);