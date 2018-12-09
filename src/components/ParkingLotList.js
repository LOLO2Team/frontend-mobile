import React, { Component } from 'react'
import ParkingLot from './ParkingLot'

export default class ParkingLotList extends Component {
  render() {
    return (
      <div>
        <ParkingLot onClick={() => this.props.onClick("Park Car", 1)} />
        <ParkingLot onClick={() => this.props.onClick("Park Car", 2)} />
        <ParkingLot onClick={() => this.props.onClick("Park Car", 3)} />
      </div>
    )
  }
}
