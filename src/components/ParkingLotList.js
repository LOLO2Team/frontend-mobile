import React, { Component } from 'react';
import { connect } from "react-redux";
import ParkingLot from './ParkingLot';

class ParkingLotList extends Component {
  // state = {
  //   parkingLots: [
  //     {lotId: 1, lotName: "Sheung Wan Parking Lot"},
  //     {lotId: 2, lotName: "Central Parking Lot"},
  //     {lotId: 3, lotName: "HH Parking Lot"},
  //   ]
  // }

  render() {
    return (
      <div>
        {this.props.parkingLots.map((parkingLot) => {
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

const mapStateToProps = state => ({
  parkingLots: state.parkingLots
});

const mapDispatchToProps = dispatch => ({
  getParkingLots: () => {
    dispatch({
      type: "GET_PARKING_LOTS",
      payload: ''
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLotList);