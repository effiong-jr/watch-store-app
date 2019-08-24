import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './index.scss';

const Login = (props) => {
    return (
        <div className=" formContainer col-12 col-md-4 offset-md-4">
            <Form>
                <h4 className="text-center">Login</h4>
                <hr />
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type='email' placeholder="Your Email Address" required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" required/>
                </Form.Group>

                <Button type="submit" block>Login</Button>
            </Form>
        </div>
    )
}


export default Login;