import React, { Component } from 'react';
import Order from './Order'

export default class OrderList extends Component {
  renderContent() {

  }
  render() {
    return (
      <div>
        <Order onClick={() => this.props.onClick("Order Details", 1)} />
        <Order onClick={() => this.props.onClick("Order Details", 2)} />
        <Order onClick={() => this.props.onClick("Order Details", 3)} />
      </div>
    )
  }
}
