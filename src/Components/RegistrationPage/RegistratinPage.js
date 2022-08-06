import React, { useEffect, useState } from 'react';
import { Button, CheckboxWrapper, FormAutorisation, Icon, Input, InputCheckbox, Title, WrapperFormAutorisation, WrapperQuestion, WrapperUserName } from "./StyleRegistratinPage"
import padlock from '../../img/padlock.png'
import { Link } from 'react-router-dom';
import { addUser, blurHandle, validEmail, validFirstName, validLastName, validPassword } from '../../utils/function.js';

const RegistratinPage = () => {

   const [valueUserEmail, setValueUserEmail] = useState('')
   const [userEmailDirty, setUserEmailDirty] = useState(false)
   const [userEmailError, setUserEmailError] = useState('Email не може бути порожнім')

   const [valueUserPassword, setValueUserPassword] = useState('')
   const [userPasswordDirty, setUserPasswordDirty] = useState(false)
   const [userPasswordError, setUserPasswordError] = useState('Password не може бути порожнім')

   const [valueUserFirsName, setValueUserFirsName] = useState('')
   const [userFirstNameDirty, setUserFirstNameDirty] = useState(false)
   const [userFirstNameError, setUserFirstNameError] = useState(`Ім'я повинно містити не менше трьох символів`)

   const [valueUserLastName, setValueUserLastName] = useState('')
   const [userLastNameDirty, setUserLastNameDirty] = useState(false)
   const [userLastNameError, setUserLastNameError] = useState(`Прізвище повинно містити не менше трьох символів`)

   const [validForm, setValidForm] = useState(false)

   const [valueWantReceive, setValueWantReceive] = useState(true)

   function getValueFirsName(e) {
      setValueUserFirsName(e.target.value)
      validFirstName(e, setUserFirstNameError)
   }

   function getValueLastName(e) {
      setValueUserLastName(e.target.value)
      validLastName(e, setUserLastNameError)
   }

   function getValueEmail(e) {
      setValueUserEmail(e.target.value)
      validEmail(e, setUserEmailError)
   }

   function getValuePassword(e) {
      setValueUserPassword(e.target.value)
      validPassword(e, setUserPasswordError)
   }

   function getValueWantReceive(e) {
      setValueWantReceive(e.target.checked)
   }

   useEffect(() => {
      if (userEmailError || userPasswordError || userFirstNameError || userLastNameError) {
         setValidForm(false)
      } else {
         setValidForm(true)
      }
   }, [userEmailError, userPasswordError, userFirstNameError, userLastNameError])

   return (
      <div>
         <WrapperFormAutorisation>
            <FormAutorisation id='form' action='#' onSubmit={addUser} >
               <Icon>
                  <img src={padlock}></img>
               </Icon>
               <Title>
                  Sign In
               </Title>
               <WrapperUserName>
                  <div style={{ marginRight: '10px', position: 'relative' }}>
                     {(userFirstNameDirty && userFirstNameError) && <div style={{ color: 'red', background: 'white', width: "95%", borderRadius: '10px', borderBottomLeftRadius: '1px', padding: '5px 5px', fontSize: '12px', position: 'absolute', top: '-40px' }}> {userFirstNameError} </div>}
                     <Input id='firstName' onBlur={e => blurHandle(e, setUserFirstNameDirty)} placeholder='First Name *' type='text' name='firstName' value={valueUserFirsName} onChange={getValueFirsName} required />
                  </div>
                  <div style={{ position: 'relative' }}>
                     {(userLastNameDirty && userLastNameError) && <div style={{ color: 'red', background: 'white', width: "100%", borderRadius: '10px', borderBottomLeftRadius: '1px', padding: '5px 5px', fontSize: '12px', position: 'absolute', top: '-40px', right: '-10px' }}> {userLastNameError} </div>}
                     <Input id='lastName' onBlur={e => blurHandle(e, setUserLastNameDirty)} placeholder='Last Name *' type='text' name='lastName' value={valueUserLastName} onChange={getValueLastName} required />
                  </div>
               </WrapperUserName>
               {(userEmailDirty && userEmailError) && <div style={{ color: 'red', background: 'white', width: "100%", borderRadius: '10px', borderBottomLeftRadius: '1px', marginBottom: '10px', padding: '10px 5px', fontSize: '12px' }}> {userEmailError} </div>}
               <Input id='email' onBlur={e => blurHandle(e, setUserEmailDirty)} placeholder='Email Address *' type='email' name='userEmail' value={valueUserEmail} onChange={getValueEmail} required />
               {(userPasswordDirty && userPasswordError) && <div style={{ color: 'red', background: 'white', width: "100%", borderRadius: '10px', borderBottomLeftRadius: '1px', marginBottom: '10px', padding: '10px 5px', fontSize: '12px' }}> {userPasswordError} </div>}
               <Input id='password' onBlur={e => blurHandle(e, setUserPasswordDirty)} placeholder='Password *' type='password' name='userPassword' value={valueUserPassword} onChange={getValuePassword} required />
               <CheckboxWrapper>
                  <InputCheckbox type='checkbox' onChange={getValueWantReceive} checked={valueWantReceive} name='want receive'></InputCheckbox>
                  <Title style={{ margin: 0, color: '#ссс', marginLeft: 10, fontSize: 14 }}>
                     I want to receive inspiration, marketing promotions and updates via email.
                  </Title>
               </CheckboxWrapper>
               <Button disabled={!validForm} type='submit'> Registration </Button>
               <WrapperQuestion>
                  <Link to='/autorisation' style={{ flex: '1 1 60%', }}>
                     <Title style={{ color: 'rgb(197 201 205)', fontSize: 12, fontWeight: 700, marginBottom: 0, textAlign: 'right' }}>
                        Already have an account? Sign in
                     </Title>
                  </Link>
               </WrapperQuestion>
               <Title style={{ color: 'rgb(197 201 205)', fontSize: 10, marginTop: 50, }} >
                  Copyright © Your Website 2022
               </Title>
            </FormAutorisation>
         </WrapperFormAutorisation>
      </div>
   );
};

export default RegistratinPage;