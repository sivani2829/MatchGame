import {Component} from 'react'

import './index.css'

const NavBar = props => {
  const {ti, sc} = props
  return (
    <nav className="nav-container">
      <ul className="nav-container">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo-nav"
          />
        </li>
        <li className="list-space">
          <div className="score-details">
            <p className="score-para">
              score:<span className="score">{sc}</span>
            </p>

            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-img"
            />

            <p className="timer-count">{ti} sec</p>
          </div>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar
