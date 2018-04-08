import React from 'react';
import './Result.css';

class Result extends React.Component {
    
  render(){
    return (
      <tr className="Result">
        <td>{this.props.playerData.rank}</td>
        <td>{this.props.playerData.global_rank}</td>
        <td>{this.props.playerData.name}</td>
        <td>{this.props.playerData.kills}</td>
        <td>{this.props.playerData.deaths}</td>
        <td>{this.props.playerData.assists}</td>
        <td>{this.props.playerData.kill_death_ratio}</td>
        <td>{this.props.playerData.knockdowns}</td>
      </tr>
    );
  }
}

export default Result;