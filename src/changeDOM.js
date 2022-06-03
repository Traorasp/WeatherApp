import d01 from './images/icons/01d.png';
import n01 from './images/icons/01n.png';
import d02 from './images/icons/02d.png';
import n02 from './images/icons/02n.png';
import d03 from './images/icons/03.png';
import d04 from './images/icons/04.png';
import d09 from './images/icons/09.png';
import d10 from './images/icons/10d.png';
import n10 from './images/icons/10n.png';
import d11 from './images/icons/11d.png';
import n11 from './images/icons/11n.png';
import d13 from './images/icons/13.png';
import d50 from './images/icons/50.png';

import brokenClouds from './images/background/brokenClouds.jpg';
import clearDay from './images/background/clearDay.jpg';
import clearNight from './images/background/clearNight.jpg';
import fewCloudsDay from './images/background/fewCloudsDay.jpg';
import fewCloudsNight from './images/background/fewCloudsNight.jpg';
import mistDay from './images/background/mistDay.jpg';
import mistNight from './images/background/mistNight.jpg';
import scatteredCloudsDay from './images/background/scatteredCloudsDay.jpg';
import scatteredCloudsNight from './images/background/scatteredCloudsNight.jpg';
import showerRainDay from './images/background/showerRainDay.jpg';
import showerRainNight from './images/background/showerRainNight.jpg';
import snowDay from './images/background/snowDay.jpg';
import snowNight from './images/background/snowNight.jpg';
import thunderStorm from './images/background/thunderStorm.jpg';

const changeDOM = (() => {
  const body = document.querySelector('body');
  const weatherMain = document.createElement('div');
  weatherMain.setAttribute('id', 'main');
  body.appendChild(weatherMain);

  const cityName = document.createElement('h1');
  cityName.classList.add('city');
  body.appendChild(cityName);

  const utility = document.createElement('div');
  utility.setAttribute('id', 'utility');
  body.appendChild(utility);

  const barLabel = document.createElement('label');
  barLabel.setAttribute('for', 'search');
  barLabel.textContent = 'City:';
  utility.appendChild(barLabel);

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

  let tempUnits = '\u00B0F';
  let speedUnits = 'mph';

  const weatherExtra = document.createElement('div');
  weatherExtra.setAttribute('id', 'extra');
  body.appendChild(weatherExtra);

  const weatherWeek = document.createElement('div');
  weatherWeek.classList.add('week');
  weatherExtra.appendChild(weatherWeek);

  const weather24Hours = document.createElement('div');
  weather24Hours.classList.add('hours');
  weatherExtra.appendChild(weather24Hours);

  const findIcon = (icon) => {
    let url;
    switch (icon) {
      case '01d':
        url = d01;
        break;
      case '01n':
        url = n01;
        break;
      case '02d':
        url = d02;
        break;
      case '02n':
        url = n02;
        break;
      case '03d':
      case '03n':
        url = d03;
        break;
      case '04d':
      case '04n':
        url = d04;
        break;
      case '09d':
      case '09n':
        url = d09;
        break;
      case '10d':
        url = d10;
        break;
      case '10n':
        url = n10;
        break;
      case '11d':
        url = d11;
        break;
      case '11n':
        url = n11;
        break;
      case '13d':
      case '13n':
        url = d13;
        break;
      case '50d':
      case '50n':
        url = d50;
        break;
      default:
        console.log('error');
        break;
    }
    return url;
  };

  const setBackgroundImage = (weather) => {
    let url;
    body.classList.remove('dark');
    switch (weather) {
      case '01d':
        url = clearDay;
        break;
      case '01n':
        url = clearNight;
        body.classList.add('dark');
        break;
      case '02d':
        url = fewCloudsDay;
        break;
      case '02n':
        url = fewCloudsNight;
        body.classList.add('dark');
        break;
      case '03d':
        url = scatteredCloudsDay;
        body.classList.add('dark');
        break;
      case '03n':
        url = scatteredCloudsNight;
        body.classList.add('dark');
        break;
      case '04d':
      case '04n':
        url = brokenClouds;
        break;
      case '09d':
      case '10d':
        url = showerRainDay;
        body.classList.add('dark');
        break;
      case '09n':
      case '10n':
        url = showerRainNight;
        body.classList.add('dark');
        break;
      case '11d':
      case '11n':
        url = thunderStorm;
        body.classList.add('dark');
        break;
      case '13d':
        url = snowDay;
        break;
      case '13n':
        url = snowNight;
        body.classList.add('dark');
        break;
      case '50d':
        url = mistDay;
        break;
      case '50n':
        url = mistNight;
        body.classList.add('dark');
        break;
      default:
        url = clearDay;
        break;
    }
    body.style.backgroundImage = `url('${url}')`;
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = 'cover';
  };

  const displayCurrInfo = (info) => {
    if (searchBar.value !== '') {
      cityName.textContent = searchBar.value.substring(0, 1).toUpperCase()
      + searchBar.value.substring(1);
    } else if (cityName.textContent === '') {
      cityName.textContent = 'London';
    }
    searchBar.value = '';

    setBackgroundImage('50d');
    // setBackgroundImage(info.weather[0].icon);
    const Desc = document.createElement('h3');
    Desc.textContent = info.weather[0].description.substring(0, 1).toUpperCase()
    + info.weather[0].description.substring(1);
    weatherMain.appendChild(Desc);

    const cloudiness = document.createElement('h3');
    cloudiness.textContent = `Clouds: ${info.clouds}%`;
    weatherMain.appendChild(cloudiness);

    const Temp = document.createElement('h3');
    Temp.textContent = `Temp: ${info.temp}${tempUnits}`;
    weatherMain.appendChild(Temp);

    const feelsLike = document.createElement('h3');
    feelsLike.textContent = `Feels: ${info.feels_like}${tempUnits}`;
    weatherMain.appendChild(feelsLike);

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

      const icon = document.createElement('img');
      icon.src = findIcon(day.weather[0].icon);
      dayContent.appendChild(icon);

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

      const icon = document.createElement('img');
      icon.src = findIcon(hour.weather[0].icon);
      hourContent.appendChild(icon);

      const hourMain = document.createElement('h3');
      hourMain.textContent = hour.weather[0].main;
      hourContent.appendChild(hourMain);

      const hourTemp = document.createElement('h3');
      hourTemp.textContent = hour.temp + tempUnits;
      hourContent.appendChild(hourTemp);
    }
  };

  const reset = () => {
    tempUnits = unitSelector.value === 'Imperial' ? '\u00B0F' : '\u00B0C';
    speedUnits = unitSelector.value === 'Imperial' ? 'mph' : 'mps';
    weatherMain.innerHTML = '';
    weatherWeek.innerHTML = '';
    weather24Hours.innerHTML = '';
  };

  const update = (weather) => {
    reset();
    displayCurrInfo(weather.current);
    displayWeekInfo(weather.daily);
    displayHourInfo(weather.hourly);
  };

  return {
    update,
  };
})();

export default changeDOM;
