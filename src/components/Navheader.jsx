import React from 'react'
import { Navbar,Container,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { DomainApi } from '../Domain/useApi';
import logo1 from  './images/logo1.png'
import logo2 from  './images/logo2.png'
import ContactForm from './ContactForm';

const Navheader = (props) => {
  
  const showContact=()=>{
    let modal = document.getElementById("contact_modal")
    // modal.style.display="flex";
    modal.style.visibility="visible";
    console.log("hello");
  }
  const closeContact=()=>{
    let modal = document.getElementById("contact_modal")
    // modal.style.display="flex";
    modal.style.visibility="hidden";
    console.log("hello");
  }

  return (
      <Navbar id='NavHeader' className={props.classname} expand="lg" >
        <Container >
          <Navbar.Brand href="#home" className="d-block">
          <Link to="/"><div className="logo">
              <img className="logo1" src={logo1} alt=""/>
              <img className="logo2"src={logo2} alt=""/>
              {/* <img style={{height:"50px"}} src={siteLogo} /> */}
              {/* <h1 className='mb-0 mx-2'>{siteName}</h1> */}
            </div></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {/* <Nav className="">
                <Nav.Link href="#home">Home</Nav.Link >
                <Nav.Link href="">About</Nav.Link>
                <Nav.Link href="#Services">Services</Nav.Link>
                <Nav.Link href="#Gallery"> Products</Nav.Link>
              </Nav> */}
              <Link to="/"> Home </Link>
              <Link to="/about"> About </Link>
              <Link to="/services"> Services </Link>
              <Link className="hh" to="/products"> Products </Link>
              <div className='enquire_button'>
                <Button onClick={() => showContact()}>Make an enquiery </Button>
                </div>
                {/* <Button > Make an enquiery</Button> */}
              
          </Navbar.Collapse>
                {/* {<ContactForm/>}  */}

        </Container>
        <div className="modal" id="contact_modal">
          <span className='close_button' onClick={() => closeContact()}>X</span>
          {<ContactForm/>} 
        </div>
      </Navbar>
    
  )
}

export default Navheader
