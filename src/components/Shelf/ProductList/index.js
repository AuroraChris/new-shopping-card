import React from 'react';
import Product from "./Product/index";
import Data from "../../../data/data.json";

const ProductList = () => {
    const renderedList = Data.goods.map(image => {
        return <div><Product images={image.pictures} /></div>
    }
);   

    return (
        <div>{renderedList}</div>
    );
}

export default ProductList;
