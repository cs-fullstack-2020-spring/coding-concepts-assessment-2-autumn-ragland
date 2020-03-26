import React, { Component } from 'react';
class GuestBookListRSVP extends Component {
    // display a div with name and number of each guest that did not respond - passed down from parent via props
    render() {
        return (
            <div>
                <h1>RSVP-ed</h1>
                <div>
                    {
                        this.props.responseList.map((guest, index) => {
                            return (
                                <div key={index}>
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