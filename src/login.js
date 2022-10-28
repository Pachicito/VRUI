import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null, imgURL: null, imgWidth: null, imgHeight: null}
  }

  handleClick = api => e => {
    e.preventDefault()

    fetch('GET https://www.figma.com/oauth?
      client_id=BXgYpR6C3KvHeTZKYGYjHb&
      redirect_uri=https://vrui.app/&
      scope=file_read&
      state=poop&
      response_type=code'
      )
      
  }

  render() {
    const { loading, msg, imgURL } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Login"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
