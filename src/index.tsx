
import createHistory from 'history/createBrowserHistory' 
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as reducers from './ducks'
import { Provider } from 'react-redux'
import {Router} from 'react-router'

import { combineReducers, createStore, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker'
import services from 'src/services'

const store = createStore( combineReducers(
  {
    ...reducers
  }), applyMiddleware(thunk.withExtraArgument(services)))
const history = createHistory()


ReactDOM.render(
 <Provider store={ store }>
  <Router history={history}>
      <App/>
    </Router>
  </Provider>,

 document.getElementById('root') as HTMLElement
);
registerServiceWorker();
