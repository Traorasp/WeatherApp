const initApp = (() => {
  const body = document.querySelector('body');
  const searchBar = document.createElement('input');
  searchBar.setAttribute('type', 'search');
  body.appendChild(searchBar);
})();

export default { initApp };
