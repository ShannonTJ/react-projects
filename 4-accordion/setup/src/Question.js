import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({id, title, info}) => {

  const [expandInfo, setExpandInfo] = useState(false);

  return (
  <article className='question'>
    <header>
        <h4>{title}</h4> 
        <button className='btn' onClick={()=>setExpandInfo(!expandInfo)}>
          {expandInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
    </header>
        <p>{expandInfo? info : ''}</p>

  </article>
  );
};

export default Question;
