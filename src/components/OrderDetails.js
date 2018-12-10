import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout } from 'antd';
import { Button, WhiteSpace, WingBlank, List } from 'antd-mobile';
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
          <List renderHeader={() => 'Confirm Order'} className="confirm-order-list">
            <Item extra={order.orderId}>Order ID</Item>
            <Item extra={order.vehicleNumber}>Car ID</Item>
          </List>
          <Button type="primary" onClick={() => this.props.goToPark(order)}>Confirm Order</Button><WhiteSpace />
          <Button type="primary" onClick={this.props.goToOrders}>Cancel</Button><WhiteSpace />
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parkingOrders: state.parkingOrders,
  orderId: state.orderId
});

const mapDispatchToProps = dispatch => ({
  goToPark: (order) => {
    fetch("https://parking-lot-backend.herokuapp.com/orders/" + order.orderId + "/employeeId/0",{
    //fetch("http://localhost:8081/orders/" + order.orderId + "/employeeId/0",{
      mode: 'cors',
      method: 'PUT', 
      body: JSON.stringify({
        "content": order.orderId,
        "vehicleNumber": order.vehicleNumber,
        "orderStatus": "parking",
        "employeeId": 0
      }),
      headers: new Headers({ 'Content-Type': 'application/json'})
    })
    dispatch({
      type: "SET_RENDER_CONTENT",
      payload: "ParkCar"
    });
    dispatch({
      type: "SET_BOTTOM_NAV",
      payload: "ParkTab"
    });
  },
  goToOrders: () => {
    dispatch({
      type: "SET_RENDER_CONTENT",
      payload: "Orders"
    });
  } 
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);