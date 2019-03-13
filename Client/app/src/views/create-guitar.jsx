import React, { Component } from "react";
import { Form, Button} from "react-bootstrap";

class CreateGuitar extends Component {
    render() {
        return (
            < div class="container mt-3 wrapper" >
                <h1 class="display-1 mb-5">Add guitar here</h1>
                <Form id="bdr" class="form">
                    <Form.Group id="modelName">
                        <Form.Label>Model name</Form.Label>
                        <Form.Control name="modelName"
                            placeholder="model name" />
                    </Form.Group>
                    <Form.Group id="price">
                        <Form.Label>price</Form.Label>
                        <Form.Control name="price"
                            type="price" placeholder="Enter price" />
                    </Form.Group>
                    <Form.Group id="head">
                        <Form.Label>Head(material)</Form.Label>
                        <Form.Control name="head"
                            type="head" placeholder="head" />
                    </Form.Group>
                    <Form.Group id="body">
                        <Form.Label>Body(material)</Form.Label>
                        <Form.Control name="body"
                            type="body" placeholder="body" />
                    </Form.Group>
                    <Form.Group id="neck">
                        <Form.Label>Neck(material)</Form.Label>
                        <Form.Control name="neck"
                            type="neck" placeholder="neck" />
                    </Form.Group>
                    <Form.Group id="adapters">
                        <Form.Label>Adapters</Form.Label>
                        <Form.Control name="adapters"
                            type="adapters" placeholder="adapters" />
                    </Form.Group>
                    <Button variant="outline-secondary" type="submit">
                        Add guitar
                    </Button>
                </Form>
            </div >
        )
    }
}

export default CreateGuitar;