import React, { Component } from 'react';
import _ from 'lodash';
import './app.css';

class App extends Component {
  render() {
    const lorem1 = _.times(15000, () => _.random(0, 1));
    const lorem2 = _.times(15000, () => _.random(0, 1));
    return (
      <div className="app-container">
        <div className="app-content">
          <h1 className="app-title">Hi, I'm <span>@paulrrdiaz</span> and I'm working on this, my portfolio, right now, sorry {":'("}</h1>
          <h2 className="app-subtitle">
            in the meantime, you can check out my
            {" "}
            <a href="https://github.com/paulrrdiaz" target="_blank">Github</a>,
            {" "}
            <a href="https://www.linkedin.com/in/paulrrdiaz" target="_blank">Linkedin</a> or
            {" "}
            <a href="https://twitter.com/paulrrdiaz" target="_blank">Twitter</a>
          </h2>
          <h3 className="app-bullshit">If you find something interesting, please let me know, I've been looking for that for a while...</h3>
        </div>
        <div className="code code-1"><p>{lorem1}</p></div>
        <div className="code code-2"><p>{lorem2}</p></div>
      </div>
    );
  }
}

export default App;
