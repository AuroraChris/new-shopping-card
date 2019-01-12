import React, { Component } from 'react';
import './App.css';
import Shelf from "./components/Shelf/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <i className="fas fa-cart-plus"></i>
        <main className="container">
          < Shelf />
        </main>
      </div>
    );
  }
}

export default App;
