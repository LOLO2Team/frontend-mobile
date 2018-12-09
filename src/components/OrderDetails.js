import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

class OrderDetails extends Component {
  // state = {
  //   order: {
  //     orderId: this.props.orderId,
  //     carId: "car 1"
  //   }
  // }
  getOrder = (orderId) => {
    return this.props.parkingOrders.find(
      (order) => order.orderId === orderId
    );
  }

  onClickPark = () => {
    this.props.setRenderContent("Park/Fetch");
    this.props.setBottomNav("ParkFetchTab");
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
          <p>Order ID: <span>{order.orderId}</span></p>
          <p>Car ID: <span>{order.carId}</span></p>
          <button onClick={this.onClickPark}>Confirm Order</button>
          <button onClick={this.onClickCancel}>Cancel</button>
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