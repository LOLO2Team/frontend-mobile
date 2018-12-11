import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import { connect } from "react-redux";

class HeaderBar extends Component {
  render() {
    return (
      <NavBar ><h3>{this.props.header} </h3></NavBar >
    )
  }
}

const mapStateToProps = state => ({
  header: state.header
});
export default connect(mapStateToProps)(HeaderBar);