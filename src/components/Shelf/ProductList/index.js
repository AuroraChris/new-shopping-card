import React from 'react';
import Product from "./Product/index";
import Data from "../../../data/data.json";

const ProductList = () => {
    const renderedList = Data.goods.map(product => {
        return <Product product={product} key={product.name} />
    }
);   

    return (
        <div>{renderedList}</div>
    );
}

export default ProductList;
