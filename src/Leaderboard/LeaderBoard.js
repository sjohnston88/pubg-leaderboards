import React from 'react';
import './LeaderBoard.css';

import Result from '../Result/Result';

class LeaderBoard extends React.Component {
  render(){
    return (
      <table className="LeaderBoard">
        <tr className="TableHeader">
          <td>RANK</td>
          <td>GLOBAL RANK</td>
          <td>NAME</td>
          <td>KILLS</td>
          <td>DEATHS</td>
          <td>ASSISTS</td>
          <td>K:D</td>
          <td>KNOCKDOWNS</td>
        </tr>
        {
          this.props.playerData.map(playerData => {
            return <Result playerData={playerData} key={playerData.id} />
          })
        }
      </table>
    );
  }
}

export default LeaderBoard;