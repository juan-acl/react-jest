import 'jsdom-global/register';
import React from 'react';
import { legacy_createStore as createStore } from 'redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { initialState } from '../initialState';
import { reducer } from '../reducers';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
const store = createStore(reducer, initialState);

const ProviderMock = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>{props.children}</BrowserRouter>
    </Provider>
  );
};

export { ProviderMock };
