import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout } from 'antd';
import { Button, WhiteSpace, WingBlank, List } from 'antd-mobile';
const { Header, Sider, Content } = Layout;
const Item = List.Item;

class FetchCar extends Component {
    // state = {
    //     parkingOrders: [
    //         {
    //           orderId: 0,
    //           vehicleNumber: "sdf",
    //           orderStatus: "parked"
    //         },
    //         {
    //           orderId: 1,
    //           vehicleNumber: "abc",
    //           orderStatus: "fetching"
    //         }
    //     ],
    //     orderId: 1
    // }
    getOrder = (orderId) => {
        return this.props.parkingOrders.find(
          (order) => order.orderId === orderId
        );
    }
    onClickFetch = (orderId) => {
        this.props.finishOrder(orderId);
        return;
    }
    onClickCancel = () => {
        return;
    }
    render() {
        const order = this.getOrder(this.props.orderId);
        return (
            <div>
                <Content style={{
                    margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                }}
                >
                    <List renderHeader={() => 'Select Parking Lot'} className="confirm-order-list">
                        <Item extra={order.orderId}>Order ID</Item>
                        <Item extra={order.vehicleNumber}>Car ID</Item>
                        <Item extra={this.props.parkingLots[order.parkingLotId].label}>Parking Lot</Item>
                    </List>

                    {/* <p>Parking Lot: <span>{this.props.parkingLot}</span></p> */}
                    <Button type="primary" onClick={() => this.onClickFetch(order.orderId)}>Fetch Car</Button><WhiteSpace />
                    <Button type="primary" onClick={this.onClickCancel}>Cancel</Button><WhiteSpace />
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    parkingOrders: state.parkingOrders,
    orderId: state.orderId,
    parkingLotId: state.parkingLotId,
    parkingLots: state.parkingLots
});

const mapDispatchToProps = dispatch => ({
    finishOrder: (orderId) => fetch("https://parking-lot-backend.herokuapp.com/orders/" + orderId, {
        //getInitData: fetch("http://localhost:8081/orders", 
          headers: new Headers({
              'Content-Type': 'application/json'
          }),
          mode: 'cors', 
          method: 'DELETE'    
        })
    // setParkingLotId: (id) => {
    //     dispatch({
    //         type:"SET_PARKING_LOT_ID",
    //         payload: id
    //     })
    // },
    //
    // goToParkList: () => {
    //   dispatch({
    //     type: "SET_RENDER_CONTENT",
    //     payload: "ParkList"
    //   });
    //   dispatch({
    //       type: "SET_BOTTOM_NAV",
    //       payload: "ParkTab"
    //   })
    // },
    // // using
    // goToFetchList: (order, parkingLotId) => {
    //     console.log(parkingLotId)
    //     fetch("https://parking-lot-backend.herokuapp.com/orders/" + order.orderId + "/parkingLotId/"+  parkingLotId,{
    //         mode: 'cors',
    //         method: 'PUT', 
    //         headers: new Headers({ 'Content-Type': 'application/json'})
    //     })
    //     dispatch({
    //       type: "SET_RENDER_CONTENT",
    //       payload: "FetchList"
    //     });
    //     dispatch({
    //         type: "SET_BOTTOM_NAV",
    //         payload: "FetchTab"
    //     })
    // }
});

export default connect(mapStateToProps, mapDispatchToProps)(FetchCar);