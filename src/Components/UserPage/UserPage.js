import React from 'react';
import { Button } from '../AutorisationPage/StyleAutorisationPage';
import { InfoUser, WrapperUserPage } from './StyleUserPage';

const UserPage = () => {

   return (
      <WrapperUserPage>
         <InfoUser>
            <p style={{ fontSize: '46px', marginBottom: '15px', color: '#fffd50' }}>
               {JSON.parse(localStorage.user).lastName + ' ' + JSON.parse(localStorage.user).firstName}
            </p>
            <p style={{ color: 'rgb(0 255 145)' }}>
               вітаємо Вас у особистому кабінеті
            </p>
         </InfoUser>
         <Button onClick={() => document.location = '/'}> Exit </Button>
      </WrapperUserPage>
   );
};

export default UserPage;