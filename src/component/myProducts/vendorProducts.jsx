import React from "react";
import VendorProductStyled from './vendorProductStyled';
import { Link,withRouter } from 'react-router-dom';
import DisplayDummy from './displaydummy';

const VendorProducts = ({ vendorProducts, product, history, match }) => {
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
        <Link to={`${match.path}/${vendorProducts.productName}`} className='FirstDiv'>
          <p>{vendorProducts.productName}</p>
          <span>Stock Left - {vendorProducts.StockLeft}</span>
          </Link>
        </div>
      </div>
    </div>
    </VendorProductStyled>
  );
};
export default withRouter(VendorProducts);
