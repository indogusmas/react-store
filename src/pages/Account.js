import {useState,useEffect} from 'react'
import { 
    Row,
    Col,
    Container,
    Form,
    FormLabel,
    FormControl,
    Card,
    FormGroup,
    Table
 } from 'react-bootstrap'
import Message from '../components/Message'
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap'

const Account = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;
    
    useEffect(() =>{
        console.log(userInfo);
        if(userInfo){
            setEmail(userInfo.email)
        }
    },[userInfo]);


    return (
        <div>
            <Header/>
            <Container className="mt-4 border">
            <Row className="justify-content-md-center">
            <Col md={3} className="p-4">
                <h2>User Profile</h2>
                { message && <Message variant='danger' children={message}/>}
                {}
                <Form>
                    <Form.Group>
                        <FormLabel>
                            Email
                        </FormLabel>
                        <FormControl
                        
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        /> 
                    </Form.Group>
                    <FormGroup>
                        <FormLabel>
                            Password
                        </FormLabel>
                        <FormControl
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <Button type='submit'>
                        Update Data
                    </Button>
                </Form>  
            </Col>
            <Col md={9} className='p-4'>
                <h2>My Order</h2>
                <Table>
                    <thead>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Delivery</th>
                        <th></th>
                    </thead>
                </Table>
            </Col>
        </Row>
        </Container>
    
        </div>
        )
}

export default Account
