import React, { Component } from 'react'
import Cart from './Component/Cart';
import Navbar from './Component/Navbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
        products: [
            {
                price: 999,
                title: "Mobile Phone",
                qty: 1,
                img:'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=329&q=80',
                id: 1
            },
            {
                price: 99,
                title: "Watch",
                qty: 10,
                img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                id: 2
            },
            {
                price: 9999,
                title: "Laptop",
                qty: 4,
                img:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
                id: 3
            }
        ]
    }
}
handelIncreaseQuantity = (product) => {
    console.log('Increase the property', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
        products: products
    })
}
handelDecreaseQuantity = (product) => {
    console.log('Increase the property', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
        return;
    }

    products[index].qty -= 1;

    this.setState({
        products: products
    })
}
handleDeleteProduct =(id)=>{
    const {products} = this.state;

    const items =products.filter((item) => item.id !== id);

    this.setState({
        products:items
    })
}
getCartCount=()=>{
  const {products} = this.state;
   let count =0;
  products.forEach((product)=>{
    count += product.qty;
  })
   return count;
}
getCartTotal=()=>{
  const {products} =this.state;
  let cartTotal =0;
  products.map((product) =>{
    cartTotal = cartTotal + product.qty * product.price
  })
  return cartTotal;
}
  render(){
    const {products}=this.state;
  return (
    <>
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <h1>Cart Items</h1>
    <Cart
    products={products}
    onIncreaseQuantity={this.handelIncreaseQuantity}
    onDecreaseQuantity={this.handelDecreaseQuantity}
    onDeleteProduct={this.handleDeleteProduct} />
      <div style={{padding:10,fontSize:30}}>
    Total Amount = Rs {this.getCartTotal()}
    </div>
    </div>  
    </>
  );
}
}

export default App;
