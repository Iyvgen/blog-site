import React, { Component } from "react";

export default class Likes extends Component {
  state = {
    likes: 0,
  };
  handleClick = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };
  render() {
    return (
      <div>
        <button className="likes" onClick={this.handleClick}>
          Likes ♥️ {this.state.likes}
        </button>
      </div>
    );
  }
}
