import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
        <div style={{
            textAlign:"right"
          }}> 
            <button style={{padding: 10}}>
              Login
            </button>
            <div style={{
              margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, textAlign:"center",
            }}>
              <h1>Sign Up</h1>
              <br></br>
              <p>Account Name:</p>
              <input></input>
              <p>Role:</p>
              <input></input>
              <p>Password:</p>
              <input></input>
              <p>Email:</p>
              <input></input>
              <br></br>
              <br></br>
              <button>SignUp</button>
            </div>
          </div>
    )
  }
}
