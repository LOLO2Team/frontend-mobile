import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div style={{
        textAlign:"right"
      }}> 
        <button style={{padding: 10}}>
          Sign up
        </button>
        <div style={{
          margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, textAlign:"center",
        }}>
          <h1>Login Page</h1>
          <br></br>
          <p>Login Name:</p>
          <input></input>
          <p>Password:</p>
          <input></input>
          <br></br>
          <br></br>
          <button>Login</button>
        </div>
      </div>
    )
  }
}
