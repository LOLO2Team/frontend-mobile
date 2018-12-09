import React, { Component } from 'react'
import { TabBar, List, NavBar, Icon } from 'antd-mobile';

const Item = List.Item;

export default class Order extends Component {
    sdhfsdb = () => {

    }

    render() {
        return (
            <div>
                <Item onClick={this.props.onClick} extra={'details+'}>Parking Order</Item>
            </div>
        )
    }
}
