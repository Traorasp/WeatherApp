import changeDOM from './changeDOM';

const weatherAPI = () => {
  const retrieveData = async (e) => {
    const location = e.target.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2057e59161ea687b444b683c4710b74e`;
    const data = await fetch(url, { mode: 'cors' });
    const weather = await data.json();
    const { lat } = weather.coord;
    const { lon } = weather.coord;
    const units = 'imperial';
    const testurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely&appid=2057e59161ea687b444b683c4710b74e`;
    const forecast = await fetch(testurl, { mode: 'cors' });
    changeDOM.update(await forecast.json());
  };

  const inputBar = document.querySelector('input');
  inputBar.addEventListener('change', retrieveData);

  return {

  };
};

export default weatherAPI;
