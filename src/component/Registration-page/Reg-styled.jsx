import styled from "styled-components";

export const RegStyle = styled.section`
  body {
    background: linear-gradient(180deg, #9929ea 0%, rgba(88, 8, 251, 0) 100%);
    max-width: 100vw;
  }
  // Regular
  @font-face {
    font-family: "made-tommy-regular";
    font-style: normal;
    font-weight: 900;
    src: url("/fonts/MadeTommy/Made-Tommy-ExtraBold.otf");
  }

  @font-face {
    font-family: "made-tommy-regular";
    font-style: normal;
    font-weight: 800;
    src: url("/fonts/MadeTommy/Made-Tommy-Black.otf");
  }
  @font-face {
    font-family: "made-tommy-regular";
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/MadeTommy/Made-Tommy-Bold.otf");
  }
  @font-face {
    font-family: "made-tommy-regular";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/MadeTommy/Made-Tommy-Medium.otf");
  }
  @font-face {
    font-family: "made-tommy-regular";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/MadeTommy/Made-Tommy-Regular.otf");
  }
  @font-face {
    font-family: "made-tommy";
    font-style: normal;
    font-weight: 300;
    src: url("/fonts/MadeTommy/Made-Tommy-Light.otf");
  }
  @font-face {
    font-family: "made-tommy-regular";
    font-style: normal;
    font-weight: 200;
    src: url("/fonts/MadeTommy/Made-Tommy-Thin.otf");
  }

  .Home-div {
    background: linear-gradient(180deg, #9929ea 0%, rgba(88, 8, 251, 0) 100%);
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .Reg-div {
    /* REGISTER TO START SELLING ON 3REEN */
    /* Heading / 56px */
    font-family: made-tommy;
    font-style: normal;
    font-weight: 200;
    text-align: center;
    color: #ffffff;
    padding-top: 60px;
    text-transform: uppercase;
    font-size: 40px;
    margin-bottom: 30px;
  }
  .Reg.div h1:last-child {
    color: #eee;
  }
  .Svg-div {
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }

  .First-svg {
    position: absolute;
    width: 241px;
    height: 241px;
  }

  .Second-div {
    position: absolute;
    width: 134px;
    height: 138px;
  }

  .form-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #9f41ef;
    width: 80%;
    margin-top: 70px;
    margin-bottom: 50px;
    padding-bottom: 50px;
    color: #f3f2f0;
  }
  .form-div p {
    font-family: made-tommy;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    margin-top: 8%;
  }
  .div-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .form-divs {
    display: flex;
    margin: 30px;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .form-divs label {
    text-align: start;
    margin-left: 8px;
  }

  .form-divs input {
    border-radius: 16px;
    height: 30px;
    border: 2px solid #bdbdbd;
    padding-left: 1em;
  }
  .Sex-div {
    display: block;
  }
  .Sex-div label {
    margin-right: 1rem;
  }
  .Sex-div input {
    margin-left: 1rem;
  }

  .Sex-div p {
    text-align: start;
    margin-left: 2.4rem;
    font-size: 18px;
    font-weight: bold;
  }
  .form-label {
    display: flex;
    justify-content: center;
  }
  .brief-div {
   border-radius : 26px;
   height: 11rem;
   padding: 1rem;


  }
  .error {
    font-weight: italics;
    color: #f42828;
    text-align: start;
    font-size: 15px;
  }
  .Button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .Button button {
    color: white;
    background: black;
padding:1.3rem;
border-radius: 26px;
border: none;
  }
  @media (max-width: 600px) {
    .Reg-div {
      font-size: 30px;
    }
    .First-svg {
      width: 200px;
      height: 200px;
    }
    .Second-div {
      width: 120px;
      height: 120px;
    }
    .div-form {
      display: flex;
      flex-direction: column;
    }
    .form-div p {
      font-size: 18px;
    }
  }
  @media (min-width: 1025px)  {
    .Button button {
      margin-left: 13rem;
      position:static;
    }
  }
  @media (min-width: 600px) and (max-width: 1024px) {
    .div-form {
      display: flex;
      flex-direction: column;
    }
  }
`;
