import styled from "styled-components";
import bg from '../../img/BgUserPage.jpg'


export const WrapperUserPage = styled.div`
   width: 100%;
   height: 100vh;
   padding: 30px 10px;
   background: url(${bg}) 0 0 / cover no-repeat
`

export const InfoUser = styled.div`
   max-width: 900px;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   text-align: center;
   border-radius: 15px;
   background: #ff00007d;
   font-size: 36px;
   font-family: "Roboto";
   font-weight: 700;
   margin-bottom: 20px;
`