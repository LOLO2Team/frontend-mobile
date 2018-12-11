import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout } from 'antd';
import { Button, WhiteSpace, WingBlank, List } from 'antd-mobile';
const { Header, Sider, Content } = Layout;
const Item = List.Item;

class FetchCar extends Component {
    getOrder = (orderId) => {
        return this.props.parkingOrders.find(
          (order) => order.orderId === orderId
        );
    }
    onClickFetch = (orderId) => {
        this.props.finishOrder(orderId);
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
        const dummy = this.props.getParkingLots;
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
                    <Button type="primary" onClick={() => this.onClickFetch(order.orderId)}>Fetch Car</Button><WhiteSpace />
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
    parkingLotName: state.parkingLotName
});

const mapDispatchToProps = dispatch => ({
    getParkingLots: () => {
        fetch("https://parking-lot-backend.herokuapp.com/parkinglots?employeeId=0", {
        //getInitData: fetch("http://localhost:8081/orders", 
          headers: new Headers({
              'Content-Type': 'application/json'
          }),
          mode: 'cors', 
          method: 'GET'
        })
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
    finishOrder: (orderId) => {
        fetch("https://parking-lot-backend.herokuapp.com/orders/" + orderId, {
        //getInitData: fetch("http://localhost:8081/orders", 
          headers: new Headers({
              'Content-Type': 'application/json'
          }),
          mode: 'cors', 
          method: 'DELETE'    
        })
        .then(dispatch({
            type: "SET_RENDER_CONTENT",
            payload: "History"
        })).then(dispatch({
            type: "SET_BOTTOM_NAV",
            payload: "HistoryTab"
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