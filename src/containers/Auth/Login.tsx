import * as React from 'react'

import { connect } from 'react-redux'

import  Card from '../../components/Card'
import  Container from '../../components/Container'
import  Title from '../../components/Title'
import  LoginForm from '../../components/LoginForm'
import  {ILogin, login as logingThunk  } from '../../ducks/Users'

interface ILogingProps {
login: ( a: ILogin) => void
}

 class Login extends React.Component<ILogingProps> {
    public render() {
      const { login } = this.props
      return (
        <Container center={true}>
          <Card>
            <Title>Iniciar sesión</Title>
              <LoginForm onSubmit={ login }/>
          </Card>
        </Container>
      )
    }
  }
  
const mapStateToProps = (state: any) => state 
const mapDispatchToProps = (dispatch: any) =>({
  login: (payload: any) => dispatch(logingThunk(payload) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)