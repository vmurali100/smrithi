import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div className="renault_nav">
          <a href="" className="logo">
            <Link to="/">
              <img src="image/logo.png" alt="" />
            </Link>
          </a>

          <div className="menu_desktop">
            <ul>
              <li>
                <Link to="/capture">Captur</Link>
              </li>
              <li>
                <a href="koleos.html">Koleos</a>
              </li>
              <li>
                <a href="megane.html">Megane R.S.</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="test-drive.html">Test drive</a>
              </li>
              <li>
                <a href="subscription.html">Subscription</a>
              </li>
              <li>
                <a href="pre-owned.html">Pre-owned</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
