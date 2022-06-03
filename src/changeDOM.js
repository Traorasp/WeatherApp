const changeDOM = (() => {
  const body = document.querySelector('body');

  const weatherMain = document.createElement('div');
  weatherMain.setAttribute('id', 'main');
  body.appendChild(weatherMain);

  const cityName = document.createElement('h1');
  cityName.classList.add('city');
  weatherMain.appendChild(cityName);

  const utility = document.createElement('div');
  utility.setAttribute('id', 'utility');
  body.appendChild(utility);

  const searchBar = document.createElement('input');
  searchBar.setAttribute('type', 'search');
  searchBar.setAttribute('id', 'search');
  utility.appendChild(searchBar);

  const unitSelector = document.createElement('select');
  unitSelector.classList.add('units');
  utility.appendChild(unitSelector);

  const imperial = document.createElement('option');
  imperial.textContent = 'Imperial';
  imperial.value = 'Imperial';
  unitSelector.appendChild(imperial);
  const metric = document.createElement('option');
  metric.textContent = 'Metric';
  metric.value = 'Metric';
  unitSelector.appendChild(metric);

  const weatherExtra = document.createElement('div');
  weatherExtra.setAttribute('id', 'extra');
  body.appendChild(weatherExtra);

  const weatherWeek = document.createElement('div');
  weatherWeek.classList.add('week');
  weatherExtra.appendChild(weatherWeek);

  const weather24Hours = document.createElement('div');
  weather24Hours.classList.add('hours');
  weatherExtra.appendChild(weather24Hours);

  const unit = document.querySelector('.units').value;
  const tempUnits = unit === 'Imperial' ? '\u00B0F' : '\u00B0C';
  const speedUnits = unit === 'Imperial' ? 'mph' : 'mps';

  const displayCurrInfo = (info) => {
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

    const feelsLike = document.createElement('h3');
    feelsLike.textContent = info.feels_like + tempUnits;
    feelsLike.classList.add('info');
    weatherMain.appendChild(feelsLike);

    const cloudiness = document.createElement('h3');
    cloudiness.textContent = `Clouds: ${info.clouds}%`;
    cloudiness.classList.add('info');
    weatherMain.appendChild(cloudiness);

    const humidity = document.createElement('h3');
    humidity.textContent = `Humidity: ${info.humidity}%`;
    humidity.classList.add('info');
    weatherMain.appendChild(humidity);

    const windSpeed = document.createElement('h3');
    windSpeed.textContent = `Wind: ${info.wind_speed}${speedUnits}`;
    windSpeed.classList.add('info');
    weatherMain.appendChild(windSpeed);
  };

  const displayWeekInfo = (info) => {
    for (let day = 0; day < 7; day += 1) {

    }
  };

  const displayHourInfo = (info) => {

  };

  const update = (weather) => {
    displayCurrInfo(weather.current);
    displayWeekInfo(weather.daily);
    displayHourInfo(weather.hourly);
  };

  return {
    update,
  };
})();

export default changeDOM;
