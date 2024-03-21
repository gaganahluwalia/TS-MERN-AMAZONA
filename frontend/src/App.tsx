import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { sampleProducts } from './data'

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar
          bg="dark"
          variant="dark"
          expand="lg"
        >
          <Container>
            <Navbar.Brand>tsamazona</Navbar.Brand>
          </Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="/cart"
                className="nav-link"
              >
                Cart
              </Nav.Link>
              <Nav.Link
                href="/signin"
                className="nav-link"
              >
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* <Nav>
            <a
              href="/cart"
              className="nav-link"
            >
              Cart
            </a>
            <a
              href="/signin"
              className="nav-link"
            >
              Sign In
            </a>
          </Nav> */}
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Row>
            {sampleProducts.map(product => (
              <Col
                key={product.slug}
                sm={6}
                md={4}
                lg={3}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h2>{product.name}</h2>
                <p>£{product.price}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <footer className="text-center">
        <div>All rights reserved</div>
      </footer>
    </div>
  )
}

export default App
