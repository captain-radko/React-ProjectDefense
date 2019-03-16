import React, { Component } from "react";
import ListItem from "../components/list-item";
import getAllService from "../services/get-all-guitars";

class AllGuitars extends Component {
    constructor(props) {
        super(props);

        this.state = {
            guitars: null,
            render: false
        }

        this.fetchGuitars = this.fetchGuitars.bind(this);
    }

    componentDidMount() {
        this.fetchGuitars();
    }

    fetchGuitars() {
        getAllService.getAllGuitars()
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
                                    imageUrl={guitar.image}
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