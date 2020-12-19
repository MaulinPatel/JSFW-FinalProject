import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import UserForm from '../UserForm';
import Styles from './styles';

const New = () => {
  return (
    <>
      <Layout>
        <Styles.RegisterDiv>
          <Styles.RegisterOverlay>
            <Header title="Register">
            </Header>
            <UserForm endpoint="users"/>
          </Styles.RegisterOverlay>
        </Styles.RegisterDiv>
      </Layout>
      <Footer />
    </>
  );
}
 
export default New;