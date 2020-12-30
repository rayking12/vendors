import styled from "styled-components";

const ProductStyled = styled.section`
  .product-div {
    display: flex;
    justify-content: flex-end;
    margin-right: 3rem;
    color: #320234;
  }
  .product-div svg {
    margin-left: 1rem;
    width: 53px;
    height: 54px;
  }

  .main-div {
    padding-top: 4.8rem;
    text-align: 
  }
  .mainForm {
    display: grid;
    grid-template-columns: 1fr 2fr;
    color: #BDBDBD;
  }

  .file-upload {
    max-width: 60%;
  }
  .productForm {
  }

  .img-preview {
    position: absolute;
    width: 15rem;
    height: 7rem;
    object-fit: cover;
    top: 12.4rem;
    left: 7.5rem;
    z-index: 1;
  }
  .file-upload {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 3rem;
  }
  .file-upload input {
    position: absolute;
    background: #c4c4c4;
    width: 7rem;
    height: 5rem;
    border: none;
    padding: 3rem;
  }
  .productForm input {
    border: 2px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 26px;
    padding: 1rem;
    margin: 20px 20px;
  }
  .buttonDiv {
    display: flex;
    flex-direction: column;
    width: 30%;
  }

  .button {
    background: rgba(0, 0, 0, 0.87);
    border-radius: 50px;
    border: none;
    color: white;
    padding: 0.7rem;
    margin: 0.5rem;
  }
  .productButton {
    color: #BDBDBD;
    background: none;
    border: none;
    position: sticky;
  }
  .productForm textarea {
    border: 2px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 26px;

    bottom: 10rem;
  }
  .descriptionText {
    height: 14rem;
    padding: 1rem;
  }
  @media (max-width: 600px) {
    .mainForm {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .file-upload input {
      width: 6rem;
    }
    .product-div {
      font-size: 13px;
      margin-right: 2rem;
    }
    .product-div svg {
      width: 45px;
      margin-left: 0.5rem;
    }
    .img-preview {
      width: 11rem;
      top: 10rem;
      left: 7rem;
    }
    .file-upload input {
      position: relative;
      background: none;
      height: 0.1rem;
    }
    .productForm {
      text-align: center;
    }
    .file-upload {
      display: flex;
      flex-direction: column;
     
    }
    .button {
      position: sticky;
      margin-left: 8.5rem;
    }
    .buttonDiv {
      width: 70%;
    }
    .productButton {
      margin-left: 9rem;
    }
  }
`;
export default ProductStyled;
