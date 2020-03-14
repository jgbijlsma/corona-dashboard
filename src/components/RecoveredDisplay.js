import React, { Component } from "react";

export default class RecoveredDisplay extends Component {
  render() {
    return (
      <div className="box recovered">
        <h3>Recovered cases</h3>
        <span className="value">{this.props.value}</span>
      </div>
    );
  }
}
