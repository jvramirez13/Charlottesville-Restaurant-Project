import React from "react";
import "./Title.css";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
