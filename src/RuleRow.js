import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {
  render() {
    const {score, name, doScore, description} = this.props; // const score = this props.score etc below
    const disabled = score === undefined; // = this.props.score !== undefined;
    return (
      <tr 
        className={`RuleRow RuleRow-${disabled ? "active" : "disabled"}`}
        onClick={disabled ? doScore : null}> 
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{!disabled ? score : description}</td>
      </tr>
    )
  }
}

export default RuleRow;