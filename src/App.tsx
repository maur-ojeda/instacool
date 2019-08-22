import './App.css';

import * as React from 'react';
import {Route} from 'react-router'
import { History } from 'history'
import Login from './containers/Auth/Login'
import Register from './containers/Auth/Register'
import NewsFeed from './containers/NewsFeed/'
import Profile from './containers/Profile/'
import services from './services'
import Navbar from './components/Navbar'

interface IAppProps {
  history : History
}

class App extends React.Component<IAppProps> {
// aplicacion esta cargando
public state = {
  loading: true,
}

  public componentDidMount(){
    const {auth} = services
    /*
     * Escucha "onAuthStateChanged" cuando el usuario inicia sesión con éxito
     * recibe un afuncion que contiene el usuario que puede venir vacio(cerro la sesion o no existe)
     * y si viene con algo el usuario ingreso con éxito, usando la variable de usuer para detectar cuando
     * el usuario inicio sesión
     * 
    */
    auth.onAuthStateChanged( user => { 
        if (user){
          if(['/','/register'].indexOf(location.pathname) > -1 ){
             const {history} = this.props
             history.push('/app/newsfeed')
        }
      } else {
        if( /\app\/./.test(location.pathname)){
          const {history} = this.props
          history.push('/')
        }
      }
        this.setState({
          loading: false
        })
      }
    )
  }


  public render() {
    const  { loading } = this.state
    return (
      // si la aplicación esta cargando mostramos unn string, si no lo está dejamos entrar
      loading ? 'loading' :
      <div>
          <Route exact={true} path='/' component={Login}/>
          <Route exact={true} path='/register' component={Register}/>
          <Route path='/app' component={Navbar}/>          
          <Route exact={true} path='/app/newsfeed' component={NewsFeed}/>
          <Route exact={true} path='/app/profile' component={Profile}/>
      </div>
  );
  }
}
export default App;
