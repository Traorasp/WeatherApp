import changeDOM from './changeDOM';

const weatherAPI = (() => {
  const retrieveData = async (location) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2057e59161ea687b444b683c4710b74e`;
    const data = await fetch(url, { mode: 'cors' });
    const weather = await data.json();
    const { lat } = weather.coord;
    const { lon } = weather.coord;
    const measurements = document.querySelector('.units').value;
    const units = measurements === 'Imperial' ? 'imperial' : 'metric';
    const testurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely&appid=2057e59161ea687b444b683c4710b74e`;
    const forecast = await fetch(testurl, { mode: 'cors' });
    changeDOM.update(await forecast.json());
  };

  const getLocation = () => {
    let location = document.querySelector('input').value;
    if (location === '') {
      location = document.querySelector('.city').textContent;
    }
    retrieveData(location);
  };

  const initialLoad = () => {
    retrieveData('London');
  };

  initialLoad();

  const inputBar = document.querySelector('input');
  inputBar.addEventListener('change', getLocation);

  const unitSelector = document.querySelector('.units');
  unitSelector.addEventListener('change', getLocation);
})();

export default weatherAPI;
