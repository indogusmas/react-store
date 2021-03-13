import React from "react";
import {
  Col,
  FormControl,
  Image,
  ListGroup,
  Row,
  Button,
  ListGroupItem,
  Card,
  Container,
} from "react-bootstrap";
import Header from "../components/Header";
import Message from "../components/Message";

const Cart = () => {
  const stock = 5;
  const products = [
    {
      _id: "1",
      title: "Nike Shoes 01",
      src:
        "https://images.tokopedia.net/img/cache/200-square/product-1/2020/12/11/6673471/6673471_22c3e1d0-6bc4-4ef8-9776-0cacc29683fb.jpeg.webp",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 23,
      colors: ["red", "black", "crimson", "teal"],
      count: 1,
    },
    {
      _id: "2",
      title: "Nike Shoes 02",
      src:
        "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/2/8/fa1a3fde-38f2-4685-a274-9797ce872169.jpg.webp",
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 19,
      colors: ["red", "crimson", "teal"],
      count: 1,
    },
  ];

  return (
    <>
      <Header />
      <Container>
      <Row>
        <Col>
          <h1>Shoop Cart</h1>
        </Col>
        <Message>Your cart is empty</Message>
      </Row>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            {products.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.src} alt={item._id} fluid rounded />
                  </Col>
                  <Col md={2}>{item.price}</Col>
                  <Col md={2}>
                    <FormControl as="select">
                      {[...Array(stock).keys()].map((x) => (
                        <option>{x + 1}</option>
                      ))}
                    </FormControl>
                  </Col>
                  <Col>
                    <Button type="button" variant="danger">
                        
                      <i className="fa fa-trash-o"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h1>Sub total Item</h1>
                1000
              </ListGroup.Item>
              <ListGroupItem>
                <Button type="button" className="btn-block">
                  Proces Check Out
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default Cart;
