import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const randomNumber = () => {
    let randomNum = Math.floor(Math.random()*people.length);

    if(randomNum === index) { randomNum = index + 1;}
    if(randomNum >= people.length) { randomNum = 0; }

    return randomNum;
  }

  return (
    <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img'/>
          <span className='quote-icon'>
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        <div className="button-container">
          <button className='prev-btn' onClick={()=> index === 0 ? setIndex(people.length-1) : setIndex(index-1)}>
            <FaChevronLeft></FaChevronLeft>
          </button>
          <button className='next-btn' onClick={()=> index === people.length-1 ? setIndex(0) : setIndex(index+1)}>
            <FaChevronRight></FaChevronRight>
          </button>

        </div>

          <button className='random-btn' onClick={()=> setIndex(randomNumber)}>
            Random Review
          </button>  
    </article>
  );
};

export default Review;
