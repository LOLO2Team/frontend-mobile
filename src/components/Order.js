import React, { Component } from 'react'
import { TabBar, List, NavBar, Icon } from 'antd-mobile';

const Item = List.Item;

export default class Order extends Component {
    orderClicked = () => {
        this.props.setRenderContent("Order Details", this.props.order.id);
        this.props.setParkingOrder(this.props.order);
      }

    render() {
        return (
            <div>
                <Item onClick={this.orderClicked} className="order-item" >
                    <div>Parking Order {this.props.order.orderId}</div>
                    <div>{this.props.order.carId}</div>
                </Item>
            </div>
        )
    }
}
