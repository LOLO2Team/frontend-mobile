import React, { Component } from 'react'
import { TabBar, List, NavBar, Icon } from 'antd-mobile';

const Item = List.Item;

export default class ParkingLot extends Component {
    gotoParkCar = () => {
        this.props.setRenderContent("Park Car");
        this.props.setParkingLot(this.props.parkingLot.lotName);
    }

    render() {
        return (
            <div>
                <Item onClick={this.gotoParkCar}>{this.props.parkingLot.lotName}</Item>
            </div>
        )
    }
}
