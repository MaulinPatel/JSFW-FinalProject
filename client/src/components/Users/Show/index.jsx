import Axios from 'axios';
import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../Authentication/UserProvider';
import { GlobalStoreContext } from '../../shared/Globals';
import { Container, Media } from 'react-bootstrap';
import Header from '../../shared/Header';
import { Link } from 'react-router-dom';

const Show = () => {
  const { user } = useContext(UserContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/users/show?secret_token=${user.token}`)
    .then(({ data }) => {
      setUserDetails(data);
    });
  }, []);

  return (
    <>
    {userDetails ? (
      <>
        <Layout className="">
        
          <Styles.UserShowDiv>
            <Styles.UserShowOverlay>

        <Header title="Profile"></Header>
          </Styles.UserShowOverlay>
          </Styles.UserShowDiv>
        </Layout>
        </>
    ) : null}
    <Footer/>
    </>
  );
}
 
export default Show;