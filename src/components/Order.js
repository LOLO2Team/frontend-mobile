import React, { Component } from 'react'
import { TabBar, List, NavBar, Icon } from 'antd-mobile';

const Item = List.Item;

export default class Order extends Component {

    render() {
        return (
            <div>
                <Item onClick={(name,id) => this.props.onClick(name,id) } extra={'details+'}>Parking Order {this.props.order.id}</Item>
            </div>
        )
    }
}
