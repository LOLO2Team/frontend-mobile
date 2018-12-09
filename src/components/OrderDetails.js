import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

export default class OrderDetails extends Component {
    state = {
        order: {
            orderId: this.props.orderId,
            carId: "car 1"
        }
    }

    onClickPark = () => {
        this.props.setRenderContent("Park/Fetch")
        this.props.setBottomNav("ParkFetchTab")
    }
    render() {
        return (
            <div>
                <Content style={{
                    margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                }}
                >
                    <p>Order ID: <span>{this.state.order.orderId}</span></p>
                    <p>Car ID: <span>{this.state.order.carId}</span></p>
                    <button onClick={this.onClickPark}>Grab Car</button>
                </Content>
            </div>
        )
    }
}