import React, { Component } from 'react';
class GuestBookListRSVP extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>RSVP-ed</h1>
                <div>
                    {
                        this.props.responseList.map((guest, index) => {
                            return (
                                <div key = {index}>
                                    <p>Name : {guest.name}</p>
                                    <p>Number : {guest.number}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default GuestBookListRSVP