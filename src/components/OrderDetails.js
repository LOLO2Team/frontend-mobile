import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout } from 'antd';
import { Toast, Button, WhiteSpace, WingBlank, List } from 'antd-mobile';
const { Header, Sider, Content } = Layout;
const Item = List.Item;

class OrderDetails extends Component {
  getOrder = (orderId) => {
    return this.props.parkingOrders.find(
      (order) => order.orderId === orderId
    );
  }

  render() {
    const order = this.getOrder(this.props.orderId);
    return (
      <div>
        <Content style={{
          margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
        }}
        >
          <List className="confirm-order-list">
            <Item extra={order.orderId}>Order ID</Item>
            <Item extra={order.vehicleNumber}>Car ID</Item>
          </List>
          <Button type="primary" onClick={() => this.props.onConfirm(order,this.props.token)}>Confirm Order</Button><WhiteSpace />
          <Button type="primary" onClick={this.props.onCancel}>Cancel</Button><WhiteSpace />
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parkingOrders: state.parkingOrders,
  orderId: state.orderId,
  token: state.token
});

const mapDispatchToProps = dispatch => ({
  onConfirm: (order, token) => {
    fetch("https://parking-lot-backend.herokuapp.com/orders/" + order.orderId + "/employeeId/0", {
      //fetch("http://localhost:8081/orders/" + order.orderId + "/employeeId/0",{
      mode: 'cors',
      method: 'PUT',
      body: JSON.stringify({
        "content": order.orderId,
        "vehicleNumber": order.vehicleNumber,
        "orderStatus": "parking",
        "employeeId": 0
      }),
      headers: new Headers({ 
        'Content-Type': 'application/json',
        'Authorization': token
     })
    })
      .then(res => {
        if (res.status === 200) {
          Toast.success("Order confirmed", 1);
          dispatch({
            type: "SET_ERROR",
            payload: false
          });
          dispatch({
            type: "SET_RENDER_CONTENT",
            payload: "ParkCar"
          });
        }
        else {
          if (res.status === 403) {
            Toast.fail("Action not authorized", 2);
          } else {
            Toast.fail("This order has been grabbed", 2);
          }
          dispatch({
            type: "SET_ERROR",
            payload: true
          });
          dispatch({
            type: "SET_RENDER_CONTENT",
            payload: "Orders"
          });
        }
      })
  },
  onCancel: () => {
    dispatch({
      type: "SET_RENDER_CONTENT",
      payload: "Orders"
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);