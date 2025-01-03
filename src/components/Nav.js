import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import './Nav.css';
import logo from './images/SAKAR_LOGO.png';

export default function () {
  const [openBasic, setOpenBasic] = useState(false);

  // Toggle the navbar when "hamburger" icon is clicked
  const toggleNavbar = () => {
    setOpenBasic(!openBasic);
  };

  return (
    <MDBNavbar expand='lg' dark bgColor='dark' fixed='top'>
      <MDBContainer fluid>
        {/* Logo Section */}
        <MDBNavbarBrand href='#'>
          <img
            src={logo}
            height='45'
            alt='Logo'
            loading='lazy'
          />
        </MDBNavbarBrand>

        {/* Hamburger Toggler Icon - On smaller screens, the hamburger will appear on the right */}
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded={openBasic ? 'true' : 'false'}
          aria-label='Toggle navigation'
          onClick={toggleNavbar}
          className="ms-auto" // Ensures the toggler is aligned to the right
        >
          {/* Change the color of the hamburger icon here */}
          <MDBIcon icon='bars' fas className='hamburger' /> {/* You can replace the color here */}
        </MDBNavbarToggler>

        {/* Navbar Collapse Section */}
        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='ms-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page'>
                <Link className="navbar-link" to="/">Home</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link className="navbar-link" to="/about">About Us</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link className="navbar-link" to="/clients">Clients</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link className="navbar-link" to="/portfolio">Portfolio</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link className="navbar-link" to="/contact">Contact Us</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
