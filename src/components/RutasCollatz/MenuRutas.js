import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
        </ul>
        <ul>
            <li><NavLink to="/Collatz">Collatz</NavLink></li>
        </ul>
        <ul>
            <li><NavLink to="*">NoMap</NavLink></li>
        </ul>
      </div>
    )
  }
}
