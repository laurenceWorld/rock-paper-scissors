import React from 'react';

const Box = (props) => {
  console.log(props);

  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img
        className='item-img'
        src={props.item && props.item.img}
        alt='scissors'
      />
      <h2>{props.title}</h2>
    </div>
  );
};

export default Box;
