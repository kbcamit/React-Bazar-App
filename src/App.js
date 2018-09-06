import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { name: 'Burger', price: 150 },
        { name: 'Vegitable', price: 79 }
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
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product, index) => {
                price += product.price;
                return (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{new Intl.NumberFormat().format(product.price)}</td>
                    <td><button className="btn btn-danger" onClick = {()=>this.deleteProductFromList(index)}>X</button></td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan="2">Total Price: </td>
                <td>{new Intl.NumberFormat().format(price)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="Bazar">
          <form onSubmit = {this.addListToBazar}>
            <div className="form-group">
              <div className="row">
                <div className="col-md-4">
                  <label>List Name:</label>
                </div>
                <div className="col-md-8">
                  <input type="text" name="product" id="product" className="form-control" placeholder="Enter List Name" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-4">
                  <label>Price:</label>
                </div>
                <div className="col-md-8">
                  <input type="number" step="any" name="price" id="price" className="form-control" placeholder="Enter Price" />
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Add List</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
