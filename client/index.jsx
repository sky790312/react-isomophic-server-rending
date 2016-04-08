import React       from 'react';
import { render }  from 'react-dom';
import { Router }  from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore, combineReducers } from 'redux';
import { Provider }                     from 'react-redux';
import { fromJS }                       from 'immutable';


import routes      from 'routes';
import * as reducers                    from 'reducers';

const history = createBrowserHistory();

// receive state by window.__INITIAL_STATE__ to client side
let initialState = window.__INITIAL_STATE__;

// Using Immutable to deal with state
Object
  .keys(initialState)
  .forEach(key => {
    initialState[key] = fromJS(initialState[key]);
   });
const reducer = combineReducers(reducers);
const store   = createStore(reducer, initialState);

render(
	<Provider store={store}>
      <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('react-view')
);