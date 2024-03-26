import { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { Store } from '../Store'
import useSigninMutation from '../hooks/userHooks'
import { getError } from '../utils'
import { toast } from 'react-toastify'
import { ApiError } from '../types/ApiError'
import { Button, Container, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import LoadingBox from '../components/LoadingBox'

const SigninPage = () => {
  const navigate = useNavigate()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { state, dispatch } = useContext(Store)
  const { userInfo } = state

  const { mutateAsync: signin, isLoading } = useSigninMutation()

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      const data = await signin({ email, password })
      console.log('Data', data)
      dispatch({ type: 'USER_SIGNIN', payload: data })
      localStorage.setItem('userInfo', JSON.stringify(data))
      navigate(redirect)
    } catch (err) {
      toast.error(getError(err as ApiError))
    }
  }

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, redirect, userInfo])

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group
          className="mb-3"
          controlId="email"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="password"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button
            disabled={isLoading}
            type="submit"
            variant="primary"
          >
            Sign In
          </Button>
          {isLoading && <LoadingBox />}
        </div>
        <div className="text-center mt-3">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </Form>
    </Container>
  )
}

export default SigninPage
