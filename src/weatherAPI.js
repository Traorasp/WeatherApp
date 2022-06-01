const weatherRequest = (() => {
  const retrieveData = async () => {
    const data = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=2057e59161ea687b444b683c4710b74e', {
      mode: 'cors',
    });
    return data.json();
  };

  return {

  };
})();

export default weatherRequest;
