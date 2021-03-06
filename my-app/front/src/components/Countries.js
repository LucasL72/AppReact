import React, { useEffect, useState } from "react";
import axios from "axios";
import CardsCountries from "./CardsCountries";
import Button from '@mui/material/Button';

const Countries = () => {
  const [data, setData] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [rangeValue, setRangeValue] = useState(50000000);
  const [searchInput, setSearchInput] = useState("");
  const [isCrescent, setIsCrescent] = useState(false);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  const numberFormat = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className="countries">
      <ul className="radio-container">
        {radios.map((continent, index) => (
          <li key={index}>
            <input
              type="radio"
              name="continent"
              id={continent}
              checked={continent === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <Button variant="contained" onClick={() => setSelectedRadio("")}>Annuler recherche</Button>
      )}
      <br />
      <input
        type="text"
        placeholder="Entrez le nom d'un pays (en anglais)"
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {isCrescent ? (
        <Button variant="contained" onClick={() => setIsCrescent(false)}>Tri décroissant</Button>
      ) : (
        <Button variant="contained" onClick={() => setIsCrescent(true)}>Tri croissant</Button>
      )}

      <br />
      <input
        type="range"
        min="0"
        max="1377482166"
        defaultValue={rangeValue}
        onChange={(e) => setRangeValue(e.target.value)}
      />
      <p style={{ marginBottom: "20px" }}>
        {numberFormat(rangeValue)} habitants
      </p>
      <ul>
        {data
          .filter((country) => country.region.includes(selectedRadio))
          .filter((country) => country.population > rangeValue)
          .filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          )
          .sort((a, b) => {
            if (isCrescent) {
              return a.population - b.population;
            } else {
              return b.population - a.population;
            }
          })
          .map((country) => (
            <CardsCountries key={country.name.common} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;