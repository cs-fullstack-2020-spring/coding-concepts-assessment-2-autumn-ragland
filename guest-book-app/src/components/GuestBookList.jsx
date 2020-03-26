import React, {Component} from 'react';
class GuestBookList extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1>Waiting For Response</h1>
                <div>
                    {
                        this.props.noResponseList.map((guest, index) => {
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
export default GuestBookList