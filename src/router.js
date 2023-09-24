import MainPage from './pages/MainPage/MainPage';
import DetailPage from './pages/DetailPage/DetailPage';

/**
 * 현재 주소 가져오기
 * @returns string
 */
const getCurrentPathName = () => window.location.pathname;
/**
 *  찾는 주소와 일치하는 라우터 가져오기
 * @param {*} pathName
 * @param {*} routes
 * @returns
 */
const getMatchedRoute = (pathName, routes) => {
  for (let route of routes) {
    const regex = new RegExp('^' + route.path.replace(/:\w+/g, '(.+)') + '$');

    if (regex.test(pathName)) return route;
  }

  return false;
};

const router = () => {
  const routes = [
    { path: '/', page: MainPage },
    { path: '/tech', page: MainPage },
    { path: '/design', page: MainPage },
    { path: '/article/:id', page: DetailPage },
    { path: '/404', page: MainPage },
  ];

  const currentPathName = getCurrentPathName();
  const matchedRoute =
    getMatchedRoute(currentPathName, routes) || routes[routes.length - 1];

  const view = new matchedRoute.page().render();

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#app').innerHTML = view;

    // todo: index.html title 동적으로 넣어주기
  });
};

export { getCurrentPathName, router };
