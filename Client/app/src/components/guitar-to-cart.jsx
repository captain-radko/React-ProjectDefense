import React, { Component } from 'react';

class GuitarToCart extends Component {

    remove = () => {
        const { guitar } = this.props;
        this.props.removeGuitar(guitar)
    }
    render() {

        const { guitar } = this.props;

        return (
            <tr>
                <td data-th="Product">
                    <div className="row">
                        <div className="col-sm-2 hidden-xs">
                            <img src="http://placehold.it/100x100" alt="..." className="img-responsive" />
                        </div>
                        <div className="col-sm-10">
                            <h4 className="nomargin">{guitar.guitarModelName}</h4>
                        </div>
                    </div>
                </td>
                <td data-th="Price">{guitar.Price}</td>
                <td data-th="Quantity">
                    <input min="1" type="number" className="form-control text-center" />
                </td>
                <td data-th="Subtotal" className="text-center"></td>
                <td className="actions" data-th="">
                    <button className="btn btn-danger btn-sm mt-4"><i className="fa fa-trash-o"></i></button>
                </td>
            </tr>
        );
    }
};

export default GuitarToCart;