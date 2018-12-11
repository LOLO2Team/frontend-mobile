import React, { Component } from 'react';
import { connect } from "react-redux";
import { TabBar, List, NavBar, Icon } from 'antd-mobile';

const Item = List.Item;

class Order extends Component {
    orderClicked = () => {
        switch(this.props.type) {
            case "Orders":
                this.props.goToOrderDetails();
                this.props.setParkingOrder(this.props.order.orderId);
                break;
            
            case "Park":
                this.props.goToParkCar();
                this.props.setParkingOrder(this.props.order.orderId);
                break;

            case "Fetch":
            this.props.goToFetchCar();
            this.props.setParkingOrder(this.props.order.orderId);
                break;

            case "History":
                break;
            
            default:
                return;
        }
    }

    render() {
        const printFetchMark = () => {
            if (this.props.type === "Fetch") {
                return <i className="fa-icon fetch-now-icon fas fa-exclamation"></i>;
            }
        }

        const printCarIcon = () =>{
            if(this.props.type !== "History"){
                return <i className="car-icon fas fa-car"></i>
            }
        }

        const printHistoryIcon = () =>{
            if(this.props.type === "History"){
                return <i className="history-icon fas fa-check"></i>
            }
        }

        const getLocation = () =>{
            console.log(this.props.order);
            
            if(this.props.order.parkingLotId !== null){
                return this.props.order.parkingLotId;
            }
        }

        return (
            <div className="order">
                <Item onClick={this.orderClicked} extra={getLocation()} className="order-item" >
                    {printFetchMark()}
                    {printCarIcon()}
                    {printHistoryIcon()}
                    
                    <div className="order-desc">
                        <div>Order ID {this.props.order.orderId}</div>
                        <div>{this.props.order.vehicleNumber}</div>
                    </div>
                </Item>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setParkingOrder: (orderId) => {
        dispatch({
            type: "SET_PARKING_ORDER",
            payload: orderId
        })
    },
    goToOrderDetails: () => {
        dispatch({
            type: "SET_RENDER_CONTENT",
            payload: "OrderDetails"
        });
    },
    goToParkCar: () => {
        dispatch({
            type: "SET_RENDER_CONTENT",
            payload: "ParkCar"
        });
    },
    goToFetchCar: () =>{
        dispatch({
            type: "SET_RENDER_CONTENT",
            payload: "FetchCar"
        });
    }
    
});

export default connect(null, mapDispatchToProps)(Order);