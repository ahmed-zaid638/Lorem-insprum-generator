import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [count , setcount] = useState(0)
  const [text , settext]  =useState([])
  
const handelSubmit =(e) => {
  e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    settext(data.slice(0, amount));
}

  return (
    <section className='lorem'>
        <h2>Lorem insprum project</h2>
        <form onSubmit={handelSubmit }  className="form">
        <label htmlFor="amount">Create Pragraphs</label>
        <input type="number" onChange={(e)=>  setcount((e.target.value))} id="amount" />
        <button  className='btn'>Generate</button>
        </form>
       <div className='lorem-text'> {text.map(text => <div className='text'>{text}</div>)}</div>
    </section>

    )

}

export default App;
















