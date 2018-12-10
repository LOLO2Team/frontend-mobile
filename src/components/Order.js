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
                break;
            
            default:
                return;
        }
    }

    render() {
        return (
            <div class="order">
                <Item onClick={this.orderClicked} className="order-item" >
                    <i class="car-icon fas fa-car"></i>
                    <div class="order-desc">
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
    }
});

export default connect(null, mapDispatchToProps)(Order);