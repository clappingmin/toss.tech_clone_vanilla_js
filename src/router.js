import MainPage from './pages/MainPage/MainPage';

/**
 * 현재 주소 가져오기
 * @returns string
 */
const getCurrentPathName = () => {
  return window.location.pathname;
};

/**
 *  찾는 주소와 일치하는 라우터 가져오기
 * @param {*} pathName
 * @param {*} routes
 * @returns
 */
const getMatchedRoute = (pathName, routes) => {
  // todo: 디테일 페이지는 이렇게 비교하면 안됨

  for (let route of routes) {
    if (route.path === pathName) return route;
  }

  return false;
};

const router = () => {
  const routes = [
    { path: '/', page: MainPage },
    { path: '/tech', page: MainPage },
    { path: '/design', page: MainPage },
    { path: '/article/:id', page: MainPage },
    { path: '/404', page: MainPage },
  ];

  const currentPathName = getCurrentPathName();
  const matchedRoute =
    getMatchedRoute(currentPathName, routes) || routes[routes.length - 1];

  const view = new matchedRoute.page().render();

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#app').innerHTML = view;
  });
};

export { getCurrentPathName, router };
