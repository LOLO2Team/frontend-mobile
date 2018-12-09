import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

class ParkCar extends Component {
  getOrder = (orderId) => {
    return this.props.parkingOrders.find(
      (order) => order.orderId === orderId
    );
  }

  onClickPark = () => {
    this.props.setRenderContent("")
    this.props.setBottomNav("")
    // add parking lot to order item
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
          <p>Parking Lot: <span>{this.props.parkingLot}</span></p>
          <button onClick={this.onClickPark}>Finished Parking</button>
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parkingOrders: state.parkingOrders,
  orderId: state.orderId,
  parkingLot: state.parkingLot
});

export default connect(mapStateToProps, null)(ParkCar);