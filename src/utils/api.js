import players from '../Data/players'

const playerData = [];
const host = 'https://pubg.op.gg/api/users/';
const season = '2018-04';
const server = 'eu';
const squad = '4';
const mode = 'tpp'
const query = `season=${season}&server=${server}eu&queue_size=${squad}&mode=${mode}`;
const headers = {
  'Accept': 'application/vnd.api+json',
};

const PUBG = {
  getPlayerData(){
    for (let i = 0; i < players.length; i++) {
      let url = `${host}${players[i].id}/ranked-stats?${query}`;
 
      fetch(url, {headers: headers, method: 'GET'})
        .then(response => response.json())
        .then(data => {

        playerData.push( {
          player_id: players[i].id,
          player_name: players[i].name,
          matches_cnt: data.stats.matches_cnt,
          win_matches_cnt: data.stats.win_matches_cnt,
          topten_matches_cnt: data.stats.topten_matches_cnt,
          kills_sum: data.stats.kills_sum,
          kills_max: data.stats.kills_max,
          assists_sum: data.stats.assists_sum,
          headshot_kills_sum: data.stats.headshot_kills_sum,
          deaths_sum: data.stats.deaths_sum,
          longest_kill_max: data.stats.longest_kill_max,
          rank_avg: data.stats.rank_avg,
          damage_dealt_avg: data.stats.damage_dealt_avg,
          time_survived_avg: data.stats.time_survived_avg,
          stats_rating: data.stats.rating,
          ranks_rating: data.ranks.rating,
          max_rating: data.max_ranks.rating,
          grade: data.grade,
        })
      })
      .catch(error => console.error(error))
    }
  }
}
export default PUBG;