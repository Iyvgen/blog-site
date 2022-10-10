import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="elements-footer">
            <div>
              <br />
              <li className="footer-cont">Contact</li>
              <li className="footer-cont">About us</li>
            </div>
            <div>
              <br />
              <li>facebook</li>
              <li>twitter</li>
              <li>telegram</li>
            </div>
          </div>
          <p>© Your Website 2022. All Rights Reserved.</p>
        </div>
      </>
    );
  }
}
