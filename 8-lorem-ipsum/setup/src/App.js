import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let paragraphs = parseInt(count);

    if (count < 1) {
      paragraphs = 1;
    } else if (count > data.length) {
      paragraphs = data.length;
    }

    setText(data.slice(0, paragraphs));
  };

  return (
    <section className="section-center">
      <h3>Tired of Boring Lorem Ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="paragraphs">Paragraphs:</label>
        <input
          type="number"
          name="paragraphs"
          id="paragraphs"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        ></input>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
