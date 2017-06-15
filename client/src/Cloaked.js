import React, { Component } from "react";

class Cloaked extends Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    fetch("/api/cloaked").then((res) => {
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
        <h1>Cloaked</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Cloaked;
