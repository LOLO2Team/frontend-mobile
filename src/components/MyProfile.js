import React, { Component } from 'react';
import { connect } from "react-redux";
import { Toast, Button } from 'antd-mobile';

class MyProfile extends Component {
  onLogout = () => {
    this.props.setRenderContent("Login");
    this.props.resetToken();
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.onLogout}>Logout</Button>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setRenderContent: (content) => {
    dispatch({
      type: "SET_RENDER_CONTENT",
      payload: content
    });
  },
  resetToken: () => {
    dispatch({
      type: "SET_TOKEN",
      payload: ''
    });
  }
});

export default connect(null, mapDispatchToProps)(MyProfile);