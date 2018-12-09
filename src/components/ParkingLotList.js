import React, { Component } from 'react'
import ParkingLot from './ParkingLot'

export default class ParkingLotList extends Component {
  onClickPark = () => {
        this.props.onClick("Park/Fetch")
    }

  render() {
    return (
      <div>
        <ParkingLot onClick={() => this.props.onClick("Order Details", 1)} />
        <ParkingLot onClick={() => this.props.onClick("Order Details", 2)} />
        <ParkingLot onClick={() => this.props.onClick("Order Details", 3)} />
      </div>
    )
  }
}
