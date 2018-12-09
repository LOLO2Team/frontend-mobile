import React, { Component } from 'react'
import ParkingLot from './ParkingLot'

export default class ParkingLotList extends Component {
  state = {
    parkingLots: [
      {lotId: 1, lotName: "Sheung Wan Parking Lot"},
      {lotId: 2, lotName: "Central Parking Lot"},
      {lotId: 3, lotName: "HH Parking Lot"},
    ]
  }

  render() {
    return (
      <div>
        {this.state.parkingLots.map((parkingLot) => {
          return <ParkingLot 
            parkingLot={parkingLot} 
            setRenderContent={this.props.setRenderContent} 
            setParkingLot={this.props.setParkingLot} 
          />
        })}
      </div>
    )
  }
}
