import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd-mobile/dist/antd-mobile.css';
import App from './App';
import Login from './components/Login';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    { <Login /> }
    {<App />}
  </Provider>,
  document.getElementById('root'));

