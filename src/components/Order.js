import React, { Component } from 'react'
import { TabBar, List, NavBar, Icon } from 'antd-mobile';

const Item = List.Item;

export default class Order extends Component {

    render() {
        return (
            <div>
                <Item onClick={(param) => this.props.onClick(param) } extra={'details+'}>Parking Order</Item>
            </div>
        )
    }
}
