const changeDOM = (() => {
  const body = document.querySelector('body');

  const searchBar = document.createElement('input');
  searchBar.setAttribute('type', 'search');
  searchBar.setAttribute('id', 'search');
  body.appendChild(searchBar);

  const unitSelector = document.createElement('select');
  unitSelector.classList.add('units');
  body.appendChild(unitSelector);
  const imperial = document.createElement('option');
  imperial.textContent = 'Imperial';
  imperial.value = 'Imperial';
  unitSelector.appendChild(imperial);
  const metric = document.createElement('option');
  metric.textContent = 'Metric';
  metric.value = 'Metric';
  unitSelector.appendChild(metric);

  const cityName = document.createElement('h1');
  cityName.classList.add('city');
  body.appendChild(cityName);

  const weatherMain = document.createElement('div');
  weatherMain.classList.add('main');
  body.appendChild(weatherMain);

  const weatherExtra = document.createElement('div');
  weatherExtra.classList.add('extra');
  body.appendChild(weatherExtra);

  const unit = document.querySelector('.units').value;
  const tempUnits = unit === 'Imperial' ? '\u00B0F' : '\u00B0C';
  const speedUnits = unit === 'Imperial' ? 'mph' : 'mps';

  const displayCurrInfo = (info) => {
    weatherExtra.innerHTML = '';
    weatherMain.innerHTML = '';
    if (searchBar.value !== '') {
      cityName.textContent = searchBar.value.substring(0, 1).toUpperCase()
        + searchBar.value.substring(1);
    } else if (cityName.textContent === '') {
      cityName.textContent = 'London';
    }
    searchBar.value = '';

    const Desc = document.createElement('h2');
    Desc.textContent = info.weather[0].description.substring(0, 1).toUpperCase()
    + info.weather[0].description.substring(1);
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
    feelsLike.textContent = info.feels_like + tempUnits;
    feelsLike.classList.add('info');
    weatherExtra.appendChild(feelsLike);

    const cloudiness = document.createElement('h3');
    cloudiness.textContent = `${info.clouds}%`;
    cloudiness.classList.add('info');
    weatherExtra.appendChild(cloudiness);

    const pressure = document.createElement('h3');
    pressure.textContent = `${info.pressure}hPa`;
    pressure.classList.add('info');
    weatherExtra.appendChild(pressure);

    const humidity = document.createElement('h3');
    humidity.textContent = `${info.humidity}%`;
    humidity.classList.add('info');
    weatherExtra.appendChild(humidity);

    const windSpeed = document.createElement('h3');
    windSpeed.textContent = info.wind_speed + speedUnits;
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
