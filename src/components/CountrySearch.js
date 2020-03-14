import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class CountrySearch extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(e) {
    this.props.history.push(`/country/${e.target.value}`);
  }

  renderOptions() {
    let array = this.props.countries.map((country, i) => {
      return <option key={i}>{country}</option>;
    });
    array.unshift(<option key={-1}>Search by country</option>);
    return array;
  }

  render() {
    return (
      <div className="countryList">
        <select onChange={this.onSelect}>{this.renderOptions()}</select>
        <Link to="/country/China/">China</Link>
      </div>
    );
  }
}

export default withRouter(CountrySearch);
