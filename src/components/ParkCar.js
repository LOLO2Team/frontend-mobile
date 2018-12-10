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
    state = {
        value: parkingLotList[0].value,
    };
    onChangeParkingLot = (value) => {
        console.log(value);
        this.setState({
            value,
        });
    }
    onScrollChangeParkingLot = (value) => {
        console.log(value);
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
                        value={this.state.value}
                        data={parkingLotList}
                        cascade={false}
                    />
                    {/* <p>Parking Lot: <span>{this.props.parkingLot}</span></p> */}
                    <Button type="primary" onClick={this.props.goToFetchList}>Finished Parking</Button><WhiteSpace />
                    <Button type="primary" onClick={this.props.goToParkList}>Cancel</Button><WhiteSpace />
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

const mapDispatchToProps = dispatch => ({
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
    goToFetchList: () => {
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