import { Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { Store } from './Store'
import { useContext } from 'react'

function App() {
  const {
    state: { userInfo },
    dispatch,
  } = useContext(Store)

  const signoutHandler = () => {
    dispatch({ type: 'LOGOUT' })
    localStorage.removeItem('userInfo')
    window.location.href = '/signin'
  }

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
              {userInfo ? (
                <NavDropdown
                  title={userInfo.name}
                  id="username"
                >
                  <Link
                    onClick={signoutHandler}
                    className="dropdown-item"
                    to="#signout"
                  >
                    Sign Out
                  </Link>
                </NavDropdown>
              ) : (
                <Link
                  to="/signin"
                  className="nav-link"
                >
                  Sign In
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer className="text-center">
        <div>All rights reserved</div>
      </footer>
    </div>
  )
}

export default App
