import React, { Component } from "react";


export default class textForm extends Component {
  constructor() {
    super();
    this.state = {
      textArea: "",
      lower : ""
    };
  }

  SubmitHandler = (e) => {
    e.preventDefault();
    let upper = e.target.area.value;
    let newText = upper.toUpperCase();

    let lowers = e.target.area.value;
    let againNew = lowers.toLowerCase();

    this.setState({
      textArea : newText,
      lower : againNew,
    },()=>{
      console.log(this.state.textArea)
      console.log(this.state.lower);
    })
  };

  handleOnChnage = (e) => {
    this.setState(
      {
        textArea: e.target.value,
        lower : e.target.value,
      },
    );
    
  };

  render() {
    return (
      <div className="container">
        <div className="form-group" className="forms">
          <form onSubmit={this.SubmitHandler} className="forms">
            <label htmlFor="area">
              <h3 className="my-4">Enter the Text you analysis</h3>
            </label>
            <textarea
              className="form-control"
              placeholder="Enter the text"
              id="area"
              rows="8"
              onChange={this.handleOnChnage}
              value={this.state.textArea}
            ></textarea>

            <button type="submit" className="btn btn-primary my-3">
             
              Submit
            </button>
          </form>
        </div>

        <div>
          <h2>Text Summery</h2>
          <p> {this.state.textArea.split(" ").length} words and {this.state.textArea.length}  characters</p>

          <h2>Time to read</h2>
          <p>{(0.008 * (this.state.textArea).split(" ").length)}</p>

          <h2>Previous</h2>
          <p>{this.state.textArea}</p>
          <p>{this.state.lower}</p>

        </div>
      </div>
    );
  }
}
