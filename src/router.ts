import MainPage from './pages/MainPage/MainPage';
import DetailPage from './pages/DetailPage/DetailPage';
import { Route } from './shared/interfaces/global.interface';

/**
 * 현재 주소 가져오기
 * @returns string
 */
const getCurrentPathName = (): string => window.location.pathname;
/**
 *  찾는 주소와 일치하는 라우터 가져오기
 * @param {string} pathName
 * @param {Array<Route>} routes
 * @returns {Route | null}
 */
const getMatchedRoute = (
  pathName: string,
  routes: Array<Route>
): Route | null => {
  for (let route of routes) {
    const regex = new RegExp('^' + route.path.replace(/:\w+/g, '(.+)') + '$');

    if (regex.test(pathName)) return route;
  }

  return null;
};

/**
 * @returns {void}
 */
const router = (): void => {
  const routes: Array<Route> = [
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
    (document.querySelector('#app') as Element).innerHTML = view;

    // todo: index.html title 동적으로 넣어주기
  });
};

export { getCurrentPathName, router };
