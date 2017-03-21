'use strict';

import React from 'react';



export default class LoadRace extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      start: null,
      finish: null,
      checkpoints: [],
      searchData: null
    }
  }

  startRace() {
    $.post('/SaveRace', this.state, (something) => {
      console.log('something ', something);
    });
  }

  updateTitle(e) {
    let title = e.target.value;
    this.setState({
      title: title
    });
  }

  render() {
    return (
      <div>

        <h1 className="text-center"> Load a Race</h1>

        <div className="text-center">
          <div>
            Start: {this.state.start} <br/>
            Checkpoints {this.state.checkpoints} <br/>
            Finish: {this.state.finish} <br/>
            Current Search: {this.state.searchData}
          </div>
        </div>
      </div>
    );
  }
}
