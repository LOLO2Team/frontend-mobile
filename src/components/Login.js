import React, { Component } from 'react'
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

export default class Login extends React.Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List>
          <InputItem
            {...getFieldProps('bankCard', {
              // initialValue: '8888 8888 8888 8888',
            })}
            type="bankCard"
          >Login ID</InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password"
          // placeholder="****"
          >Password</InputItem>
        </List>
        <Button type="primary" >Login</Button><WhiteSpace />
        <Button type="" >Sign Up</Button><WhiteSpace />
      </div>
    )
  }
}
Login = createForm()(Login);
