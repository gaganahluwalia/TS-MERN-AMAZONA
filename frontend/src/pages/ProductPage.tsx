import { Helmet } from 'react-helmet-async'
import { useGetProductDetailsBySlugQuery } from '../hooks/productHooks'
import { useParams } from 'react-router-dom'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { getError } from '../utils'
import { ApiError } from '../types/ApiError'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Badge,
  Button,
} from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductPage = () => {
  const { slug } = useParams()
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsBySlugQuery(slug!)

  // rest of the code...

  if (isLoading) {
    return <LoadingBox />
  }

  if (error) {
    return (
      <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
    )
  }

  if (!product) {
    return <MessageBox variant="danger">Product not found</MessageBox>
  }

  return (
    <div>
      <Helmet>
        <title>Product Page</title>
      </Helmet>

      <Row>
        <Col md={6}>
          <Image
            className="large"
            src={product?.image}
            alt={product?.name}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product?.name}</title>
              </Helmet>
              <h2>{product?.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product?.rating}
                numReviews={product?.numReviews}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product?.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: <p>{product?.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product?.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Out of Stock</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product?.price}</Col>
                  </Row>
                </ListGroup.Item>

                {product?.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">Add to Cart</Button>
                    </div>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button variant="outline-primary">Add to Wishlist</Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductPage
