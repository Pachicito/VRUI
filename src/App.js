import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null, imgURL: 'https://s3-alpha-sig.figma.com/thumbnails/08f9fba9-d8be-4dec-b15e-722ad17f3afc?Expires=1667779200&Signature=gLmxXcmH65Bl5YQ-BbRGtqbSESrHimtq8r5FArsQCNFQYJN3Us6SdOu9gCzszSiDzSBmEYEVCpHLr0ur4rW6amQXNrPHvc~ryUPi7bpZHb8HZhGvngedsUt34Uqv5Ol4JZpnCFDml4cEP7Ngwje7rtwj2OJOPAsSdW0y~kUoApaP4kCzjuzdSQsQw4nYr~fRtmbzoZ-dihau6CYO-TgKRSIrMVx5usOtaBcooydZfyDUvXot3uJbGbXePxaBV1B7midW8f0tSAtIITMua~v2jQFy2OftPy5bj4ZDUkx2thJY~WQN9kCtovaTWhngZFqwjYvVVj3DJvWZk9tVT1mTIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', imgWidth: null, imgHeight: null}
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch('https://api.figma.com/v1/files/fkEZhLwbfw47dSnibASSFE', {
      headers: {'X-FIGMA-TOKEN': 'figd_xQfn3nIwieZctQtIvmHNP8lMCAVvQ0EtGDR4Zu_y'}})
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Figma"}</button>
        <br />
        <span>{msg}</span>
        <img src={{uri:this.state.imgURL}} alt="Figma Mirror"/>
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
