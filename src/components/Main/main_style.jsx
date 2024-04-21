
import styled from "styled-components";


export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: #ffc72c;
  
  div {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 2rem;
    
  }

  img {
    width: 25vw;
    margin-left: 5rem;
  }

  h1 {
    font-size: 4rem;
    color: #FFFFFF;
    margin: 5rem;
    font-family: "Inter", sans-serif;
    font-weight: 800;
    text-align: center;
 }

 .big {
  margin: 5rem;
 }

  span {
    color: red;
  }
    
  .bigmac {
    width: 6vw;
    margin: 2rem;
    margin-top: 0;
  }

  @media screen and (min-width: 300px) and (max-width: 768px) {
   
    h1 {
        font-size: 5vw;
    }

.bigmac {
    width: 10vw;
    margin-top: 0;
  }
}

`;

export const Titulo = styled.div`
    font-family: "Roboto", sans-serif;
    font-size: 30px;
    background-color: #FEB706;
    color: #FFFFFF;
    text-align: center;
    padding-top: 20px;   
`;


export const Container = styled.section`
  height: 80vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #FEB706;
 
 `;


export const Card = styled.div`
  width: 20vw;
  text-align: center;
  height: 45vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: #FFFFFF;

  img {
    width: 100%;
   
  }


  h3 {
    font-size: 19px;
    margin-top: 10px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
 }

  button {
    border: none;
    border-radius: 10px;
    background-color: #FEB706;
    width: 8vw;
    height: 5vh;
    margin: 1rem;

 }

 @media screen and (min-width: 300px) and (max-width: 768px) {
  width: 30vw;
  text-align: center;
  height: 20vh;

  h3 {
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
 }

  button {
    border: none;
    width: 15vw;
    height: 5vh;
 }
}
`;