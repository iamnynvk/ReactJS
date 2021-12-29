import React, { Component } from "react";
import RecordData from "./recordData";

class FormValidation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      message: "",
      topic: "",
    };

    // for binding the function for action
    // this.userNameChage = this.userNameChage.bind(this);
  }

  // perticular define a function and directily assign function an event
  userNameHandler = (event) => {
    this.setState({
      uname: event.target.value,
    });
  };

  messageHandler = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  topicHandler = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    let obj = {
      uname: this.state.uname,
      message: this.state.message,
      topic: this.state.topic,
    };

    console.log(obj);
  };

  render() {
    const { uname, message, topic } = this.state;
    return (
      <div className="container my-3">
        <h3>User Registration Form</h3>
        <hr />
        <br />
        <form onSubmit={this.submitForm}>
          <label>Username : </label>
          <input type="text" onChange={this.userNameHandler} />
          <br />
          <br />

          <label>Message : </label>
          <textarea onChange={this.messageHandler} />
          <br />
          <br />

          <label>Topic</label>
          <select  onChange={this.topicHandler}>
            <option value="noselect">No Select</option>
            <option value="reactjs">React JS</option>
            <option value="reactnative">React Native</option>
            <option value="flutter">Flutter</option>
            <option value="nodejs">Node JS</option>
          </select>
          <br />
          <br />

          <input type="submit" />
        </form>

        <h3>Records</h3>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Message</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.uname}</td>
              <td>{this.state.message}</td>
              <td>{this.state.topic}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default FormValidation;
