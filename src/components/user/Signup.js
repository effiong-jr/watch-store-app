import React from 'react';
import { Form, Button} from 'react-bootstrap';
import './index.scss';

const SignUp = (props) => {
    return(
        <div className="formContainer  col-12 col-md-4 offset-md-4">
            <Form>
                <h4 className="text-center">Sign Up</h4>
                <hr />
                <Form.Group>
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control type="text" placeholder="Your Full Name" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Your Email" required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Choose a Password" required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control type="password" placeholder="Repeat Password" required />
                </Form.Group>
                <Button type="submit" block>Sign Up</Button>
            </Form>
        </div>
    )
} 

export default SignUp;