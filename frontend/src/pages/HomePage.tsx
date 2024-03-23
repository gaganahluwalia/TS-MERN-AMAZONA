import { Col, Row } from 'react-bootstrap'
import { Product } from '../types/Product'
import { getError } from '../utils'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHooks'
import { ApiError } from '../types/ApiError'

const HomePage = () => {
  const { data: products, error, isLoading: loading } = useGetProductsQuery()

  if (loading) {
    return <LoadingBox />
  }

  if (error) {
    return (
      <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
    )
  }

  return (
    <Row>
      <Helmet>
        <title>TS Amazona</title>
      </Helmet>
      {products!.map((product: Product) => (
        <Col
          key={product.slug}
          sm={6}
          md={4}
          lg={3}
        >
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  )

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>TS Amazona</title>
      </Helmet>
      {products.map(product => (
        <Col
          key={product.slug}
          sm={6}
          md={4}
          lg={3}
        >
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default HomePage
