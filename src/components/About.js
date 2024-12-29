import React from 'react';
import { MDBContainer, MDBRow, MDBCol, 
  MDBBtn, MDBCard, MDBCardBody, MDBCardText,MDBCardTitle
} from 'mdb-react-ui-kit';
import './About.css';
import  { useState } from "react";
import image from './images/image3.jpg'
import image2 from './images/chart.png'



// CounterCard Component
function CounterCard({ title, initialValue, limit }) {
  const [count, setCount] = React.useState(initialValue);

  React.useEffect(() => {
    if (count < limit) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 5);

      return () => clearInterval(interval);
    }
  }, [count, limit]);

  return (
    <center>
      <MDBCard className="text-center mb-4 custom-card" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}>
        <MDBCardBody className="custom-card-body">
          <MDBCardText>
            <h3>{count}</h3>
          </MDBCardText>
          <MDBCardTitle>{title}</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
    </center>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState("purpose");
    return (
        <>
        
      <div className='bg-image'>
      <img src={image} className='w-100' alt='Sample' />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <div className='d-flex justify-content-left align-items-center h-100'>
          <p className='text mb-0'>About Us</p>
        </div>
      </div>
    </div>
 <MDBContainer fluid className='about-container'>
  <MDBRow>
    <MDBCol md="6">
    <p className='heading_text'>Who We Are</p>
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
          color={activeTab === "purpose" ? "info" : "dark"}
          className="me-2"
          onClick={() => setActiveTab("purpose")}
        >
          Core Purpose
        </MDBBtn>
        <MDBBtn
          color={activeTab === "values" ? "info" : "dark"}
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
      <MDBBtn outline color="info" href="#">
                          Company Profile
      </MDBBtn>

      
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

    {/* Cards Section */}
    <MDBContainer className='cardSection mt-5'>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <CounterCard title="Years Of Experience" initialValue={0} limit={5} />
                </MDBCol>
                <MDBCol sm="12" md="4">
                  <CounterCard title="Project Completed" initialValue={50} limit={150} />
                </MDBCol>
                <MDBCol sm="12" md="4">
                  <CounterCard title="Happy Clients" initialValue={150} limit={500} />
                </MDBCol>
              </MDBRow>
            </MDBContainer >

            <MDBContainer className="img d-flex justify-content-center align-items-center">
              <img src={image2} className="brading_smartart w-45" alt="Image" />
            </MDBContainer>

            <MDBContainer className="d-flex justify-content-center align-items-center">
            
             <div className="marquee-text">
             EVENT MANAGEMENT / RETAIL CHAIN BRANDING / OUTDOOR MEDIA PLANING
        </div>
      
    </MDBContainer>

    <MDBContainer className="d-flex justify-content-center align-items-center">
            
             <div className="marquee-text2">
             EVENT MANAGEMENT / RETAIL CHAIN BRANDING / OUTDOOR MEDIA PLANING
        </div>
      
    </MDBContainer>

 </MDBContainer>
 </>       
       
    );
}


 
            
