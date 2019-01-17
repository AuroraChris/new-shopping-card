import React, { Component } from "react";
import Filter from "./Filter/index";
import ShelfHeader from "./ShelfHeader/index";
import ProductList from "./ProductList/index";
import Sort from "./Sort/index";

class Shelf extends Component {
    render(){
        return (
            <div>
                < Filter />
                < Sort />
                < ShelfHeader />
                < ProductList />
            </div>
        );
    }
}

export default Shelf;