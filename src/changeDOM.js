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
    weatherMain.appendChild(Desc);

    const Temp = document.createElement('h2');
    Temp.textContent = info.temp + tempUnits;
    weatherMain.appendChild(Temp);

    const feelsLike = document.createElement('h3');
    feelsLike.textContent = info.feels_like + tempUnits;
    weatherMain.appendChild(feelsLike);

    const cloudiness = document.createElement('h3');
    cloudiness.textContent = `Clouds: ${info.clouds}%`;
    weatherMain.appendChild(cloudiness);

    const humidity = document.createElement('h3');
    humidity.textContent = `Humidity: ${info.humidity}%`;
    weatherMain.appendChild(humidity);

    const windSpeed = document.createElement('h3');
    windSpeed.textContent = `Wind: ${info.wind_speed}${speedUnits}`;
    weatherMain.appendChild(windSpeed);
  };

  const displayWeekInfo = (info) => {
    for (let i = 0; i <= 7; i += 1) {
      const day = info[i];

      const dayContent = document.createElement('div');
      dayContent.classList.add('day-content');
      weatherWeek.appendChild(dayContent);

      const weekDay = document.createElement('h2');
      weekDay.textContent = (new Date(day.dt * 1000)).toLocaleString('en-US', { weekday: 'long' });
      dayContent.appendChild(weekDay);

      const dayMain = document.createElement('h3');
      dayMain.textContent = day.weather[0].main;
      dayContent.appendChild(dayMain);

      const dayTemp = document.createElement('div');
      dayTemp.classList.add('day-temp');
      dayContent.appendChild(dayTemp);

      const minTemp = document.createElement('h3');
      minTemp.textContent = day.temp.min + tempUnits;
      dayTemp.appendChild(minTemp);

      const maxTemp = document.createElement('h3');
      maxTemp.textContent = day.temp.max + tempUnits;
      dayTemp.appendChild(maxTemp);
    }
  };

  const displayHourInfo = (info) => {
    for (let i = 0; i <= 24; i += 1) {
      const hour = info[i];

      const hourContent = document.createElement('div');
      hourContent.classList.add('hour-content');
      weather24Hours.appendChild(hourContent);

      const hourTime = document.createElement('h2');
      hourTime.textContent = (new Date(hour.dt * 1000)).toLocaleString('en-US', { hour: 'numeric' });
      hourContent.appendChild(hourTime);

      const hourMain = document.createElement('h3');
      hourMain.textContent = hour.weather[0].main;
      hourContent.appendChild(hourMain);

      const hourTemp = document.createElement('div');
      hourTemp.textContent = hour.temp + tempUnits;
      hourContent.appendChild(hourTemp);
    }
  };

  const update = (weather) => {
    weatherMain.innerHTML = '';
    weatherWeek.innerHTML = '';
    weather24Hours.innerHTML = '';
    displayCurrInfo(weather.current);
    displayWeekInfo(weather.daily);
    displayHourInfo(weather.hourly);
  };

  return {
    update,
  };
})();

export default changeDOM;
