import React, { useState, useEffect } from 'react';
import './App.css';

const api = {
  key: "6c737e5151227aae2ecd31335b3c5ad7",
  base: "https://api.openweathermap.org/data/2.5/"
}

/* The reason I put this here is because of an async issue, everytime I changed the "units" STATE with setUnit,
the background updated too early, before we were able to fetch the new temperature info. So basically what happens
is when you click 15 Celsius, it changess to 15 Fahrenheit instead of converting the temperature first.
So it would show a cold temperature background, which is wrong. To fix this, I'm adding an outside variable
to control the current unit, this variable will be changed/updated AFTER successfully fetching the updated info.*/
let currentUnit = "metric";
let currentTemp = 0;

function App() {
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState('');
  const [units, setUnits] = useState('metric');
  
  useEffect(() => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    async function success(pos) {
      var crd = pos.coords;
      const latitude = crd.latitude;
      const longitude = crd.longitude;

      await fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          currentUnit = units;
          currentTemp = result.main.temp;
          setWeather(result);
      });
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);
    


  const search = event => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=${units}&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          currentTemp = result.main.temp ? result.main.temp : 0;
          setWeather(result);
          setQuery('');
        })
        .catch(err => {
          setQuery("Invalid City!");
          console.log("Invalid City")
        })
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
                  "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date} ${year}`
  }

  const handleUnits = () => {

    if (units === "metric") {
      currentTemp = Math.round((currentTemp * 1.8)+32)
      currentUnit = "imperial";
      setUnits("imperial");
     } else {      
       currentTemp = Math.round((currentTemp - 32)/1.8)
       currentUnit = "metric";
      setUnits("metric");
     } 
  }

  const handleBackground = () => {
    if (currentUnit === "metric") {
      if (weather.rain) {
        return "App rain"
      } else if (weather.snow) {
        return "App snow";
      } else if (currentTemp <= 5) {
      return "App cold";
    } else if (currentTemp >= 24)  {
      return "App hot";
    } else {
      return "App";
    }
  } else {
    if (weather.rain) {
      return "App rain";
    } else if (weather.snow) {
      return "App snow";
    } else if (currentTemp <= 41) {
      return "App cold";
    } else if (currentTemp >= 75)  {
      return "App hot";
    } else {
      return "App";
    }
  }
}

  return (
    <div className={typeof weather.main != "undefined" ? handleBackground() : "App"}>
      <div className="main-area">
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
        </div>

        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>

          <div className="weather-box" onClick={() => handleUnits()}>
            <p className="info">Click below to change metrics</p>
            <div className="temp">{Math.round(currentTemp)}{units === "imperial" ? "°F" : "°C"}</div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </div>
    </div>
  );
}

export default App;
