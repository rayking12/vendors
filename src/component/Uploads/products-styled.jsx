import styled from "styled-components";

const ProductStyled = styled.section`
  .product-div {
    display: flex;
    justify-content: flex-end;
    margin-right: 3rem;
  }
  .main-div {
    padding-top: 4.8rem;
    margin-left: 7rem;
  }
  .mainForm {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .file-upload {

    max-width: 60%;
  }
  .productForm {

  }

  .img-preview {
    position: absolute;
    width: 17rem;
    height: auto;
    top: 12.8rem;
    left: 8rem;
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
    margin: 20px  20px ;
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
`;
export default ProductStyled;
