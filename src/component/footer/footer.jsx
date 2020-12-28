import React from "react";
import { FooterStyled } from "./footer-styled";

const Footer = () => {
  return (
    <FooterStyled>
      <footer className="Footer">
        <div className="wrap">
          <div className="search">
            <input type="text" className="searchTerm" placeholder="Search" />
            <button type="submit" className="searchButton">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                  fill="#FEF5FF"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="Socials">
          <img src="/img/name-png-format-01-1.png" alt="3reen" />
          <ul className="Nav">
            <li>
              <a href="https://facebook.com">
                <img src="/img/fb-rounded-brand-white-64.png" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <img src="/img/gplus-rounded-brand-white-64.png" alt="g-plus" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <img
                  src="/img/twitter-rounded-brand-white-64.png"
                  alt="twitter"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="Flutterwave">
          <img src="/img/flutterwave-logo-1.png" alt="flutterwave" />
        </div>
      </footer>
    </FooterStyled>
  );
};
export default Footer;
