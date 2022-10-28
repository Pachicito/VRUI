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

    this.setState({ loading: true })
    fetch('https://api.figma.com/v1/files/fkEZhLwbfw47dSnibASSFE?depth=2', {
      headers: {'X-FIGMA-TOKEN': 'figd_xQfn3nIwieZctQtIvmHNP8lMCAVvQ0EtGDR4Zu_y'}})
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.document }))
  }

  render() {
    const { loading, msg, imgURL } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Figma"}</button>
        <br />
        <span>{msg}</span>
        <img src={imgURL} alt="Figma Mirror"/>
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
