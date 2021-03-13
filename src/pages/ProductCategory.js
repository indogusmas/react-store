import React from "react";
import { Card, Col, Container, Row, Button, Breadcrumb } from "react-bootstrap";
import Header from "../components/Header";
import Product from "../components/Product";

const ProductCategory = () => {
    const products = [
        {
            "_id": "1",
            "title": "Nike Shoes 01",
            "src": "https://images.tokopedia.net/img/cache/200-square/product-1/2020/12/11/6673471/6673471_22c3e1d0-6bc4-4ef8-9776-0cacc29683fb.jpeg.webp",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 23,
            "colors": ["red", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "2",
            "title": "Nike Shoes 02",
            "src": "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/2/8/fa1a3fde-38f2-4685-a274-9797ce872169.jpg.webp",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 19,
            "colors": ["red", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "3",
            "title": "Nike Shoes 03",
            "src": "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/12/4/dd7f5016-41df-4bed-839f-ab1032c68691.jpg.webp",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 50,
            "colors": ["lightblue", "white", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "4",
            "title": "Nike Shoes 04",
            "src": "https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2021/3/1/9684e32f-6739-4295-9ed6-8ab9d5d40fe2.jpg.webp",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 15,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "5",
            "title": "Nike Shoes 05",
            "src": "https://images.tokopedia.net/img/cache/200-square/product-1/2020/8/15/13447630/13447630_291de92a-4dfa-448c-bcbe-b97ef358b0d9_720_720.webp",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 10,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "6",
            "title": "Nike Shoes 06",
            "src": "https://images.tokopedia.net/img/cache/200-square/product-1/2020/8/4/387156715/387156715_181ba6ab-7527-449e-a7bf-0dab2cd1692d_687_687.jpg.webp",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 17,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        }
    ];
  return (
    <div>
      <Header />
      <Container border="primary">
        <Row className="m-2">
          <Col md={3} className="border">
            <p className="text-center">Category</p>
            <hr />
            <p className="text-center">Category 1</p>
            <p className="text-center">Category 2</p>
            <p className="text-center">Category 3</p>
            <p className="text-center">Category 4</p>
            <p className="text-center">Category 5</p>
            <p className="text-center">Category 6</p>
          </Col>
          <Col md={9}>
            <Row className="p-2">
                <Container className="bg-light">
                    <Col>
                    Sort by
                    </Col>
                </Container>
            </Row>
            <Row>
            {
                       products.map((product) => (
                           <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                               <Product product={product}/>
                           </Col>
                       ))
                   }
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductCategory;
