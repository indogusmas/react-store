import { Breadcrumb, Col, Container,
     Image, ListGroup,
     Row,Card, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Header from '../components/Header'

const ProductDetail = () => {
    const stock = 5;
    return (
        <div>
            <Header/>
            <Container>
                <Breadcrumb className="p-2">
                <Breadcrumb.Item>
                <Link to="/">Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/product-category">
                    Product 
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    Product Detail 
                </Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                <Row>
                    <Col md={6}>
                        <Card>
                        <Image src="https://cf.shopee.co.id/file/5351901dee19af8016bda4bc6f8e9480" width="400"></Image>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>Product Name</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Product Price
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card className="m-2">
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price: </Col>
                                        <Col>
                                        <strong>10000</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                        <FormControl
                                        as='select'>
                                            {
                                                [...Array(stock).keys()].map(
                                                    (x) => (
                                                        <option>
                                                            {x+1}
                                                        </option>
                                                    )
                                                )
                                            }
                                        </FormControl>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button>
                                        Add To Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
    
                </Card>
            </Container>
        </div>
    )
}

export default ProductDetail
