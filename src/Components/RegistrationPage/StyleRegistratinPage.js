import styled from "styled-components";
import bg from '../../img/bg.jpg'

export const WrapperFormAutorisation = styled.div`
   max-width: 100%;
   height: 100vh;
   padding: 100px 0px;
   background: url(${bg}) 0 0/ cover no-repeat;
   overflow: scroll;
`;

export const FormAutorisation = styled.form`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   border: 1px solid white;
   border-radius: 10px;
   max-width: 300px;
   width:100%;
   margin: 0px auto;
   padding: 30px 20px;
   background: rgba(0,0,0,0.38)
`;

export const Icon = styled.div`
   width:50px;
   height:50px;
   border-radius: 50%;
   background: pink;
   display:flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 15px;
`

export const Title = styled.h3`
   color: #ccc;
   font-family: 'Roboto', sans-serif;
   margin-bottom: 40px;
   font-size: 18px;
   font-weight: 600;
`

export const Input = styled.input`
   width: 100%;
   height: 40px;
   margin-bottom:20px;
   background: rgba(0,0,0,0.5);
   outline: none;
   border: 1px solid #2f2f2f;
   color: #ccc;
   padding: 0px 10px;
   box-sizing: border-box;
   border-radius:5px;
   &::placeholder {
      font-family: 'Roboto', sans-serif;
      color: #ccc;
   } 
   &:focus {
      box-shadow: 0 0 10px 3px #6c6c6c;
   }
`

export const CheckboxWrapper = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   justify-self: start;
   align-self: start;
   margin-bottom: 20px;
`

export const InputCheckbox = styled.input`
   width: 15px;
   height:15px;
   box-sizing: border-box;
`
export const Button = styled.button`
   width: 100%;
   background: #90caf9;
   padding: 7px 0px;
   border-radius: 5px;
   font-family: 'Roboto', sans-serif;
   font-weight: 600;
   font-size: 15px;
   cursor: pointer;
`

export const WrapperQuestion = styled.div`
   display: flex;
   width:100%;
   justify-content: space-between;
   margin-top: 15px;
`

export const WrapperUserName = styled.div`
   display: flex;
   gap: 10px
`
