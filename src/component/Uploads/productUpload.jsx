import React from "react";
import Header from "../Home-page/vendors";
import ProductStyled from "./products-styled";
import Footer from "../footer/footer";

class productUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }
  fileSelected = (event) => {
    console.log(event.target.files[0]);
  };
  _handleSubmit(e) {
    e.preventDefault();
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <img src={imagePreviewUrl}  width="100%" className="img-preview" />
      );
    } else {
      $imagePreview = <div className="previewText"> Image</div>;
    }

    return (
      <ProductStyled>
        <Header />
        <div className="main-div">
          <div className="product-div">
            <h1>Jack Hanniel</h1>
            <svg
              
              viewBox="0 0 53 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.5 0C11.872 0 0 12.096 0 27C0 41.904 11.872 54 26.5 54C41.128 54 53 41.904 53 27C53 12.096 41.128 0 26.5 0ZM26.5 8.1C30.899 8.1 34.45 11.718 34.45 16.2C34.45 20.682 30.899 24.3 26.5 24.3C22.101 24.3 18.55 20.682 18.55 16.2C18.55 11.718 22.101 8.1 26.5 8.1ZM26.5 46.44C19.875 46.44 14.0185 42.984 10.6 37.746C10.6795 32.373 21.2 29.43 26.5 29.43C31.7735 29.43 42.3205 32.373 42.4 37.746C38.9815 42.984 33.125 46.44 26.5 46.44Z"
                fill="#320234"
              />
            </svg>
          </div>
          <div className="mainForm">
            <div className="file-upload">
              <form onSubmit={(e) => this._handleSubmit(e)}></form>
              <input type="file" onChange={(e) => this._handleImageChange(e)} required/>
              <div className="imgPreview" >{$imagePreview}</div>
              <p >Product upload image</p>
            </div>
        
                <div className="productForm">
              <form>
                  <p>Product Description</p>
                  <input type="text" placeholder="Product name" required/>
                  <input type="text" placeholder="Product Model" required/>
                  <input type="text" placeholder="Product Price" required/>
                  <input type="text" placeholder="Product Category" required/>
                  <input type="text" placeholder="Product Category" required/>
                  <input placeholder="Product Description/Review" className='descriptionText' required/>
                  <div className='buttonDiv'>
                  <button type="ubmit"className='button'>Upload Product</button>
                  <button className='productButton'>My Products</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </ProductStyled>
    );
  }
}
export default productUpload;
