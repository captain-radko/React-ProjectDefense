import React from 'react';

const Footer = () => {
    return (
        <footer bg="light" className="container-fluid">
            <div className="container">
                <h6 className="mt-3">Stringify - Guitar Shop {new Date().getFullYear()}</h6>
            </div>
        </footer>
    )
}

export default Footer;
