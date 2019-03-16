import React, { Fragment } from "react";

const ListItem = (props) => {
    let width = {
        width: '18rem'
    }

    return (
        <div className="container mt-3 wrapper">
            <div className="card" style={width}>
                <img src={props.imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.guitarModelName}</h5>
                    <Fragment>
                        <button onClick={() => props.openItemDetails(props.itemId)} className="btn btn-outline-secondary">Details</button>
                    </Fragment>
                </div>
            </div>
        </div>
    );
};

export default ListItem;