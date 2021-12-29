import React, { Component } from "react";

// ----------------------

// Total 3 way to binding methord you can use it
// 1. onclick event to directly bind the methords --> [ this.eventHandler.bind(this) ]
// 2. you can write also in constuctor methord --> [ this.eventHandler = this.eventHandler.bind(this) ]
// 3. simple and smart ways that you can write any function thats make --> [ "arrow function use it " ] bcz arrow function is surrounding laxical scoop access

// 4rth is not way to binding methord but written syntax diffrent [ onClick = {() => this.eventHandler() }] - this is accetable

// ---------------------

// NOTE :
// apne aa 3 methord ne ek sathe pan lakhi sakiye chiye

export default class eventBinding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "hello ji!",
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = () => {
        this.setState({
            message: "I'm Master Student",
        });
        console.log(this); // aana thi aakhi eventhandler mali jase
    }

    render(props) {
        const { name } = this.props
        return (
            <div>
                <p>
                    {this.state.message} {name}
                </p>

                <button onClick={this.clickHandler.bind(this)}>Cliked Button</button> {/*  performance implication problem dont use it */}

                {/* <button onClick={this.clickHandler}>Cliked Button</button> */} {/*  approch 2 is best option and official documentation of react this is suggest */}

                {/* <button onClick={this.clickHandler}>Cliked Button</button> */} {/* approch 3 is best but experimental approch here */}


                {/* <button onClick={() => this.clickHandler()}>Cliked Button</button> */}

            </div>
        );
    }
}
