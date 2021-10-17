import React, { Suspense, lazy, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import RoomProtect from 'src/components/RoomProtect';
import ScoreProtect from 'src/components/ScoreProtect';
import Loading from 'src/components/Loading';

const loading = <Loading />;

const routes = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('src/views/start'))
  },
  {
    exact: true,
    path: '/room',
    component: lazy(() => import('src/views/room')),
    gurad: RoomProtect
  },
  {
    exact: true,
    path: '/end',
    component: lazy(() => import('src/views/end')),
    gurad: ScoreProtect
  }
];

export function renderRoutes() {
  return (
    <Suspense fallback={loading}>
      <Switch>
        {routes.map((route, i) => {
          const Component = route.component;
          const Guard = route.gurad || Fragment;
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard>
                  <Component {...props} />
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}
