import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import ConfirmedDisplay from "./ConfirmedDisplay";
import RecoveredDisplay from "./RecoveredDisplay";
import DeathsDisplay from "./DeathsDisplay";

export default class CountryDisplay extends Component {
  state = {
    confirmed: "loading",
    recovered: "loading",
    deaths: "loading"
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    try {
      const res = await Axios.get(
        `https://covid19.mathdro.id/api/countries/${this.props.match.params.id}`
      );
      this.setState({
        confirmed: res.data.confirmed.value,
        recovered: res.data.recovered.value,
        deaths: res.data.deaths.value
      });
    } catch (err) {
      this.setState({
        confirmed: "No data found",
        recovered: "No data found",
        deaths: "No data found"
      });
    }
  }

  render() {
    return (
      <div className="countryDisplay">
        <Link to="/">Back</Link>
        <h3>{this.props.match.params.id}</h3>
        <div className="flex">
          <ConfirmedDisplay value={this.state.confirmed} />
          <RecoveredDisplay value={this.state.recovered} />
          <DeathsDisplay value={this.state.deaths} />
        </div>
      </div>
    );
  }
}
