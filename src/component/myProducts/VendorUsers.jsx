import React from 'react';
import VendorProducts from './vendorProducts';
import DisplayProduct from './DisplayProduct';
import DisplayDummy from './displaydummy';

const VendorUsers = () => {
    const Products = [
        {
            product1: {
                productName: 'Xiaomi Note 8',
                Productprice:'NGN 50999',
                ProductCategory: 'Phones/Gadgets',
                productImage: '/img/xiaomi.jpg',
                StockLeft: 20,
            },
        },
        {
            product1: {
                productName: 'Apple MacBook',
                Productprice:'NGN 150999',
                ProductCategory: 'Phones/Gadgets',
                productImage: '/img/laptop3x.png',
                StockLeft: 10,
            },
        },
        {
            product1: {
                productName: 'Apple MacBook',
                Productprice:'NGN 150999',
                ProductCategory: 'Phones/Gadgets',
                productImage: '/img/laptop3x.png',
                StockLeft: 10,
            },
        },
        {
            product1: {
                productName: 'Iphone X',
                Productprice:'NGN 150999',
                ProductCategory: 'Phones/Gadgets',
                productImage: '/img/background.png',
                StockLeft: 2,
            },
        },
        {
            product1: {
                productName: 'Google Pixel',
                Productprice:'NGN 150999',
                ProductCategory: 'Phones/Gadgets',
                productImage: '/img/background.png',
                StockLeft: 10,
            },
        },
    ]
    return (
        <div className="d-flex justify-content-center ">
            <VendorProducts vendorProducts = {Products[0].product1}/>
            <VendorProducts vendorProducts = {Products[1].product1}/>
            <VendorProducts vendorProducts = {Products[2].product1}/>
            <VendorProducts vendorProducts = {Products[3].product1}/>
            <VendorProducts vendorProducts = {Products[4].product1}/>

        </div>
    )
}
export default VendorUsers;