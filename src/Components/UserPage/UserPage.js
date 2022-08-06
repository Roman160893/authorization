import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../AutorisationPage/StyleAutorisationPage';
import { InfoUser, WrapperUserPage } from './StyleUserPage';

const UserPage = () => {

   return (
      <WrapperUserPage>
         <InfoUser>
            <p style={{ fontSize: '46px', marginBottom: '15px', color: '#fffd50' }}>
               {JSON.parse(localStorage.getItem('firstName')) + ' ' + JSON.parse(localStorage.getItem('LastName'))}
            </p>
            <p style={{ color: 'rgb(0 255 145)' }}>
               вітаємо Вас у особистому кабінеті
            </p>
         </InfoUser>
         <Link to='/authorization' style={{ display: 'block', width: '50%', margin: '0 auto', background: '#90caf9', padding: '7px 0px', borderRadius: '5px', fontFamily: `'Roboto', sans-serif`, textAlign: 'center' }}>Exit</Link>
      </WrapperUserPage>
   );
};

export default UserPage;