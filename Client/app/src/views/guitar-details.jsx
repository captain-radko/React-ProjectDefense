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
        let img = {
            width: '600px',
            height: '600px'
        }

        return (
            < div className="container mt-3 wrapper" >
                {
                    this.state.isLoading
                        ?
                        <Fragment>
                            <span>Loading...</span>
                        </Fragment>
                        :
                        <Fragment>
                            <div className="row mt-5">
                                <div className="col-md-5 mt-5">
                                    <img style={img} src={this.state.guitar.image} alt="" />
                                </div>
                                <div className="col-md-7 mt-5">
                                    <table className="table table-striped">
                                        <tbody>
                                            <tr>
                                                <td>Model Name</td>
                                                <td>{this.state.guitar.guitarModelName}</td>
                                            </tr>
                                            <tr>
                                                <td>Head</td>
                                                <td>{this.state.guitar.head}</td>
                                            </tr>
                                            <tr>
                                                <td>Body</td>
                                                <td>{this.state.guitar.body}</td>
                                            </tr>
                                            <tr>
                                                <td>Neck</td>
                                                <td>{this.state.guitar.neck}</td>
                                            </tr>
                                            <tr>
                                                <td>Pickups</td>
                                                <td>{this.state.guitar.pickups}</td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>{this.state.guitar.price}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <button type="button" className="mt-5 btn btn-secondary btn-lg btn-block">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </Fragment>
                }
            </div >
        )
    }
}
export default GuitarDetails;