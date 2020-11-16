import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const Review = ({ people, setPeople }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let autoSlider = setInterval(() => {
      if (index < people.length - 1) {
        setIndex(index + 1);
      } else if (index === people.length - 1) {
        setIndex(0);
      }
    }, 5000);
    return () => clearInterval(autoSlider);
  }, [index]);

  return (
    <div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          } else if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "prevSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}

        <button
          className="prev"
          onClick={() =>
            index === 0 ? setIndex(people.length - 1) : setIndex(index - 1)
          }
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() =>
            index === people.length - 1 ? setIndex(0) : setIndex(index + 1)
          }
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Review;
