import React, { Component } from 'react';
import { Layout } from 'antd';
import { Button, WhiteSpace, WingBlank, List } from 'antd-mobile';
const { Header, Sider, Content } = Layout;
const Item = List.Item;

export default class FetchCar extends Component {
    state = {
        parkingOrders: [
            {
              orderId: 0,
              vehicleNumber: "sdf",
              orderStatus: "parked"
            },
            {
              orderId: 1,
              vehicleNumber: "abc",
              orderStatus: "fetching"
            }
        ],
        orderId: 1
    }
    getOrder = (orderId) => {
        // state here
        return this.state.parkingOrders.find(
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
        // state here
        const order = this.getOrder(this.state.orderId);
        return (
            <div>
                <Content style={{
                    margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                }}
                >
                    <List renderHeader={() => 'Select Parking Lot'} className="confirm-order-list">
                        <Item extra={"Order ID"}>Order ID</Item>
                        <Item extra={"Car ID"}>Car ID</Item>
                        <Item extra={"Parking Lot"}>Parking Lot</Item>
                    </List>

                    {/* <p>Parking Lot: <span>{this.props.parkingLot}</span></p> */}
                    <Button type="primary" onClick={() => this.props.goToFetchList(order, this.state.value[0])}>Fetch Car</Button><WhiteSpace />
                    <Button type="primary" onClick={this.props.goToParkList}>Cancel</Button><WhiteSpace />
                </Content>
            </div>
        )
    }
}
