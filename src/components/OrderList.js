import React, { Component } from 'react';
import Order from './Order'

export default class OrderList extends Component {
  render() {
    return (
      <div>
        <Order />
        <Order />
        <Order />
      </div>
    )
  }
}
