import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout } from 'antd';
import { PickerView } from 'antd-mobile';
import { Toast, Button, WhiteSpace, WingBlank, List } from 'antd-mobile';
import orderResources from "../resources/orderResources"
import parkingLotResources from "../resources/parkingLotResources"
const { Header, Sider, Content } = Layout;
const Item = List.Item;
// const parkingLotList = [
//     {
//         label: 'Sheung Wan Parking Lot',
//         value: 0,
//     },
//     {
//         label: 'Central Parking Lot',
//         value: 1,
//     },
//     {
//         label: 'HH Parking Lot',
//         value: 2,
//     },
// ];


class ParkCar extends Component {
  onChangeParkingLot = (value) => {
    this.props.setParkingLotId(value)
  }
  onScrollChangeParkingLot = (value) => {
    this.props.setParkingLotId(value)
  }

  getOrder = (orderId) => {
    return this.props.parkingOrders.find(
      (order) => order.orderId === orderId
    );
  }

  onClickPark = () => {
    this.props.goToFetchList();
    // add parking lot to order item
  }
  onClickCancel = () => {
    this.props.goToParkList();
  }

  render() {
    const order = this.getOrder(this.props.orderId);
    const dummy = this.props.getInitData(this.props.token, this.props.user.employeeId);
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
          <PickerView
            onChange={this.onChangeParkingLot}
            onScrollChange={this.onScrollChangeParkingLot}
            value={this.props.parkingLotId}
            data={this.props.parkingLots}
            cascade={false}
          />
          {/* <p>Parking Lot: <span>{this.props.parkingLot}</span></p> */}
          <Button type="primary" onClick={() => this.props.goToFetchList(order, this.props.parkingLots[this.props.parkingLotId].id, this.props.token)}>Finished Parking</Button><WhiteSpace />
          <Button type="primary" onClick={this.props.goToParkList}>Cancel</Button><WhiteSpace />
        </Content>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parkingOrders: state.parkingOrders,
  orderId: state.orderId,
  parkingLotId: state.parkingLotId,
  parkingLots: state.parkingLots,
  user: state.user,
  token: state.token
});

const mapDispatchToProps = dispatch => ({
  getInitData: (token, employeeId) => parkingLotResources.getParkingLotByEmployee(token, employeeId)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: "SET_PARKING_LOTS",
        payload: res
      });
    }),

  setParkingLotId: (id) => {
    dispatch({
      type: "SET_PARKING_LOT_ID",
      payload: id
    })
  },
  goToParkList: () => {
    dispatch({
      type: "SET_RENDER_CONTENT",
      payload: "ParkList"
    });
  },
  goToFetchList: (order, parkingLotId, token) => {
    orderResources.parkedOrder(token, order.orderId, parkingLotId)
      .then(res => {
        if (res.status == 200) {
          Toast.success("Order status updated", 1);
          dispatch({
            type: "SET_ERROR",
            payload: false
          });
        } else {
          Toast.fail("Error");
          dispatch({
            type: "SET_ERROR",
            payload: true
          });
        }
      });
    dispatch({
      type: "SET_RENDER_CONTENT",
      payload: "FetchList"
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ParkCar);