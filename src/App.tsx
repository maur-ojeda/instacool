import './App.css';

import * as React from 'react';
import { Route } from 'react-router'

import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'


class App extends React.Component {
  public render() {
    return (
      <div>
          <Route exact={true} path='/' component={Login}/>
          <Route exact={true} path='/register' component={Register}/>
      </div>
  );
  }
}
export default App;
