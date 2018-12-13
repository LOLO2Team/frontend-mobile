import React, { Component } from 'react';
import { connect } from "react-redux";
import { TabBar, List, NavBar, Icon } from 'antd-mobile';
import Order from './Order';
import { Toast } from 'antd-mobile';
import orderResources from "../resources/orderResources"
import parkingLotResources from "../resources/parkingLotResources"

const Item = List.Item;

class FetchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingOrders: this.props.parkingOrders
    }
    this.props.resetError(this.props.error);
    this.initLoading();
    this.refreshOrderList();
  }

  initLoading = () => {
    if (!this.props.error) {
      Toast.loading("Loading...", 1);
    }
  }

  refreshOrderList = () => {
    if (this.props.error === "orderListFetchError") {
      return;
    }
    const dataGet = this.props.getInitData;
    if (this.props.error === "loading") {
      Toast.loading("Loading...", 1);
      return;
    }
    if (JSON.stringify(this.state.parkingOrders) != JSON.stringify(this.props.parkingOrders)) {
      this.setState({ parkingOrders: this.props.parkingOrders });
    }
  }

  componentWillMount() {
    this.props.resetError(this.props.error);
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
    const dummy = this.props.getInitData(this.props.token);
    const dummy2 = this.props.getParkingLots(this.props.token);
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
  error: state.error,
  token: state.token
});

const mapDispatchToProps = dispatch => ({
  getInitData: (token) => {
    orderResources.getAll(token)
    .then(res => {
      if (res.status !== 200) {
        Toast.info("An error occurred when getting order list from server.", 1);
        dispatch({
          type: "SET_ERROR",
          payload: "orderListFetchError"
        });
        return "_ERROR";
      } else {
        return res.json();
      }
    })
    .then(res => {
      if (res !== "_ERROR") {
        dispatch({
          type: "GET_ORDERS",
          payload: res
        });
        dispatch({
          type: "SET_ERROR",
          payload: false
        });
      }
    })
    return true;
  },
  getParkingLots: (token) => {
    parkingLotResources.getParkingLotByEmployee(token)
    .then(res => {
      if (res.status !== 200) {
        Toast.info("An error occurred when getting order list from server.", 1);
        dispatch({
          type: "SET_ERROR",
          payload: "orderListFetchError"
        });
        return "_ERROR";
      } else {
        return res.json();
      }
    })
    .then(res => {
      if (res !== "_ERROR") {
        dispatch({
          type: "SET_PARKING_LOTS",
          payload: res
        });
      }
    })
    return true;
  },
  resetError: (error) => {
    if (!error) {
      dispatch({
        type: "SET_ERROR",
        payload: "loading"
      })
    }
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(FetchList);