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
import './Homecss.css';

export default function () {
  const [openBasic, setOpenBasic] = useState(false);

  // Toggle the navbar when "Brand" is clicked
  const toggleNavbar = () => {
    setOpenBasic(!openBasic);
  };

  return (
    <MDBNavbar expand='lg' dark bgColor='dark' fixed='top'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' onClick={toggleNavbar}>
          Brand
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded={openBasic ? 'true' : 'false'}
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          {/* Apply 'ms-auto' directly to MDBNavbarNav */}
          <MDBNavbarNav className='ms-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page'>
                <Link className="navbar-link" to="/">Home</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link className="navbar-link" to="/">About Us</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link className="navbar-link" to="/">Clients</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link className="navbar-link" to="/">Contact Us</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
