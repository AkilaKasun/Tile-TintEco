import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function LocationData() {
  const { id } = useParams();
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);
  const [recommendedTile, setRecommendedTile] = useState(null);

  const tileTypes = [
    { name: "Glazed Ceramic Wall Tiles", climateRange: { min: 0, max: 10 }, absorption: "10-15%" },
    { name: "Glazed Ceramic Floor Tiles", climateRange: { min: 11, max: 20 }, absorption: "3-6%" },
    { name: "Glazed Porcelain Floor Tiles", climateRange: { min: 21, max: 24 }, absorption: "<3%" },
    { name: "Glazed Vitrified Porcelain Floor Tiles", climateRange: { min: 25, max: 27 }, absorption: "<0.5%" },
    { name: "Double Layer Polished Porcelain Floor Tiles", climateRange: { min: 28, max: 35 }, absorption: "<0.5%" },
    { name: "Full Body Porcelain Floor Tiles (Homogenous)", climateRange: { min: -5, max: 5 }, absorption: "<0.5%" },
    { name: "Cement Tiles", climateRange: { min: 10, max: 18 }, absorption: "High" }
  ];

  const recommendTileType = (tempCelsius) => {
    const suitableTiles = tileTypes.filter(tile => 
      tempCelsius >= tile.climateRange.min && tempCelsius <= tile.climateRange.max
    );

    if (suitableTiles.length > 0) {
      const recommendedTile = suitableTiles.reduce((acc, tile) => 
        parseFloat(acc.absorption.replace('%', '')) < parseFloat(tile.absorption.replace('%', '')) ? acc : tile
      );
      return recommendedTile.name + " with Water Absorption of " + recommendedTile.absorption;
    }
    return "No suitable tile found for the current temperature";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://api.openweathermap.org/data/2.5/weather?appid=ffbd6c094467fe4df20cf059b885ed9a&q=${id}`;
        console.log("Fetching URL:", url);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Location not found in the weather database!');
        }
        const data = await response.json();
        setLocationData(data);
        const tempCelsius = data.main.temp - 273.15;
        const recommendation = recommendTileType(tempCelsius);
        setRecommendedTile(recommendation);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!locationData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Location Details</h1>
      <p>Name: {locationData.name}</p>
      <p>Description: {locationData.weather[0].description}</p>
      <hr />
      <p>Main Details</p>
      <hr />
      <p>Temp : {locationData.main.temp - 273.15} °C</p>
      <p>feels_like : {locationData.main.feels_like - 273.15} °C</p>
      <p>temp_min : {locationData.main.temp_min - 273.15} °C</p>
      <p>temp_max : {locationData.main.temp_max - 273.15} °C</p>
      <p>pressure : {locationData.main.pressure} hPa</p>
      <p>humidity : {locationData.main.humidity} %</p>
      <p>sea_level : {locationData.main.sea_level} hPa</p>
      <p>grnd_level : {locationData.main.grnd_level} hPa</p>
      <hr />
      <p>Recommended Tile Type: {recommendedTile}</p>
    </div>
  );
}

export default LocationData;
