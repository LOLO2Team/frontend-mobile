import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout } from 'antd';
import { Button, WhiteSpace, WingBlank, List } from 'antd-mobile';
const { Header, Sider, Content } = Layout;
const Item = List.Item;

class OrderDetails extends Component {
  // state = {
  //   order: {
  //     orderId: this.props.orderId,
  //     vehicleNumber: "car 1"
  //   }
  // }
  getOrder = (orderId) => {
    return this.props.parkingOrders.find(
      (order) => order.orderId === orderId
    );
  }

  onClickPark = () => {
    this.props.setRenderContent("Park");
    this.props.setBottomNav("ParkTab");
  }

  onClickCancel = () => {
    this.props.setRenderContent("Orders");
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
          <Button type="primary" onClick={this.onClickPark}>Confirm Order</Button><WhiteSpace />
          <Button type="primary" onClick={this.onClickCancel}>Cancel</Button><WhiteSpace />
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parkingOrders: state.parkingOrders,
  orderId: state.orderId
});

export default connect(mapStateToProps, null)(OrderDetails);