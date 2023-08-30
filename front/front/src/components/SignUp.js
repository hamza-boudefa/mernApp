import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import {addNewUser} from "../redux/actions/UsersActions"
const SignUp = () => {
  const [cred, setCred] = useState({})
  console.log(cred)

  const distpatch=useDispatch()
  const handleSignUp=()=>{
    distpatch(addNewUser(cred))
  }

  const {loading,message,error}=useSelector(state=>state.addNewUser)
  return (
    <div>
    {loading && 'loading'}
    {message && <p>{message.message}</p>  }
    {error && <p>{error}</p> }
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
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setCred({...cred,password:e.target.value})} />
        </Col>
      </Form.Group>
      <Button onClick={handleSignUp} >submit</Button>
    </Form>
    </div>
  )
}

export default SignUp