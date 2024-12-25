import React from 'react';
import { MDBContainer, MDBRow, MDBCol, 
  MDBBtn, MDBCard, MDBCardBody
} from 'mdb-react-ui-kit';
import './About.css';
import  { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("purpose");
    return (
        <>
        
      <div className='bg-image'>
      <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-left align-items-center h-100'>
          <p className='text mb-0'>About Us</p>
        </div>
      </div>
    </div>
 <MDBContainer fluid className='about-container'>
  <MDBRow>
    <MDBCol md="6">
    <p>Who We Are</p>
    <h1>The Age Of Innovation</h1>
    <div className='para1'> 
    Creatofox (formerly Shyam Art) has been a leading company providing services in the sector of Exhibition,
     Event Management, Below-The-Line (BTL) activations, campaign strategies and digital marketing since 2005.
     We’re a one-stop shop for all your brand development needs, taking your vision from concept to execution.
    </div>


    {/* //----------------------// */}

    <MDBContainer className="d-flex flex-column align-items-left mt-4">
      <div className="d-flex mb-2">
        <MDBBtn
          color={activeTab === "purpose" ? "warning" : "dark"}
          className="me-2"
          onClick={() => setActiveTab("purpose")}
        >
          Core Purpose
        </MDBBtn>
        <MDBBtn
          color={activeTab === "values" ? "warning" : "dark"}
          onClick={() => setActiveTab("values")}
        >
          Core Values
        </MDBBtn>
      </div>

      <MDBCard style={{ maxWidth: "500px", backgroundColor: "#000", color: "#fff" }}>
        <MDBCardBody>
          {activeTab === "purpose" && (
            <div className="box_text">
              To boost your Brand value & create your distinct identity, we serve you with
              innovative ideas, having highly professional & qualitative service with flawless
              execution.
            </div>
          )}
          {activeTab === "values" && (
              <div className="box_text">
              Our core values are innovation, professionalism, and delivering qualitative
              service with flawless execution.
            </div>
          )}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>


    {/* //---------------------// */}
    </MDBCol>
    <MDBCol md="6">
    <MDBRow className="d-flex justify-content-center align-items-center">
                <div className="horizontal-lines d-flex">
                   <div className="line small"></div>
                    <div className="line large"></div>
                    <div className="line small"></div>
                    <div className="line large"></div>
                    <div className="line small"></div>
                </div>
            </MDBRow> 
    </MDBCol>
  </MDBRow>
   
 </MDBContainer>
 </>


                    
           
       
    );
}


 
            
