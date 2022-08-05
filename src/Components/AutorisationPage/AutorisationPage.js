import React, { useEffect, useState } from 'react';
import { Button, CheckboxWrapper, FormAutorisation, Icon, Input, InputCheckbox, Title, WrapperFormAutorisation, WrapperQuestion } from "./StyleAutorisationPage.js"
import padlock from '../../img/padlock.png'
import { Link } from 'react-router-dom';
import { blurHandle, dataVerification, validEmail, validPassword } from '../../utils/function.js';

const AutorisationPage = () => {

   const [valueUserEmail, setValueUserEmail] = useState('')
   const [userEmailDirty, setUserEmailDirty] = useState(false)
   const [userEmailError, setUserEmailError] = useState('')

   const [valueUserPassword, setValueUserPassword] = useState('')
   const [userPasswordDirty, setUserPasswordDirty] = useState(false)
   const [userPasswordError, setUserPasswordError] = useState('')

   const [valueRemember, setValueRemember] = useState(false)

   function getValueEmail(e) {
      setValueUserEmail(e.target.value)
      validEmail(e, setUserEmailError)
   };

   function getValuePassword(e) {
      setValueUserPassword(e.target.value)
      validPassword(e, setUserPasswordError)
   }

   function getValueRemember(e) {
      setValueRemember(e.target.checked)
   }

   useEffect(() => {
      const remember = JSON.parse(localStorage.getItem('remember')) || null
      const user = JSON.parse(localStorage.getItem('user'))

      if (remember === true) {
         setValueUserEmail(user.userEmail) && getValueEmail()
         setValueUserPassword(user.userPassword) && getValuePassword()
      }
   }, [])

   return (
      <WrapperFormAutorisation>
         <FormAutorisation id='form' >
            <Icon>
               <img src={padlock}></img>
            </Icon>
            <Title>
               Sign In
            </Title>
            {(userEmailDirty && userEmailError) && <div style={{ color: 'red', background: 'white', width: "100%", borderRadius: '10px', borderBottomLeftRadius: '1px', marginBottom: '10px', padding: '10px 5px', fontSize: '12px' }}> {userEmailError} </div>}
            <Input id='email' onBlur={e => blurHandle(e, setUserEmailDirty)} placeholder='Email Address *' type='email' autoComplete='on' name='userEmail' value={valueUserEmail} onChange={e => getValueEmail(e)} required />
            {(userPasswordDirty && userPasswordError) && <div style={{ color: 'red', background: 'white', width: "100%", borderRadius: '10px', borderBottomLeftRadius: '1px', marginBottom: '10px', padding: '10px 5px', fontSize: '12px' }}> {userPasswordError} </div>}
            <Input id='password' onBlur={e => blurHandle(e, setUserPasswordDirty)} placeholder='Password *' type='password' autoComplete='on' name='userPassword' value={valueUserPassword} onChange={getValuePassword} required />
            <CheckboxWrapper>
               <InputCheckbox id='remember' type='checkbox' onChange={getValueRemember} checked={valueRemember} name='remember'></InputCheckbox>
               <Title style={{ margin: 0, color: '#ссс', marginLeft: 10, fontSize: 14 }}>
                  Remember me
               </Title>
            </CheckboxWrapper>
            <Button type='submit' onClick={e => dataVerification(e, valueUserEmail, valueUserPassword, valueRemember)} > SIGN IN </Button>
            <WrapperQuestion>
               <Link to='/' style={{ flex: '1 1 40%', }}>
                  <Title style={{ color: 'rgb(197 201 205)', fontSize: 12, fontWeight: 700, marginBottom: 0 }} >
                     Forgot password?
                  </Title>
               </Link>
               <Link to='/registration' style={{ flex: '1 1 60%' }}>
                  <Title style={{ color: 'rgb(197 201 205)', fontSize: 12, fontWeight: 700, marginBottom: 0 }}>
                     Don't have an account? Sign Up
                  </Title>
               </Link>
            </WrapperQuestion>
            <Title style={{ color: 'rgb(197 201 205)', fontSize: 10, marginTop: 50 }} >
               Copyright © Your Website 2022
            </Title>
         </FormAutorisation>
      </WrapperFormAutorisation>
   );
}

export default AutorisationPage;