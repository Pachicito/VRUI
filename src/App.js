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
      .then(res => res.json())
      .then(res => res.document.children.map((child, i) => ({
        page: child.name,
        nodes: child.children.map(child => ({
          name: child.name,
          id: child.id
        })),
        ...child
    })))
    .then(items => items.map(({page, nodes}) => 
      nodes.map(node =>
                fetch(`https://api.figma.com/v1/images/fkEZhLwbfw47dSnibASSFE?ids=${node.id}`, {
                  headers: {'X-FIGMA-TOKEN': 'figd_xQfn3nIwieZctQtIvmHNP8lMCAVvQ0EtGDR4Zu_y'}})
                .then(res => res.json())
                .then(res => res.images[node.id])
                .then(res => console.log(res))
    )))
    .then(poop => console.log(poop));
        //console.log(response.json().document)
        //this.setState({ loading: false, msg: response.text() })
      
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
