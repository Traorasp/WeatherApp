const changeDOM = (() => {
  const init = () => {
    const body = document.querySelector('body');
    const searchBar = document.createElement('input');
    searchBar.setAttribute('type', 'search');
    body.appendChild(searchBar);
  };

  const update = (weather) => {
    console.log(weather);
    console.log(weather.weather[0].main);
    console.log(weather.weather[0].description);

    console.log(weather.main.temp);
    console.log(weather.main.feels_like);
    console.log(weather.main.temp_min);
    console.log(weather.main.temp_max);
    console.log(weather.main.pressure);
    console.log(weather.main.humidity);
  };

  return {
    init,
    update,
  };
})();

export default changeDOM;
