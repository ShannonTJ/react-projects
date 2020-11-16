import React, { useState } from "react";
import Title from "./Title";
import Review from "./Review";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <section className="section">
      <Title text="Reviews"></Title>
      <Review people={people} setPeople={setPeople}></Review>
    </section>
  );
}

export default App;
