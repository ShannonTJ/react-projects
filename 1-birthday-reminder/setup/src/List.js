import React from 'react';

const List = ({people, setPeople}) => {

  function removePerson(id) {
    setPeople(people.filter((p) => p.id !== id));
  }

  return (
    <>
     {people.map((p) => {
       const {id, name, age, image} = p;
       return <article key={id} className='person'> 
       <img src={image} alt={name} /> 

       <div className='outer'> 
         <h4 className='inner'>{name}</h4> 
         <button className='inner' onClick={() => removePerson(p.id)}>Remove</button>
         <p>{age} years</p>
        </div>

     </article> 
    })}
    </>
  );
};

export default List;
