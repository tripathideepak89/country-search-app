import React, { useState, useEffect } from 'react';
import './CountrySearch.css'; // Import the CSS file

const CountrySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      // Fetch the list of countries from the API based on the search term
      fetch(`https://restcountries.com/v3.1/all`)
        .then((response) => response.json())
        .then((data) => {
          // Filter countries whose official name contains the search keyword
          const filteredCountries = data.filter((country) =>
            country.name.official.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setCountries(filteredCountries);
        })
        .catch((error) => console.error('Error fetching data:', error));
    } else {
      // Clear the list of countries if the search term is empty
      setCountries([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <h1 className="search-container">Country Search</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Search by country name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="country-list">
        {countries.map((country) => (
          <li key={country.name.common} className="country-item">
            <p>Common Name: {country.name.common}</p>
            <p>Official Name: {country.name.official}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountrySearch;
