import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

export default class OrderDetails extends Component {
    onClickPark = () => {
        this.props.onClick("Park")
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
                    <button onClick={this.onClickPark}>Grab Car</button>
                </Content>
            </div>
        )
    }
}