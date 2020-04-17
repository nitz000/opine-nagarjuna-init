import React, { Component } from "react";

export default class ViewLeadBtn extends Component {
  render() {
    return (
      <span>
        <button
          style={{ height: 20, lineHeight: 0.5 }}
          className="btn btn-info"
        >
          Invoke Parent
        </button>
      </span>
    );
  }
}
