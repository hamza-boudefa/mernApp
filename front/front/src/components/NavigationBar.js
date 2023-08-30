import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/UsersActions'

const NavigationBar = () => {
const {user}=useSelector(state=>state.loginDetails)  
console.log(user)
const dispatch=useDispatch()
const handleLogout=()=>{
  dispatch(logout())
}
  return (
    <div>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
         {user&& user.user._id? <Link to={`/profile/${user.user._id}`} >
            Profile
            </Link>: <Link to='/login' >
            Login
            </Link>}
           
            {user && user.user._id? <Button onClick={handleLogout} >Logout</Button>:
            <Link to='/signup' >
            Signup
            </Link>}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar