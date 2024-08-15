import React, { Component } from 'react';

export default class BoxClass extends Component {
  constructor() {
    super();
    this.result = '';
    this.initImg = '';
  }

  getResult = () => {
    if (
      this.props.title === 'Computer' &&
      this.props.result !== 'tie' &&
      this.props.result !== ''
    ) {
      this.result = this.props.result === 'win' ? 'lose' : 'win';
    } else {
      this.result = this.props.result;
    }
  };

  getInitialImg = () => {
    this.initImg =
      this.props.title === 'You'
        ? 'https://i.pinimg.com/736x/1f/eb/8d/1feb8d4dfd096fedd1720cd4750975bc.jpg'
        : 'https://i.pinimg.com/736x/91/56/96/91569696ebf47731a10474f52d67096c.jpg';
  };

  render() {
    this.getResult();
    this.getInitialImg();
    return (
      <div className={`box ${this.result}`}>
        <h1>{this.props.title}</h1>
        <h2>{this.props.item && this.props.item.name}</h2>
        <img
          className='item-img'
          src={this.props.item ? this.props.item.img : this.initImg}
          alt={this.props.item && this.props.item.name}
        />
        <h2>{this.result}</h2>
      </div>
    );
  }
}
