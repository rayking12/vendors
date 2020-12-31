import React from 'react';
import VendorProducts from './vendorProducts';
import { Products } from './productItems';

const VendorUsers = () => {

    return (
        <div className="d-flex justify-content-center ">
            {
                Products.map((product, idx) => (
                    <VendorProducts vendorProducts = {product.product1} key={idx} product={product} />
                 ))
            }
        </div>
    )
}
export default VendorUsers;