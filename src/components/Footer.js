import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <li className="footer-cont">Contact</li>
          <li className="footer-cont">About us</li>
        </div>
        <p>© Your Website 2022. All Rights Reserved.</p>
      </footer>
    );
  }
}
