import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
    return (
        <Card className="my-4">
            <Link to='/product-detail'>
            <Card.Body>
                <Card.Img variant="top" src={product.src}/>
                <Card.Title as ='div'>
                    Title Product
                </Card.Title>
                <Card.Text as ='div'>
                    Desription Product
                </Card.Text>
                <Card.Text as = 'div'>
                    Price Product
                </Card.Text>
            </Card.Body>
            </Link>
        </Card>
    )
}

export default Product
