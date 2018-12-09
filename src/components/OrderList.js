import React, { Component } from 'react';
import Order from './Order'

export default class OrderList extends Component {
  render() {
    return (
      <div>
        <Order onClick={() => this.props.onClick("Order", 1)} />
        <Order onClick={() => this.props.onClick("Order", 2)} />
        <Order onClick={() => this.props.onClick("Order", 3)} />
      </div>
    )
  }
}
