'use strict';

import React from 'react';

export default class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayName: null,
      userPhoto: null,
      raceResults: []
    }
  }

  componentDidMount() {
    this.getUserData();
    this.getRaceResults();
  }

  getUserData() {
    $.get('/username')
      .done((res) => {
        // allow all components access to current user name
        window.currentUser = res.displayName;
        this.setState({
          displayName: res.displayName,
          userPhoto: res.photos[0].value
        });
      });
  }

  getRaceResults() {
    $.post('/loadRaceResults')
      .done((res) => {
        this.setState({
          raceResults: res
        });
      });
  }

  render() {
    return (
      <div>

        <div className="text-center">
          <img className="img-circle" src={this.state.userPhoto}/>
          <span><h1>Welcome {this.state.displayName}</h1></span>
        </div>

        <h4>
          Recent race results:
        </h4>
        <div>
          {
            <table>
              <tbody>
                <tr>
                  <th>Race</th>
                  <th>Winner</th>
                  <th>Duration</th>
                </tr>
                {this.state.raceResults.map((race) =>
                  <tr>
                    <td>{race.title}</td>
                    <td>{race.winner}</td>
                    <td>{race.time}</td>
                  </tr>
                )}
              </tbody>
            </table>
          }
        </div>

      </div>
    );
  }
}
