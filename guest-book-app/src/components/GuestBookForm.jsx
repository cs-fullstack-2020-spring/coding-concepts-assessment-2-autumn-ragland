import React, { Component } from 'react';
class GuessBookForm extends Component {
    constructor(props) {
        super(props);
        // set initial state for form fields
        this.state = {
            guestName: "",
            guestNumber: "",
            guestResponse: "",
        }
    }

    // event handler for form fields
    handleChange = (event) => {
        // variables to hold properties of event.target
        let inputName = event.target.name; // name of form field
        let inputValue = event.target.value; // value of form field
        // conditionally update property of state to value of form field based on name of form field (form field name and prop of state name match)
        if (inputName === "guestName") {
            this.setState({ [inputName]: inputValue })
        } else if (inputName === "guestNumber") {
            this.setState({ [inputName]: inputValue })
        } else if (inputName === "guestResponse") {
            this.setState({ [inputName]: inputValue })
        }
    }

    // event handler for form submission
    handleSubmission = (event) => {
        event.preventDefault(); // keep form from reloading
        // console.log(this.state); // check form values
        // clear form values
        this.setState({
            guestName: "",
            guestNumber: "",
            guestResponse: "",
        })
        // define variable for boolean value to send to parent
        let hasResponded;
        // set value of boolean variable from form submission string value
        this.state.guestResponse === "true" ? hasResponded = true : hasResponded = false
        // call back function from parent - pass form values and boolean value
        this.props.formSubmission({ name: this.state.guestName, number: this.state.guestNumber }, hasResponded)
    }

    // display title and form with three fields and submit button
    render() {
        return (
            <div>
                <h1>Guest Book Form</h1>
                <form action="">
                    <fieldset>
                        <legend>Add A Guest</legend>

                        <div className="inputGroup">
                            <label htmlFor="guestName">Name : </label>
                            <input type="text" name="guestName" id="guestName" value={this.state.guestName} onChange={this.handleChange} required />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="guestName">Number : </label>
                            <input type="tel" name="guestNumber" id="guestNumber" value={this.state.guestNumber} onChange={this.handleChange} required />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="guestResponse">Registered : </label>
                            <select name="guestResponse" id="guestResponse" value={this.state.guestResponse} onChange={this.handleChange} required>
                                <option value="">--</option>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        <button onClick={this.handleSubmission}>Add Guest!</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default GuessBookForm