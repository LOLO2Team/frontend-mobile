import React, { Component } from 'react';
import { connect } from "react-redux";
import { Layout } from 'antd';
import { Toast, Button, WhiteSpace } from 'antd-mobile';
import employeeResources from '../resources/employeeResources';

const { Header, Sider, Content } = Layout;

class MyProfile extends Component {
  onLogout = () => {
    this.props.setRenderContent("Login");
    employeeResources.setEmployeeStatus(this.props.token, this.props.user.employeeId,"OFFDUTY")
    this.props.resetToken();
  }
  render() {
    return (
      <div>
        <Content style={{
          margin: '24px 0', padding: 24, background: '#fff', minHeight: 280,
        }}
        >
        <p>Name: <span>{this.props.user.name}</span></p>
        <p>Username: <span>{this.props.user.username}</span></p>
        <p>Email: <span>{this.props.user.email}</span></p>
        <p>Phone: <span>{this.props.user.phone}</span></p>
        <p>Role: <span>{this.props.user.rolesList[0]}</span></p>
          <WhiteSpace />
          <Button type="primary" onClick={this.onLogout}>Logout</Button>
        </Content>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  user: state.user,
  token: state.token
});

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

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);