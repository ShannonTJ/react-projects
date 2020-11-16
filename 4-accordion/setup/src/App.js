import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import SingleQuestion from "./Question";

function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers About Login</h3>
        <section className="info">
          {data.map((d) => {
            return <SingleQuestion key={d.id} {...d}></SingleQuestion>;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
