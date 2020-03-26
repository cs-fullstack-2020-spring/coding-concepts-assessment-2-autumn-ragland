import React, { Component, Fragment } from 'react';
import GuessBookForm from './GuestBookForm';
import GuestBookList from './GuestBookList';
import GuestBookListRSVP from './GuestBookListRsvp';
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseList: [],
            noResponseList: [],
            
        }
    }

    componentDidMount() {
        this.state.responseList.push({
            name: "autumn",
            number: 9011234567,
        })
        this.setState({responseList : this.state.responseList})

        this.state.noResponseList.push({
            name: "adam",
            number: 9019876543,
        })
        this.setState({noResponseList : this.state.noResponseList})
    }

    render() {
        return (
            <Fragment>
                <h1>Guest Book Manager</h1>
                <div className="guestBookGrid">
                    <GuessBookForm className="formChild" />
                    <GuestBookList  noResponseList={this.state.noResponseList} className="listChild" />
                    <GuestBookListRSVP responseList={this.state.responseList} className="rsvpChild" />
                </div>
            </Fragment>
        )
    }
}
export default AppContainer