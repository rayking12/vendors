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
    margin-left: 7rem;
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
  }
`;
export default ProductStyled;
