import React, { Component } from "react";

class Hidden extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    fetch("/api/hidden").then((res) => {
      return res.text();
    }).then((data) => {
      this.setState({
        message: data
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Hidden</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Hidden;
