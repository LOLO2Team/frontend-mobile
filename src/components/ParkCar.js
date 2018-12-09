import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

export default class ParkCar extends Component {
    onClickPark = () => {
        this.props.setRenderContent("")
        this.props.setBottomNav("")
        // add parking lot to order item
    }
    render() {
        return (
            <div>
                <Content style={{
                    margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                }}
                >
                    <p>Order ID: <span>{this.props.parkingOrder.orderId}</span></p>
                    <p>Car ID: <span>{this.props.parkingOrder.carId}</span></p>
                    <p>Parking Lot: <span>{this.props.parkingLot}</span></p>
                    <button onClick={this.onClickPark}>Finished Parking</button>
                </Content>
            </div>
        )
    }
}