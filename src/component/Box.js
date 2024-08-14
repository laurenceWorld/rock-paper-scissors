import React from 'react';

const Box = (props) => {
  // let result;
  // if (props.title === 'Computer' && props.result === 'win') {
  //   result = 'lose';
  // } else if (props.title === 'Computer' && props.result === 'lose') {
  //   result = 'win';
  // } else {
  //   result = 'tie';
  // }

  let result;
  if (
    props.title === 'Computer' &&
    props.result !== 'tie' &&
    props.result !== ''
  ) {
    // 카드가 computer 카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    result = props.result === 'win' ? 'lose' : 'win';
  } else {
    // 위의 경우가 아니라면 props&nbsp;로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }

  let initImg =
    props.title === 'You'
      ? 'https://i.pinimg.com/736x/1f/eb/8d/1feb8d4dfd096fedd1720cd4750975bc.jpg'
      : 'https://i.pinimg.com/736x/91/56/96/91569696ebf47731a10474f52d67096c.jpg';

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      <img
        className='item-img'
        src={props.item ? props.item.img : initImg}
        alt={props.item && props.item.name}
      />
      {/* <h2>{props.title === 'You' ? props.result : result}</h2> */}
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
