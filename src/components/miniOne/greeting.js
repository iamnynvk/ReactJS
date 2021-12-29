import React, { Component } from "react";

export default class greeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: "nayan",
    };
  }

  render() {
    let time = new Date();
    time = time.getHours();
    let greeting = "";
    console.log(time);

    if (time >= 1 && time < 12) {
      greeting = "Good Morning";
    } else if (time >= 12 && time <= 19) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Night";
    }

    return (
      <div className="container">
        <h2>
          Hello {this.state.names}, {greeting}
        </h2>
      </div>
    );
  }
}
