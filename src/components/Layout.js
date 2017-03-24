'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img src="img/logo.jpg" alt="" />
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="home">Home</a>
                        </li>
                        <li>
                            <a href="CreateRace">Create Race</a>
                        </li>
                        <li>
                            <a href="LoadRace">Load Race</a>
                        </li>
                        <li>
                            <a href="RunRace">Run Race</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div>{this.props.children}</div>

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                </div>
            </div>
        </div>
    </div>
    );
  }
}
