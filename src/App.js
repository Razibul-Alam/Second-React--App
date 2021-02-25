import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const players=['shakib','musfik','tamim','mahmudullah']
  const students=[
    {name:'Raju',id:'131313',job:'Engineer'},
    {name:'Alam',id:'141414',job:'Accontant'},
    {name:'Nur',id:'151515',job:'Engineer'}
  ]
  students.map(student=>{
    console.log(student.name)

  })
  return (
    <div className="App">
      <Productcounter></Productcounter>
      {/* <ul>
       {
         players.map(player=>{
         return  <li>{player}</li>;
         })
       }
      
      </ul> */}
      {/* <Card name={students[0].name} id={students[0].id}></Card>
      <Card name='Alam' id='121212'></Card>
      <Card name='Nur' id='111111'></Card> */}
    </div>
  );
}

function Card(props) {
  const Styling={width:'300px',color:'red'}
   return(
     <div style={Styling}>
       <h3>Name:{props.name}</h3>
       <h3>Id:{props.id}</h3>
       <p>hello i am here</p>
     </div>
   )  
   
}


function Productcounter() {
  const[count,setCount]=useState(0);
  const addProduct=()=>setCount(count+1);
  const removeProduct=()=>setCount(count-1);
  return(
    <div>
      <h2>The price of Product=100</h2>
      <h3>The number of product:{count}</h3>
      <h3>Total Price={count*100}</h3>
      <button onClick={addProduct}>Add Product</button>
      <button onClick={removeProduct}>Remove Product</button>
    </div>
  )
  
}
export default App;
