import styled from "styled-components";


export const Footer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #FFFFFF;
  height: 10vh;
 
  div {
    height: 2.2rem;
    display: flex;
    justify-content: space-evenly;
    width: 20vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 15px;
    margin-top: 1rem;
  }

  @media screen and (min-width: 300px) and (max-width: 768px) {

  .mc {
   display: flex;
   justify-content: space-around;
   width: 40vw;
  }

  p {
    font-size: 10px;
    margin-top: 1rem;
  }

  .app  {
     width: 50vw;
   
  }
  }
  `;