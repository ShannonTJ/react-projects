import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

const [people, setPeople] = useState(data);

  function displayText(length) {
      if(length === 1) {
        return <h3>{length} birthday today</h3>;
      }
      else {
        return <h3>{length} birthdays today</h3>;
      }    
  }

  return (
  <main>
    <section className='container'>
      {displayText(people.length)}
      <List people={people} setPeople={setPeople}></List>
      <button className='btn' onClick={() => setPeople([])}>Clear All</button>
    </section>
    </main>
    );
}

export default App;
