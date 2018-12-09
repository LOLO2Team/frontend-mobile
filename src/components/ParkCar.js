import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

export default class ParkCar extends Component {
    onClickPark = () => {
        this.props.setRenderContent("")
        this.props.setBottomNav("")
    }
    render() {
        return (
            <div>
                <Content style={{
                    margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                }}
                >
                    <p>Order ID: <span>{this.props.id}</span></p>
                    <p>Car ID: </p>
                    <button onClick={this.onClickPark}>Park Car</button>
                </Content>
            </div>
        )
    }
}