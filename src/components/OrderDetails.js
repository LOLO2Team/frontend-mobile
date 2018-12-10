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
          <Button type="primary" onClick={this.props.goToPark}>Confirm Order</Button><WhiteSpace />
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
  goToPark: () => {
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