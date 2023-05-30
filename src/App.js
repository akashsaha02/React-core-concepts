// import logo from './logo.svg';

import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const nayok = ['Rajjak', 'Johnny DEPP']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$9.99' },
  ]

  const productName = products.map(product => product.name)
  // console.log(productName)



  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <User></User>
        <ul>{
          nayok.map(nayok => <li>{nayok}</li>)
        }
          {
            products.map(pd => <Product product={pd}></Product>)
          }
        </ul>


        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

        <Person name="AKASH SAHA" job="WEB-DEVELOPER"></Person>
        <Person name="BASANTA" job="BEKAR"></Person>
      </header>
    </div>
  );
}

function Product(props) {

  const productStyle = {
    border: '1px solid grey',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    height: '200px',
    width: '200px',
    float: 'left',
    color: 'black'
  }
  const { name, price } = props.product;
  // console.log(name, price);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Counter(props) {
  const [count, setCount] = useState(10);
  // const handleIncreased = () => setCount(count + 1);  //event Handler
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseLeave={() => setCount(count + 1)}>Increase</button>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
    </div>
  )

}

function User() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    // console.log("calling effect");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data)
        // console.log(data);
        )
  },[])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(u => <li>{u.email}</li>)
        }
      </ul>
      {
        console.log(users)

      }
    </div>
  )
}


function Person(props) {
  return (
    <div style={{ border: '10px solid yellow', margin: '10px', padding: '10px', width: '400px' }}>
      <h3>My Name: {props.name} </h3>
      <p>My Profession: {props.job} </p>
    </div>
  )
}

export default App;
