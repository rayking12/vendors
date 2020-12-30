import React from "react";
import VendorProductStyled from './vendorProductStyled'
import { Link } from 'react-router-dom'

const VendorProducts = ({ vendorProducts }) => {
  return (
      <VendorProductStyled>
    <div >
      <div className="d-flex flex-column m-5">
        <div className='imgDiv'>
          <img
            className="img-thumbnail"
            src={vendorProducts.productImage}
            alt=""
            />

        </div>
        <div >
        <Link to='displayProduct' className='FirstDiv'>
          <p>{vendorProducts.productName}</p>

          <span>Stock Left - {vendorProducts.StockLeft}</span>
          </Link>
        </div>
      </div>
    </div>
    </VendorProductStyled>
  );
};
export default VendorProducts;
