import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout } from 'antd';
import { Toast, Button, WhiteSpace, WingBlank, List } from 'antd-mobile';
import orderResources from "../resources/orderResources"
const { Header, Sider, Content } = Layout;
const Item = List.Item;

class FetchCar extends Component {
    getOrder = (orderId) => {
        return this.props.parkingOrders.find(
          (order) => order.orderId === orderId
        );
    }
    onClickFetch = (orderId) => {
        this.props.finishOrder(orderId, this.props.token);
        return;
    }
    onClickCancel = () => {
        this.props.goToFetchList();
        return;
    }
    // getOrderParkingLot = (id) => {
    //     console.log("get order parking lot")
    //     console.log(this.props.parkingLots.find((parkingLot) => parkingLot.parkingLotId === id))
    //     return this.props.parkingLots.find((parkingLot) => parkingLot.parkingLotId === id)
    //         .id;
    // }

    render() {
        const dummy = this.props.getParkingLots(this.props.token);
        const order = this.getOrder(this.props.orderId);
        const dummy2 = this.props.getFetchParkingLot(order.parkingLotId);

        // console.log("---------------[FetchCar]: ")
        // console.log(order)
        // console.log(this.props.parkingLots)
        // console.log("[FetchCar]--------------------")
        return (
            <div>
                <Content style={{
                    margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                }}
                >
                    <List renderHeader={() => 'Select Parking Lot'} className="confirm-order-list">
                        <Item extra={order.orderId}>Order ID</Item>
                        <Item extra={order.vehicleNumber}>Car ID</Item>
                        <Item extra={this.props.parkingLotName}>Parking Lot</Item>
                        {/* <Item extra="Science Parking Lot">Parking Lot</Item> */}
                    </List>

                    {/* <p>Parking Lot: <span>{this.props.parkingLot}</span></p> */}
                    <Button type="primary" onClick={() => this.onClickFetch(order.orderId)}>Finished Fetching</Button><WhiteSpace />
                    <Button type="primary" onClick={this.onClickCancel}>Cancel</Button><WhiteSpace />
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
    parkingLotName: state.parkingLotName,
    token: state.token
});

const mapDispatchToProps = dispatch => ({
    getParkingLots: (token) => {
        orderResources.getOrderWithEmployee(token)
        .then(res => res.json())
        .then(res => dispatch({
            type: "SET_PARKING_LOTS",
            payload: res
        }))
    },
    getFetchParkingLot: (id) => {
        dispatch({
            type: "SET_FETCH_PARKING_LOT",
            payload: id
        })
    },
    finishOrder: (orderId, token) => {
        orderResources.finishOrder(orderId, token)
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
        })
        .then(dispatch({
            type: "SET_RENDER_CONTENT",
            payload: "History"
        }));
    },
    goToFetchList: () => {
        dispatch({
            type: "SET_RENDER_CONTENT",
            payload: "FetchList"
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchCar);