import React, { Component } from 'react'
import { Toast, List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from "react-redux";
import loginResources from "../resources/loginResources"
import employeeResources from '../resources/employeeResources';

class Login extends React.Component {
  clickLogin = () => {
    const password = this.refs.password.props.value;
    const name = this.refs.name.props.value;
    this.props.login(name, password);
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="login-panel">
        <List>
          <InputItem
            {...getFieldProps('Name')}
            clear
            ref ='name'
            type="text"
          >Name</InputItem>
          <InputItem
            {...getFieldProps('password')}
            clear
            ref ='password'
            type="password"
          // placeholder="****"
          >Password</InputItem>
        </List><WhiteSpace />
        <Button type="primary" onClick={this.clickLogin} className="narrow-btn">Login</Button><WhiteSpace />
      </div>
    )
  }
}
Login = createForm()(Login);

const mapStateToProps = state => ({
  user: state.user,
  token: state.token
});

const mapDispatchToProps = dispatch => ({ 
  login: (name, password) => 
    loginResources.login(name, password)
    .then(res => {
      console.log(res)
      if(res.status===200){
        dispatch({
          type: "SET_TOKEN",
          payload: res.headers.get("Authorization")
        });
        employeeResources.getEmployeeByName(res.headers.get("Authorization"), name)
        .then (response => response.json())
        .then (response => 
          dispatch({
          type: "SET_USER",
          payload: response
          })
        )
        .then( response =>{
          console.log(res.headers.get("Authorization"))
            employeeResources.setEmployeeStatus(res.headers.get("Authorization"), response.payload.employeeId, "WORKING")
          }
        )
        .then(
          dispatch({
            type: "SET_RENDER_CONTENT",
            payload: "Orders"
          })
        )
      } else {
        Toast.fail("Username/password incorrect!", 1, null, false);
      }
      return res
    })
    .then(res => res.json())
    .then(res => employeeResources.getEmployeeById(res.headers.get("Authorization"), res.employeeId)
          .then(res => res.json())
          .then(res => {
            dispatch({
              type: "GET_EMPLOYEE_BY_ID",
              payload: res
            })
          })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);