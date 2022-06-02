const weatherAPI = () => {
  const retrieveData = async (e) => {
    const location = e.target.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2057e59161ea687b444b683c4710b74e`;
    const data = await fetch(url, { mode: 'cors' });
    return data.json();
  };

  const inputBar = document.querySelector('input');
  inputBar.addEventListener('change', retrieveData);

  return {

  };
};

export default weatherAPI;
