import logo from "../../assets/logo.png";
import Google from "../../assets/Google.png";
import App from "../../assets/App.png";

import * as S from "./footer_style";

function Footer() {
  return (
    <S.Footer>
    
    <div className="mc">
    <img  src={logo} alt="" />
    <p>© McDonald’s 2024</p>
    </div>
    
    <div className="app">
    <img src={Google} alt="" />
    <img src={App} alt="" />
    </div>
  </S.Footer>
    
     
  );
}

export default Footer;