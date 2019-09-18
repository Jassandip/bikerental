import React from 'react';
import './App.css';
import Product from './components/Product';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Checkout from './components/Checkout';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    total : 0,
    sideItem : false,
    products : [
      {
        "id": 1,
        "name": "Adult Male Bike",
        "price": 20.50,
        "image": "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
        "product_type": "bike",
        "quantity":0
      },
      {
        "id": 2,
        "name": "Adult Female Bike",
        "price": 20.50,
        "image": "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
        "product_type": "bike",
        "quantity":0,
      },
      {
        "id": 3,
        "name": "Kids Unisex Bike",
        "price": 12.75,
        "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
        "product_type": "bike",
        "quantity":0,
      },
      {
        "id": 4,
        "name": "Adult Unisex Helmet",
        "price": 4.00,
        "image": "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
        "product_type": "accessory",
        "quantity":0,
      },
      {
        "id": 5,
        "name": "Kids Unisex Helmet",
        "price": 3.50,
        "image": "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
        "product_type": "accessory",
        "quantity":0,
      },
      {
        "id": 6,
        "name": "Insurance",
        "price": 9.99,
        "image": "http://via.placeholder.com/250x250?text=Insurance",
        "product_type": "addon",
        "quantity":0,
      }
    ]
  }
  this.update = this.update.bind(this)
  this.updateTotal = this.updateTotal.bind(this)
  
};
update(id,quantity) {
  // e.preventDefault();
  let products = this.state.products;
  products[id-1]["quantity"] = quantity 
  this.setState({
    products : products
  })
  this.updateTotal();
}

updateTotal(u){
  // e.preventDefault();
  let total = 0;
  this.state.products.map((product) => (  
    total += product["quantity"]*product["price"]
  ))
  this.setState({
    total : total
  });
  let mainQuantity = this.state.products[0]["quantity"]+
    this.state.products[1]["quantity"]+
    this.state.products[2]["quantity"];
    if (mainQuantity>0) {
      this.setState({
        sideItem: true
      })
    }
    else{
      this.setState({
        sideItem: false
      })
    }
}

  render() {
    const products = this.state.products.map((product, index) => (  
      <Product {...product} 
      update={this.update}
      sideItem={this.state.sideItem}
      />
    ));
  return (
    <div className="App">
      <BrowserRouter >
      <Header total={this.state.total} />
      
      <Switch>
  <Route exact path="/" render={() => products} />
  <Route path="/checkout" render={ () =>
  <Checkout 
  products={this.state.products}
  total={this.state.total} />
  } />
</Switch>
</BrowserRouter>
    
    </div>
  );
  }
}

export default App;
