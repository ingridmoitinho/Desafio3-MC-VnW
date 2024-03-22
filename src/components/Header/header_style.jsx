
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


 * {
     margin: 0;
     padding: 0;
     box-sizing:border-box;
     font-family: "Inter", sans-serif;
 }

`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 15vh;

 .mc {
    height: 3rem;
    margin: 1rem;
  }
 .app {
    width: 10vw;
    display: flex;
    justify-content: space-evenly;;
    align-items: center;
  }
  
 h3 {
    font-size: 11px;
    font-weight: 300;
 }

 section {
    display: flex;
  }
  
 .mequi {
    background-color: #FFC72C;
    width: 12vw;
    height: 8vh;
    margin:20px;
    display: flex;
    justify-content: space-evenly;
    border-radius: 10px;
  }

 section img {
    width: 1.6rem;
  }

 .mequi h3 {
    font-size: 11px;
    margin-top: 1.2rem;
    font-weight: 800;
  }

`;