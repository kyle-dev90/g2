import React from 'react';
import { Provider } from 'react-redux';
import { Router, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'src/routes';
import { store } from './redux/store';
import 'src/_api_';

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <BrowserRouter>{renderRoutes()}</BrowserRouter>
      </Router>
    </Provider>
  );
}

export default App;
