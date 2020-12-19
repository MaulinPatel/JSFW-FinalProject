import React from 'react';
import { Container } from 'react-bootstrap';
import Styles from './styles';
import Header from '../../shared/Header';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <Layout>
        <Styles.LoginDiv>
          <Styles.LoginOverlay>
            <Header title="Login">
            </Header>
            <LoginForm/>
          </Styles.LoginOverlay>
        </Styles.LoginDiv>
      </Layout>
      <Footer />
    </>
  );
}
 
export default Login;