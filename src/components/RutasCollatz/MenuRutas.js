import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-light">
      <div lass="container-fluid">
      <a class="navbar-brand" href="#">Menú</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item"><NavLink className={"nav-link"} to="/">Home</NavLink></li>
            <li class="nav-item"><NavLink className={"nav-link"} to="/collatz/9">Collatz 9</NavLink></li>
            <li class="nav-item"><NavLink className={"nav-link"} to="/collatz/35">Collatz 35</NavLink></li>
            <li class="nav-item"><NavLink className={"nav-link"} to="*">NoMap</NavLink></li>
        </ul>
        </div>
      </div>
      </nav>
    )
  }
}
