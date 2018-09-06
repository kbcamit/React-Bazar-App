import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { name: 'Burger', price: 150 },
        { name: 'Grill', price: 79 }
      ]
    };
  }

  addListToBazar = (event) => {
    event.preventDefault();

    const product = event.target.elements.product.value;
    const price = parseFloat(event.target.elements.price.value);

    const list = {
      name: product,
      price: price
    };

    const products = [...this.state.products];

    products.push(list);

    this.setState({products: products});

    event.target.elements.product.value = '';
    event.target.elements.price.value = '';
    
  };

  deleteProductFromList = (index) => {
    const products = [...this.state.products];
    products.splice(index, 1);
    this.setState({products: products});
  };

  render() {
    let price = 0;
    return (
      <div className="App">
        <div className="Bazar">
          {this.state.products.map((product, index) => {
            price += product.price;
            return (
              <div key={index}>
                <p>Name: {product.name} - Price: {product.price} - <button onClick = {()=>this.deleteProductFromList(index)}>
                                                                    Remove</button></p>
              </div>
            );
          })}
          <p>Total: {price}</p>
        </div>
        <form onSubmit = {this.addListToBazar}>
          <input type="text" name="product" id="product" placeholder="Enter List Name" />
          <input type="number" step="any" name="price" id="price" placeholder="Enter Price" />
          <button>Add List</button>
        </form>
      </div>
    );
  }
}

export default App;
