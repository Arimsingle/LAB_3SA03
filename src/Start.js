import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './Start.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'

function Start() {

  return (
    <div className="one">
      <div className="row">
        <h1 className="text-head">Let's play my first game on react</h1>
        <div><h1 className="color">(js)</h1></div>
      </div>
      <div className="two">
        <div className="three">
        <ul>
                    <li><Link to="/react">React</Link></li>
                </ul>
        </div>

      </div>

    </div>



  );
}
export default Start;
