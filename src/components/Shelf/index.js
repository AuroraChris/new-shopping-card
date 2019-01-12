import React, { Component } from "react";
import Filter from "./Filter/index";
import ShelfHeader from "./ShelfHeader/index";
import Product from "./Product/index";
import Sort from "./Sort/index";

class Shelf extends Component {
    render(){
        return (
            <div>
                < Filter />
                < ShelfHeader />
                < Product />
                < Sort />
            </div>
        );
    }
}

export default Shelf;