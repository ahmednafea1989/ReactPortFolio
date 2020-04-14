import React, { Component } from "react";
import "./style.css";

class Contact extends Component {
    // Setting the component's initial state
    state = {
        name: "",
        email: "",
        texet: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.name} I will contact you soon `);
        this.setState({
            name: "",
            email: "",
            text:""
        });
    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <h1>Contact</h1>
                <form className="form">
                    <div>

                    <input className="name1"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder=" Your Name"
                        />
                        </div>
                        <br></br>
                    <div>

                    <input className="email"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Email"
                        />
                        </div>
                        <div>
                            <br></br>


                    <textarea className="text"
                        value={this.state.text}
                        name="text"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Type a message"
                        /> 
                        </div>
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
                    <br></br>
            </div>
        );
    }
}

export default Contact;