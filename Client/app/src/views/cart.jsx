import React, { Component } from "react";

class Cart extends Component {

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

        return (
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
                        <tr>
                            <td data-th="Product">
                                <div className="row">
                                    <div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-responsive" /></div>
                                    <div className="col-sm-10">
                                        <h4 className="nomargin">Product 1</h4>
                                    </div>
                                </div>
                            </td>
                            <td data-th="Price">$1.99</td>
                            <td data-th="Quantity">
                                <input min="1" type="number" className="form-control text-center" />
                            </td>
                            <td data-th="Subtotal" className="text-center"></td>
                            <td className="actions" data-th="">
                                <button className="btn btn-danger btn-sm mt-4"><i className="fa fa-trash-o"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td data-th="Product">
                                <div className="row">
                                    <div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-responsive" /></div>
                                    <div className="col-sm-10">
                                        <h4 className="nomargin">Product 1</h4>
                                    </div>
                                </div>
                            </td>
                            <td data-th="Price">$1.99</td>
                            <td data-th="Quantity">
                                <input min="1" type="number" className="form-control text-center" />
                            </td>
                            <td data-th="Subtotal" className="text-center"></td>
                            <td className="actions" data-th="">
                                <button className="btn btn-danger btn-sm mt-4"><i className="fa fa-trash-o"></i></button>
                            </td>
                        </tr>
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
                            <td className="hidden-xs text-center"><strong>Total $1.99</strong></td>
                            <td><button type="submit" className="btn btn-success btn-block">Order <i className="fa fa-angle-right"></i></button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default Cart;