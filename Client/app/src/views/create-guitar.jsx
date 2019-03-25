import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import CreateGuitarService from "../services/create-guitar-service";

class CreateGuitar extends Component {
    static service = new CreateGuitarService();

    state = {
        guitarModelName: '',
        price: '',
        head: '',
        body: '',
        neck: '',
        pickups: '',
        image: '',
        video: '',
        error: '',
    };

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        })
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { guitarModelName, price, head, body, neck, pickups, image, video } = this.state;

        const credentials = {
            guitarModelName,
            price,
            head,
            body,
            neck,
            pickups,
            image,
            video
        }

        this.setState({
            error: '',
        }, async () => {
            try {
                const result = await CreateGuitar.service.create(credentials);

                if (!result.success) {
                    const errors = Object.values(result.errors).join('\n');

                    throw new Error(errors);
                }

                window.location.replace('http://localhost:3000/all');

            } catch (error) {
                this.setState({
                    error: error.message,
                })
            }
        })
    };

    render() {
        const { guitarModelName, price, head, body, neck, pickups, image, error, video } = this.state;

        return (
            < div className="container mt-3 wrapper" >
                <h1 className="display-1 mb-5">Add guitar here</h1>
                {
                    error.length
                        ?
                        <Alert dismissible className="alert" variant="danger">
                            {error}
                        </Alert>
                        : null
                }
                <Form onSubmit={this.handleSubmit} id="bdr" className="form">
                    <Form.Group id="guitarModelName">
                        <Form.Label>Model name</Form.Label>
                        <Form.Control
                            name="guitarModelName"
                            placeholder="model name"
                            type='text'
                            onChange={this.handleChange}
                            value={guitarModelName}
                        />
                    </Form.Group>
                    <Form.Group id="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            name="price"
                            type="number"
                            min='100'
                            placeholder="Enter price"
                            onChange={this.handleChange}
                            value={price}
                        />
                    </Form.Group>
                    <Form.Group id="head">
                        <Form.Label>Head(material)</Form.Label>
                        <Form.Control
                            name="head"
                            type="text"
                            placeholder="head"
                            onChange={this.handleChange}
                            value={head}
                        />
                    </Form.Group>
                    <Form.Group id="body">
                        <Form.Label>Body(material)</Form.Label>
                        <Form.Control
                            name="body"
                            type="text"
                            placeholder="body"
                            onChange={this.handleChange}
                            value={body}
                        />
                    </Form.Group>
                    <Form.Group id="neck">
                        <Form.Label>Neck(material)</Form.Label>
                        <Form.Control
                            name="neck"
                            type="text"
                            placeholder="neck"
                            onChange={this.handleChange}
                            value={neck}
                        />
                    </Form.Group>
                    <Form.Group id="pickups">
                        <Form.Label>Pickups</Form.Label>
                        <Form.Control
                            name="pickups"
                            type="text"
                            placeholder="pickups"
                            onChange={this.handleChange}
                            value={pickups}
                        />
                    </Form.Group>
                    <Form.Group id="pickups">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            name="image"
                            type="text"
                            placeholder="image"
                            onChange={this.handleChange}
                            value={image}
                        />
                    </Form.Group>
                    <Form.Group id="pickups">
                        <Form.Label>Video(optional)</Form.Label>
                        <Form.Control
                            name="video"
                            type="text"
                            placeholder="video"
                            onChange={this.handleChange}
                            value={video}
                        />
                    </Form.Group>
                    <Button variant="outline-secondary" type="submit">
                        Add guitar
                    </Button>
                </Form>
                <br />
            </div >
        )
    }
}

export default CreateGuitar;