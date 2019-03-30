import React, { Fragment } from "react";
import { UserConsumer } from "../context/auth-context";

const ListItem = (props) => {
    let width = {
        width: '18rem'
    }

    let img = {
        width: '286px',
        height: '286px'
    }

    return (
        <UserConsumer>
            {
                ({ isAdmin }) => (
                    <div className="col-md-12 col-lg-6 col-xl-4">
                        <div className="card border-secondary mt-5" style={width}>
                            <img style={img} src={props.imageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{props.guitarModelName}</h5>
                                {
                                    isAdmin
                                        ?
                                        <Fragment>
                                            <button onClick={() => props.addToCart(props.itemId)} className="mr-1 btn btn-outline-secondary">Buy</button>
                                            <button onClick={() => props.openItemDetails(props.itemId)} className="mr-1 btn btn-outline-secondary">Details</button>
                                            <button onClick={() => props.openItemEdit(props.itemId)} className="mr-1 btn btn-outline-warning">Edit</button>
                                            <button onClick={() => props.openItemDelete(props.itemId)} className="mt-1 btn btn-outline-danger">Delete</button>
                                        </Fragment>
                                        :
                                        <Fragment>
                                            <button onClick={() => props.openItemDetails(props.itemId)} className="btn btn-outline-secondary">Details</button>
                                        </Fragment>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </UserConsumer>
    );
};

export default ListItem;