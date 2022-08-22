import { useState, useEffect } from 'react';
import './App.css';


//create new component
const Person = (props) =>{
  return (
    <>
    <h1>Name : {props.name}</h1>
    <h2>Last name : {props.lastName}</h2>
    <h2>Age : {props.age}</h2>
    </>
  );
}

//main component
const App = () => {
  const name = 'jane';
  const isNameShowing = false;
  const [counter,setCounter] = useState(0);
  //run when something happen in page
  useEffect(() => {
    //alert('Page loaded !')
  });
  //run when counter variable changed
  useEffect(() => {
    alert('Counter changed to '+counter);
  },[counter]);
  return (
    <div className="App">
      {/* <h1>Hello, {isNameShowing ? name : 'someone'} !</h1> */}
      {/* <h1>Hello, {name} !</h1> */}
      {/* <h1>Hello, { 2 + 2} !</h1>
      {
        name ? (
          <>
          {name}
          </>          
        )
        :(
          <>
          <h1>test</h1>
          <h2>There is no name</h2>
          </>
        )
      } */}
      {/*USE another component in main component*/}
      <Person name={'john'} lastName={'doe'} age={'30'}/>
      <Person name={'vishwa'} lastName={'praveen'} age={'20'}/>

      {/* using states */}
      <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount+1)}>+</button>
    </div>
  );
}

export default App;
