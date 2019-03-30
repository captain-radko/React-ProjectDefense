import React, { Component, Fragment } from "react";
import { UserConsumer } from "../context/auth-context";
import guitarService from "../services/guitar-service";
import GuitarToCart from "../components/guitar-to-cart";

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guitars: [],
            isRemoved: false
        }
    }

    removeGuitar = async (guitar) => {
        const isRemoved = await guitarService.removeFromCart(guitar);

        this.setState({
            isRemoved
        });

        this.componentDidMount();
    }

    onClick() {
        window.location.replace('http://localhost:3000/all');
    }

    render() {
        let wf = {
            width: '50%'
        }

        let wt = {
            width: '10%'
        }

        let we = {
            width: '8%'
        }

        let wtf = {
            width: '10%'
        }

        let float = {
            float: "left"
        }

        const { guitars } = this.state;
        const totalAmount = guitars
            .reduce(function (accumulator, guitar) {
                return accumulator + guitar.price;
            }, 0) || 0;

        return (
            <Fragment>
                {
                    !guitars.length
                        ?
                        <div>
                            <br />
                            <h2 className="text-center">No guitars in your cart!</h2>
                        </div>
                        :
                        <div className="container wrapper">
                            <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
                            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
                            <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
                            <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
                            <table id="cart" className="table table-hover table-condensed">
                                <thead>
                                    <tr>
                                        <th style={wf}>Product</th>
                                        <th style={wt}>Price</th>
                                        <th style={we}>Quantity</th>
                                        <th style={wtf}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        guitars.map(guitar => (
                                            <GuitarToCart key={guitar.id} guitar={guitar} removeGuitar={this.removeGuitar} />
                                        ))
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>
                                            <button
                                                style={float}
                                                type="submit"
                                                className="btn btn-warning"
                                                onClick={this.onClick}>
                                                <i className="fa fa-angle-left"></i> Continue Shopping
                                             </button>
                                        </td>
                                        <td colSpan="2" className="hidden-xs"></td>
                                        <td className="hidden-xs text-center"><strong>Total ${totalAmount.toFixed(2)}</strong></td>
                                        <td>
                                            <button type="submit" className="btn btn-success btn-block">
                                                Order <i className="fa fa-angle-right"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                }
            </Fragment>
        )
    }

    componentDidMount() {
        try {
            const guitars = JSON.parse(window.localStorage.getItem("guitars")) || [];

            if (guitars !== "null") {
                this.setState({ guitars });
            }

        } catch (error) {
            console.error(error);
        }
    }
}

const CartWithContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ username, id }) => (
                    <Cart {...props} username={username} user={{ id }} />
                )
            }
        </UserConsumer>
    )
}

export default CartWithContext;