import React, { useEffect, useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/UsersActions';
import { useNavigate } from 'react-router';
const Login = () => {
  // get login cred from inputs
  const [cred, setCred] = useState({})
  // send cred to loginAction
 const dispatch= useDispatch()
  const handleLogin=()=>{
    dispatch(login(cred))
  }
  // get user from store
  const {loading,user}=useSelector(state=>state.loginDetails)
  // if user exists , redirect to profile page
  const navigate=useNavigate()
useEffect(()=>{
  if(user && user.user._id){
navigate(`/profile/${user.user._id}`)
  }
},[user])

  return (
    <div>
    {loading && 'loading'}
    {user && <h1>{user.message} </h1>}
        <Form>
     <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="exmple@email.com" onChange={(e)=>setCred({...cred,email:e.target.value})} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setCred({...cred,password:e.target.value})}  />
        </Col>
      </Form.Group>
      <Button onClick={handleLogin} >login</Button>
    </Form>
    </div>
  )
}

export default Login