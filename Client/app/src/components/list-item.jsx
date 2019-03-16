import React, { Fragment } from "react";

const ListItem = (props) => {
    return (
        <div className="container mt-3 wrapper">
            <img src={props.imageUrl} alt=""/>
            <Fragment>
                <button onClick={() => props.openItemDetails(props.itemId)} className="btn btn-outline-secondary">Details</button>
            </Fragment>
        </div>
    );
};

export default ListItem;