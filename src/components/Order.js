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
                <Item onClick={this.orderClicked} >Parking Order {this.props.order.id}</Item>
            </div>
        )
    }
}
