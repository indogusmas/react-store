import { React, useState } from 'react'
import { Col, Form, FormLabel, Row, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FormContainer } from '../components/FormContainer'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <FormContainer chilren="Login">
            <h1>Sign In</h1>
            <Form>
                <Form.Group id='email'>
                    <FormLabel>Email Address</FormLabel>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <FormLabel>Password</FormLabel>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Sign In
                </Button>
            </Form>
            <Row>
                <Col>
                    New Customer ? 
                    <Link to = ''>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default Login
