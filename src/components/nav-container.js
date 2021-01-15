import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class NavContainer extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="dis">
          <h2>Discriptive Logo</h2>
        </div>
        <div className="links">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/about-me" activeClassName="nav-link-active">
              About
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/contact" activeClassName="nav-link-active">
              Contact
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/blog" activeClassName="nav-link-active">
              Blog
            </NavLink>
          </div>
        </div>
        <div>
          <h2>UserName</h2>
        </div>
      </div>
    )
  }
}
