import React, { Fragment } from "react";
import Auth from '../utils/auth';

const ListItem = (props) => {
    let width = {
        width: '18rem'
    }

    let img ={
        width: '286px',
        height: '286px'
    }

    const isAdmin = Auth.isUserAdmin

    return (
        <div className="col-md-12 col-lg-6 col-xl-4">
            <div className="card mt-5" style={width}>
                <img style={img} src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.guitarModelName}</h5>
                    {
                        isAdmin
                            ?
                            <Fragment>
                                <button onClick={() => props.openItemDetails(props.itemId)} className="mr-1 btn btn-outline-secondary">Details</button>
                                <button onClick={() => props.openItemEdit(props.itemId)} className="mr-1 btn btn-outline-warning">Edit</button>
                                <button onClick={() => props.openItemDelete(props.itemId)} className="btn btn-outline-danger">Delete</button>
                            </Fragment>
                            :
                            <Fragment>
                                <button onClick={() => props.openItemDetails(props.itemId)} className="btn btn-outline-secondary">Details</button>
                            </Fragment>
                    }
                </div>
            </div>
        </div>
    );
};

export default ListItem;