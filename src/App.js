import React, { Component } from "react";
import "./App.css";
import Search from "./component/Search";
import Results from "./component/Results";
import Agenda from "./component/Agenda";

class App extends Component {
  state = {
    name: "",
    code: ""
  };
  callbackFunction = childData => {
    this.setState({ name: childData.name, code: childData.code });
  };
  render() {
    return (
      <div className="App">
        <Search parentCallback={this.callbackFunction} />
        <Agenda />
        <Results name={this.state.name} code={this.state.code} />
      </div>
    );
  }
}

export default App;
