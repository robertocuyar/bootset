import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const InitialPage = ()=>{

    return (
        <Container id={"sample-page"} className={"m-5"}>
            <Row>
                <Col>
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="#">Your Page Here!</Navbar.Brand>
                </Navbar>
                </Col>
            </Row>
            <Row>
                <Col>
            <Jumbotron fluid>
                <Container>
                    <h1>Your Page Here!</h1>
                    <p>
                        Check it out!
                    </p>
                </Container>
            </Jumbotron>
                </Col>
            </Row>
            <Row className={"mb-4"}>
               <Col>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="button">
                    Submit
                </Button>
            </Form>
               </Col>
            </Row>
            <Row>
                <Col>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
                </Col>
            </Row>

        </Container>
    )
}

export default InitialPage;