import React, { Component } from 'react';
class GuestBookList extends Component {
    // display a div with name and number of each guest that did not respond - passed down from parent via props
    render() {
        return (
            <div>
                <h1>Waiting For Response</h1>
                <div>
                    {
                        this.props.noResponseList.map((guest, index) => {
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
export default GuestBookList