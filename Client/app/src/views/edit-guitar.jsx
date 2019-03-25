import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import guitarService from '../services/guitar-service';

class EditGuitar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            guitarModelName: '',
            head: '',
            image: '',
            neck: '',
            body: '',
            price: '',
            pickups: '',
            video: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        guitarService.getGuitarById(this.props.match.params.guitarId)
            .then(res => {
                if (res.status === 200) {
                    res.json().then(data => {
                        const guitar = {
                            guitarModelName: data.result.guitarModelName,
                            head: data.result.head,
                            image: data.result.image,
                            neck: data.result.neck,
                            body: data.result.body,
                            price: data.result.price,
                            pickups: data.result.pickups,
                            video: data.result.video
                        };

                        this.setState(guitar);
                    });
                } else {
                    res.json().then(err => {
                        console.log(err.message);
                    });
                }
            });
    }

    handleChange(e) {
        const change = {};
        change[e.target.name] = e.target.value;
        this.setState(change);
    }

    handleSubmit(e) {
        e.preventDefault();

        const guitar = {
            guitarModelName: this.state.guitarModelName,
            head: this.state.head,
            image: this.state.image,
            neck: this.state.neck,
            body: this.state.body,
            price: this.state.price,
            pickups: this.state.pickups,
            video: this.state.video
        };
        const guitarId = this.props.match.params.guitarId

        guitarService.editGuitarById(guitarId, guitar)
            .then(res => {
                if (res.status === 200) {
                    res.json().then(data => {
                        this.props.history.push(`/edit/${guitarId}`);

                        window.location.replace('http://localhost:3000/all');
                    });
                } else {
                    res.json().then(err => {
                        console.log(err.message);
                    });
                }
            });
    }

    render() {
        return (
            <div className="container mt-3 wrapper">
                <h1 className="display-1 mb-5">Edit guitar here</h1>
                <Form onSubmit={this.handleSubmit} id="bdr" className="form">
                    <Form.Group id="guitarModelName">
                        <Form.Label>Model name</Form.Label>
                        <Form.Control
                            name="guitarModelName"
                            placeholder="model name"
                            type='text'
                            value={this.state.guitarModelName}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group id="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            name="price"
                            type="number"
                            min='100'
                            placeholder="Enter price"
                            value={this.state.price}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group id="head">
                        <Form.Label>Head(material)</Form.Label>
                        <Form.Control
                            name="head"
                            type="text"
                            placeholder="head"
                            value={this.state.head}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group id="body">
                        <Form.Label>Body(material)</Form.Label>
                        <Form.Control
                            name="body"
                            type="text"
                            placeholder="body"
                            value={this.state.body}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group id="neck">
                        <Form.Label>Neck(material)</Form.Label>
                        <Form.Control
                            name="neck"
                            type="text"
                            placeholder="neck"
                            value={this.state.neck}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group id="pickups">
                        <Form.Label>Pickups</Form.Label>
                        <Form.Control
                            name="pickups"
                            type="text"
                            placeholder="pickups"
                            value={this.state.price}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group id="image">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            name="image"
                            type="text"
                            placeholder="image"
                            value={this.state.image}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group id="video">
                        <Form.Label>Video</Form.Label>
                        <Form.Control
                            name="video"
                            type="text"
                            placeholder="video"
                            value={this.state.video}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button variant="outline-warning" type="submit">
                        Edit Guitar
                    </Button>
                </Form>
                <br />
            </div >
        )
    }
}

export default EditGuitar;