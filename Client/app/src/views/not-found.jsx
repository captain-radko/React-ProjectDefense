import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class NotFound extends Component {
    render() {
        return (
            <div class="container mt-3">
                <Jumbotron>
                    <h1>Nice we have an error!</h1>
                    <p>
                        If you keep seeing this message, please contact the admins.
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default NotFound;