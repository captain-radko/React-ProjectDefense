import React, { Component, Fragment } from "react";
import guitarService from '../services/guitar-service';

class GuitarDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            guitar: [],
            isLoading: true
        }
    }

    componentWillMount() {
        guitarService.getGuitarById(this.props.match.params.guitarId)
            .then(res => {
                if (res.status === 200) {
                    res.json().then(data => {
                        this.setState({ guitar: data.result, isLoading: false });
                    });
                } else {
                    res.text().then(err => {
                        console.log(err.message)
                    });
                }
            });
    }

    render() {

        return (
            < div className="container mt-3 wrapper" >
                {
                    this.state.isLoading
                        ?
                        <Fragment>
                            <div className="spinner-border mt-5" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </Fragment>
                        :
                        <Fragment>
                            <img src={this.state.guitar.image} alt="" />
                            <br />
                            <label>Model Name:</label>
                            <span> {this.state.guitar.guitarModelName}</span>
                            <br />
                            <label>Head:</label>
                            <span> {this.state.guitar.head}</span>
                            <br />
                            <label>Body:</label>
                            <span> {this.state.guitar.body}</span>
                            <br />
                            <label>Neck:</label>
                            <span> {this.state.guitar.neck}</span>
                            <br />
                            <label>Pickups:</label>
                            <span> {this.state.guitar.pickups}</span>
                            <br />
                            <label>Price:</label>
                            <span> {this.state.guitar.price}$</span>
                            <br />
                        </Fragment>
                }
            </div >
        )
    }
}
export default GuitarDetails;