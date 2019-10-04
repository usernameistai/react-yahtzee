import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  static defaultProps = {
    numberWords:["one", "two", "three", "four", "five", "six"],
    val: 5
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() { // defining handleClick directly on the die component different to this.props.handleClick in game component
    this.props.handleClick(this.props.idx);
  }
  
  render() {
    const { numberWords, locked, val, disabled, rolling } = this.props;
    let classes = ` Die fas fa-dice-${ // always leave space aorund back ticks
      numberWords[val - 1]} fa-5x `;
    if (locked) classes += "Die-locked ";
    if (rolling) classes += "Die-rolling ";
    return (
      <i className={classes} onClick={this.handleClick} disabled={disabled} />
        /* Don't want to use arrow function inside render as will create 
        a new function each time, better to create something before anything
        rendered, was {() => this.props.handleClick(idx)}*/
    );
  }
}

export default Die;
