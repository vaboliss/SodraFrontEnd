import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Search extends Component {
  state = {
    name: "",
    code: ""
  };
  sendData = () => {
    this.props.parentCallback({ name: this.state.name, code: this.state.code });
  };

  NameChange(value) {
    this.setState({ name: value });
  }
  CodeChange(value) {
    this.setState({ code: value });
  }

  render() {
    return (
      <div className="d-flex mt-5 justify-content-around">
        <form className="d-flex flex-column w-25 justify-content-around">
          <label> Search by name</label>
          <input
            type="text"
            onChange={event => this.NameChange(event.target.value)}
            required
          />
          <input
            className="mt-3"
            type="button"
            name=""
            id=""
            value="Search"
            onClick={this.sendData}
          />
        </form>
        <form className="d-flex flex-column w-25">
          <label> Search by code</label>
          <input
            type="number"
            onChange={event => this.CodeChange(event.target.value)}
          />
          <input
            className="mt-3"
            type="button"
            onClick={this.sendData}
            value="Search"
          />
        </form>
      </div>
    );
  }
}

export default Search;
