import React, { Component, Fragment } from 'react';
import GuessBookForm from './GuestBookForm';
import GuestBookList from './GuestBookList';
import GuestBookListRSVP from './GuestBookListRsvp';
class AppContainer extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            responseList: [], // array to hold form responses for RSVP
            noResponseList: [], // array to hold form responses for no RSVP
        }
    }

    // test mapping in child components without form by adding mock data to arrays
    // componentDidMount() {
    //     this.state.responseList.push({
    //         name: "autumn",
    //         number: 9011234567,
    //     })
    //     this.setState({responseList : this.state.responseList})

    //     this.state.noResponseList.push({
    //         name: "adam",
    //         number: 9019876543,
    //     })
    //     this.setState({noResponseList : this.state.noResponseList})
    // }

    // function to check if guest has RSVP-ed when form is submitted - called by form child component
    formSubmission = (guest, hasResponded) => {

        // test params by printing to console
        // console.log(guest);
        // console.log(isRegistered);

        // if guest has responded called addToResponseList method, if guest has not responded call addToNoResponseList
        hasResponded ? this.addToResponseList(guest) : this.addToNoResponseList(guest)
    }

    // called from formSubmission method
    addToResponseList = (guest) => {
        // add guest to responseList (property of state)
        this.state.responseList.push(guest);
        // set state globally
        this.setState({ responseList: this.state.responseList })
    }

    // called from formSubmission method
    addToNoResponseList = (guest) => {
        // add guest to noResponseList (property of state)
        this.state.noResponseList.push(guest);
        // set state globally
        this.setState({ noResponseList: this.state.noResponseList })
    }

    // display title, form for adding guest, and two lists (3 columns)
    render() {
        return (
            <Fragment>
                <h1>Guest Book Manager</h1>
                <div className="guestBookGrid">
                    <GuessBookForm formSubmission={this.formSubmission} className="formChild" />
                    <GuestBookList noResponseList={this.state.noResponseList} className="listChild" />
                    <GuestBookListRSVP responseList={this.state.responseList} className="rsvpChild" />
                </div>
            </Fragment>
        )
    }
}
export default AppContainer;