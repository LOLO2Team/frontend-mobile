import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout } from 'antd';
import { PickerView } from 'antd-mobile';
import { Button, WhiteSpace, WingBlank, List } from 'antd-mobile';
const { Header, Sider, Content } = Layout;
const Item = List.Item;
const parkingLotList = [
    {
        label: 'Sheung Wan Parking Lot',
        value: 0,
    },
    {
        label: 'Central Parking Lot',
        value: 1,
    },
    {
        label: 'HH Parking Lot',
        value: 2,
    },
];


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
        const dummy = this.props.getInitData;
        return (
            <div>
                <Content style={{
                    margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                }}
                >
                    <List renderHeader={() => 'Select Parking Lot'} className="confirm-order-list">
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
                    <Button type="primary" onClick={() => this.props.goToFetchList(order,this.props.parkingLotId)}>Finished Parking</Button><WhiteSpace />
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
    parkingLots: state.parkingLots
});

const mapDispatchToProps = dispatch => ({
    getInitData: fetch("https://parking-lot-backend.herokuapp.com/parkinglots?employeeId=0", {
        //getInitData: fetch("http://localhost:8081/orders", 
          headers: new Headers({
              'Content-Type': 'application/json'
          }),
          mode: 'cors', 
          method: 'GET'    
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: "SET_PARKING_LOTS",
                payload: res
            })
        }),

    setParkingLotId: (id) => {
        dispatch({
            type:"SET_PARKING_LOT_ID",
            payload: id
        })
    },
    goToParkList: () => {
      dispatch({
        type: "SET_RENDER_CONTENT",
        payload: "ParkList"
      });
      dispatch({
          type: "SET_BOTTOM_NAV",
          payload: "ParkTab"
      })
    },
    goToFetchList: (order, parkingLotId) => {
        console.log(parkingLotId)
        fetch("https://parking-lot-backend.herokuapp.com/orders/" + order.orderId + "/parkingLotId/"+  parkingLotId,{
            mode: 'cors',
            method: 'PUT', 
            headers: new Headers({ 'Content-Type': 'application/json'})
        })
        dispatch({
          type: "SET_RENDER_CONTENT",
          payload: "FetchList"
        });
        dispatch({
            type: "SET_BOTTOM_NAV",
            payload: "FetchTab"
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ParkCar);