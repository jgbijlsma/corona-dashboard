import React, { Component } from "react";

export default class ConfirmedDisplay extends Component {
  render() {
    return (
      <div className="box confirmed">
        <h3>Confirmed cases</h3>
        <span className="value">{this.props.value}</span>
      </div>
    );
  }
}
