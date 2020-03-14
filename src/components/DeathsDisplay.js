import React, { Component } from "react";

export default class DeathsDisplay extends Component {
  render() {
    return (
      <div className="box deaths">
        <h3>Deaths</h3>
        <span className="value">{this.props.value}</span>
      </div>
    );
  }
}
