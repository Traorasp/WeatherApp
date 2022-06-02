const changeDOM = (() => {
  const body = document.querySelector('body');

  const searchBar = document.createElement('input');
  searchBar.setAttribute('type', 'search');
  searchBar.setAttribute('id', 'search');
  body.appendChild(searchBar);

  const cityName = document.createElement('h1');
  cityName.classList.add('city');
  body.appendChild(cityName);

  const weatherMain = document.createElement('div');
  weatherMain.classList.add('main');
  body.appendChild(weatherMain);

  const weatherExtra = document.createElement('div');
  weatherExtra.classList.add('extra');
  body.appendChild(weatherExtra);

  const displayCurrInfo = (info) => {
    cityName.textContent = searchBar.value;

    const tempUnits = '\u00B0C';

    const Desc = document.createElement('h2');
    Desc.textContent = info.weather[0].description;
    Desc.classList.add('info');
    weatherMain.appendChild(Desc);

    const Temp = document.createElement('h2');
    Temp.textContent = info.temp + tempUnits;
    Temp.classList.add('info');
    weatherMain.appendChild(Temp);

    /* const maxTemp = document.createElement('h3');
    maxTemp.textContent = info.main.temp_max;
    maxTemp.classList.add('info');
    weatherMain.appendChild(maxTemp);

    const minTemp = document.createElement('h3');
    minTemp.textContent = info.main.temp_min;
    minTemp.classList.add('info');
    weatherMain.appendChild(minTemp);
    */

    const feelsLike = document.createElement('h3');
    feelsLike.textContent = info.feels_like;
    feelsLike.classList.add('info');
    weatherExtra.appendChild(feelsLike);

    const pressure = document.createElement('h3');
    pressure.textContent = info.pressure;
    pressure.classList.add('info');
    weatherExtra.appendChild(pressure);

    const humidity = document.createElement('h3');
    humidity.textContent = `${info.humidity}%`;
    humidity.classList.add('info');
    weatherExtra.appendChild(humidity);

    const windSpeed = document.createElement('h3');
    windSpeed.textContent = info.wind_speed;
    windSpeed.classList.add('info');
    weatherExtra.appendChild(windSpeed);
  };

  const update = (weather) => {
    displayCurrInfo(weather.current);
  };

  return {
    update,
  };
})();

export default changeDOM;
