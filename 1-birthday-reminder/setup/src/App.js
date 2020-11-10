import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

const [people, setPeople] = useState(data);

  return (
  <main>
    <section className='container'>
      <h3>{people.length === 1? people.length + ' birthday today' : people.length + ' birthdays today'}</h3>
      <List people={people} setPeople={setPeople}></List>
      <button className='btn' onClick={() => setPeople([])}>Clear All</button>
    </section>
    </main>
    );
}

export default App;
