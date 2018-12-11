import React, { Component } from 'react';
import { connect } from "react-redux";
import { TabBar, List, NavBar, Icon } from 'antd-mobile';
import Order from './Order';
import { Toast } from 'antd-mobile';

const Item = List.Item;

class FetchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingOrders: this.props.parkingOrders
    }
    this.refreshOrderList();
    if (!this.props.error) {
      Toast.loading("Loading...", 100);
    }
  }

  refreshOrderList = () => {
    const dataGet = this.props.getInitData;
    if (dataGet && !this.props.error) {
      Toast.hide();
    }
    if (JSON.stringify(this.state.parkingOrders) != JSON.stringify(this.props.parkingOrders)) {
      this.setState({ parkingOrders: this.props.parkingOrders });
    }
  }

  componentWillMount() {
    this.refreshOrderList();
  }

  componentDidMount() {
    this.refreshOrderList();
    this.interval = setInterval(this.refreshOrderList, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const dummy = this.props.getInitData;
    const dummy2 = this.props.getParkingLots;
    const checkNoFetchings = () => {
      if (this.state.parkingOrders.filter((order) => order.orderStatus === "parked" || order.orderStatus === "fetching").length === 0) {
        return <h2 className="empty-list">Your fetching list is empty now!</h2>
      }
    }
    return (
      <div>
        {/* need to change state */}
        {this.state.parkingOrders
          .filter((order) => order.orderStatus === "fetching")
          .map((order) =>
            <div className="fetch-now">
              <Order order={order} type="Fetch" />
            </div>
          )}
        {this.state.parkingOrders
          .filter((order) => order.orderStatus === "parked")
          .map((order) =>
            <div className="parked">
              <Order order={order} />
            </div>
          )}
        {checkNoFetchings()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parkingOrders: state.parkingOrders,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  getInitData: fetch("https://parking-lot-backend.herokuapp.com/orders", {
    //getInitData: fetch("http://localhost:8081/orders?status=parked", {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    mode: 'cors',
    method: 'GET'
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: "GET_ORDERS",
        payload: res
      })
    }),

  getParkingLots: fetch("https://parking-lot-backend.herokuapp.com/parkinglots?employeeId=0", {
    //getInitData: fetch("http://localhost:8081/orders", 
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    mode: 'cors',
    method: 'GET'
  })
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: "SET_PARKING_LOTS",
        payload: res
      }),
      dispatch({
        type: "SET_HEADER",
        payload: "Fetch List"
      })
    ),
});


export default connect(mapStateToProps, mapDispatchToProps)(FetchList);