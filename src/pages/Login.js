import { React, useEffect, useState } from 'react'
import { Col, Form, FormLabel, Row, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FormContainer } from '../components/FormContainer'
import {useDispatch,useSelector} from 'react-redux';
import { login } from '../action/UserAction';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin);

    const redirect = window.location.search ? window.location.search.split('=')[1] : '/'

    const history = useHistory();


    const { loading, error, userInfo} =  userLogin;
    

    useEffect(() =>{
        if(userInfo){
            history.push(redirect)
        }
    },[redirect,userInfo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email,password))
    }


    return (
        <FormContainer chilren="Login">
            <h1>Sign In</h1>
            <Form onSubmit={handleSubmit}>
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
