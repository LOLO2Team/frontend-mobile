import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout } from 'antd';
import { Toast, Button, WhiteSpace } from 'antd-mobile';

const { Header, Sider, Content } = Layout;

class MyProfile extends Component {
  onLogout = () => {
    this.props.setRenderContent("Login");
    this.props.resetToken();
  }
  render() {
    return (
      <div>
        <Content style={{
          margin: '24px 0', padding: 24, background: '#fff', minHeight: 280,
        }}
        >
        <p>Name:<span></span></p>
        <p>Username:<span></span></p>
        <p>Email:<span></span></p>
        <p>Phone:<span></span></p>
        <p>Role:<span></span></p>
          <WhiteSpace />
          <Button type="primary" onClick={this.onLogout}>Logout</Button>
        </Content>
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