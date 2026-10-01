import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [count ,setcount]=useState(0);

  var increase=()=>{
    setcount(count+1);
  }

  var descrease=()=>{
    if(count>0){
    setcount(count-1);
    }
  }
return(

 <>
  <h1>Counter app</h1>
    <h2>{count}</h2>

    <button onClick={increase}>incre</button>
    <button onClick={descrease}>decea</button>
  </>
)
}

export default App
