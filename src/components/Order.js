import React, { Component } from 'react';
import { connect } from "react-redux";
import { TabBar, List, NavBar, Icon } from 'antd-mobile';

const Item = List.Item;

class Order extends Component {
    orderClicked = () => {
        this.props.goToOrderDetails();
        this.props.setParkingOrder(this.props.order.orderId);
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

// const mapStateToProps = state => ({
//   parkingOrders: state.parkingOrders
// });

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
    }
});


export default connect(null, mapDispatchToProps)(Order);