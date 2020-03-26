import React, { Component, Fragment } from 'react';
class GuessBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestName: "",
            guestNumber: 0,
            guestResponse: "",
        }
    }

    handleChange = () => {
        console.log("called event handler");
    }

    render() {
        return (
            <div>
                <h1>Guest Book Form</h1>
                <form action="">
                    <fieldset>
                        <legend>Add A Guest</legend>

                        <div>
                            <label htmlFor="guestName">Name : </label>
                            <input type="text" name="guestName" id="guestName" value={this.state.guestName} onChange={this.handleChange} />
                        </div>

                        <div>
                            <label htmlFor="guestName">Number : </label>
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="guestNumber" id="guestNumber" value={this.state.guestNumber} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="guestResponse">Registered : </label>
                            <select name="guestResponse" id="guestResponse" value={this.state.guestResponse} onChange={this.handleChange}>
                                <option value="">--</option>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </div>

                    </fieldset>
                </form>
            </div>
        )
    }
}
export default GuessBookForm