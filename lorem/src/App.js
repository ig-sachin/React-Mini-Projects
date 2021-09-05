import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(amount<0){
      setText(data.slice(0,1));
    } else if(amount>=data.length){
      setText(data.slice(0,));
    }
    else {
      setText(data.slice(0,amount));
    }
  }
  return (
    <section className="section-center">
      <h3>Tired of Boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" name="amount" id="amount" value={count}
          onChange={(er) => setCount(er.target.value)} />
        <button type="submit" className="btn">genrate</button>
      </form>
      <article className="lorem-text">
        {text.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;