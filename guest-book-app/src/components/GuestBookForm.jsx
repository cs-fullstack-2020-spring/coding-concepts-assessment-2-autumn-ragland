import React, { Component, Fragment } from 'react';
class GuessBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestName: "",
            guestNumber: "",
            guestResponse: "",
        }
    }

    handleChange = (event) => {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        if (inputName == "guestName") {
            this.setState({ [inputName]: inputValue })
        } else if (inputName == "guestNumber") {
            this.setState({ [inputName]: inputValue })
        } else if (inputName == "guestResponse") {
            this.setState({ [inputName]: inputValue })
        }
    }

    handleSubmission = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            guestName: "",
            guestNumber: "",
            guestResponse: "",
        })
    }

    render() {
        return (
            <div>
                <h1>Guest Book Form</h1>
                <form action="">
                    <fieldset>
                        <legend>Add A Guest</legend>

                        <div className="inputGroup">
                            <label htmlFor="guestName">Name : </label>
                            <input type="text" name="guestName" id="guestName" value={this.state.guestName} onChange={this.handleChange} />
                        </div>

                        <div className="inputGroup">
                            <label htmlFor="guestName">Number : </label>
                            <input type="tel" name="guestNumber" id="guestNumber" value={this.state.guestNumber} onChange={this.handleChange} />
                        </div>
                        <div className="inputGroup">
                            <label htmlFor="guestResponse">Registered : </label>
                            <select name="guestResponse" id="guestResponse" value={this.state.guestResponse} onChange={this.handleChange}>
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