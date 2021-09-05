import React, { useState } from 'react';
import myData from './data';
import List from './List';
function App() {
  const [people,setPeople]=useState(myData);
  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people} />
      <button onClick={()=> setPeople([])}>
        Clear All
      </button>
    </section>
  </main>;
}

export default App;