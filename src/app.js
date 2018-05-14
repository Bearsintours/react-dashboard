import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { store } from './reducers/reducerActivePage';
import { dayPage } from './actions/changePage';
import { weekPage } from './actions/changePage';
import { monthPage } from './actions/changePage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

console.log('test');

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'));
