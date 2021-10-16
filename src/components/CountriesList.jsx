import React, { Component } from 'react';
import allCountries from '../countries.json';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  render() {
    return (
      <div>
        <p>
          {allCountries.map((eachCountry) => {
            return (
              <Link to={`/country/${eachCountry.cca3}`}>
                {' '}
                {eachCountry.name.common}
              </Link>
            );
            {
              /* <h4>{eachCountry.name.common}</h4> */
            }
          })}
        </p>
      </div>
    );
  }
}
export default CountriesList;
