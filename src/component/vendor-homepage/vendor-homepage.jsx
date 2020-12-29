import React from "react";
import { HomeStyled } from "./homepage-styled";
import Footer from '../footer/footer';
import { Link} from 'react-router-dom';
import RegPage from '../Registration-page/Reg-page'

const Homepage = ( props ) => {
  return (
    <HomeStyled>
      <div className="Background">
        <div className="content-div">
          <div className="Vector" >
            <svg
              width="90"
              viewBox="0 0 124 125"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M62 0.990479C27.776 0.990479 0 28.7665 0 62.9905C0 97.2145 27.776 124.99 62 124.99C96.224 124.99 124 97.2145 124 62.9905C124 28.7665 96.224 0.990479 62 0.990479ZM62 19.5905C72.292 19.5905 80.6 27.8985 80.6 38.1905C80.6 48.4825 72.292 56.7905 62 56.7905C51.708 56.7905 43.4 48.4825 43.4 38.1905C43.4 27.8985 51.708 19.5905 62 19.5905ZM62 107.63C46.5 107.63 32.798 99.6945 24.8 87.6665C24.986 75.3285 49.6 68.5705 62 68.5705C74.338 68.5705 99.014 75.3285 99.2 87.6665C91.202 99.6945 77.5 107.63 62 107.63Z"
                fill="white"
              />
            </svg>
          </div>

          <div>
            <h1 className="Header">{props.name}</h1>
          </div>
          <div className='Button'>
            <Link to='/productUpload'>
            <button className="Button-div">Upload Product</button>
            </Link>
          </div>
          <div className='Button'>
            <button className="Button-div">My Product</button>
          </div>
          <div className="Footer-div">
      <Footer />
          </div>
      </div>
      </div>
    </HomeStyled>
  );
};
export default Homepage;
