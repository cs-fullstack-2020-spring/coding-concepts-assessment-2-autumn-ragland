import React, { Component, Fragment } from 'react';
import GuessBookForm from './GuestBookForm';
import GuestBookList from './GuestBookList';
import GuestBookListRSVP from './GuestBookListRsvp';
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <h1>Guest Book Manager</h1>
                <div className="guestBookGrid">
                    <GuessBookForm className="formChild" />
                    <GuestBookList className="listChild" />
                    <GuestBookListRSVP className="rsvpChild" />
                </div>
            </Fragment>
        )
    }
}
export default AppContainer