import React, { Component } from "react";
import ListItem from "../components/list-item";
import guitarService from "../services/guitar-service";

class AllGuitars extends Component {
    constructor(props) {
        super(props);

        this.state = {
            guitars: [],
            render: false
        }

        this.fetchGuitars = this.fetchGuitars.bind(this);
        this.openGuitarDetails = this.openGuitarDetails.bind(this);
    }

    componentDidMount() {
        this.fetchGuitars();
    }

    fetchGuitars() {
        guitarService.getAllGuitars()
            .then(res => {
                if (res.status === 200) {
                    res.json()
                        .then(data => {
                            this.setState({ guitars: data, render: true });
                        });
                } else {
                    res.json()
                        .then(err => {
                            console.log(err.message);
                        })
                }
            })
    }

    openGuitarDetails(id){
        this.props.history.push(`/details/${id}`);
    }

    render() {

        return (
            < div className="container mt-3 wrapper" >
                <h1 className="display-3">Get your guitar today!</h1>
                {
                    this.state.render
                        ? this.state.guitars.map((guitar, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    itemId={guitar._id}
                                    guitarModelName={guitar.guitarModelName}
                                    imageUrl={guitar.image}
                                    openItemDetails={this.openGuitarDetails}
                                />
                            )
                        })
                        : < div className="container mt-3 wrapper" >Shop is empty, sorry</div>
                }
            </div >
        )
    }
}
export default AllGuitars;