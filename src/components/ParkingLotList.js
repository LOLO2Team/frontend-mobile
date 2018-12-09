import React, { Component } from 'react';
import { connect } from "react-redux";
import ParkingLot from './ParkingLot';

class ParkingLotList extends Component {
  render() {
    return (
      <div>
        {this.props.parkingLots.map((parkingLot) => {
          return <ParkingLot 
            parkingLot={parkingLot} 
            setRenderContent={this.props.setRenderContent} 
          />
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parkingLots: state.parkingLots
});

export default connect(mapStateToProps)(ParkingLotList);