import React from 'react'
import { Product } from '../types/Product'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <Card.Img
          src={product.image}
          variant="top"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        />
        <Card.Text as="h3">${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button disabled>Out of Stock</Button>
        ) : (
          <Button>Add to Cart</Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProductItem
