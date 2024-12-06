import React, { useState } from 'react';
import './Homecss.css'; // Ensure your CSS for bubbles and other styles is correctly linked
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';

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

// Home Component
export default function Home() {
  const [bounce, setBounce] = useState(false);

  const handleMouseEnter = () => {
    setBounce(true); // Trigger bounce effect on mouse enter
    setTimeout(() => setBounce(false), 1000); // Remove the class after animation completes (1s)
  };

  return (
    <div>
      {/* Background Image */}
      <div className="bg-image">
        <img
          src="https://mdbootstrap.com/img/new/standard/city/053.webp"
          className="w-100"
          alt="Sample"
        />
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <MDBContainer>
              <MDBRow className='logo_name'>
                <MDBCol sm="12" md="8">
                  <h1>
                    <i
                      className={bounce ? 'bounce' : ''}
                      onMouseEnter={handleMouseEnter} // Trigger bounce on hover
                    >
                      WELCOME TO
                    </i> 
                    <br />
                    Your Project Name
                  </h1>
                </MDBCol>
                <MDBCol sm="12" md="4">
                  <h4>Creatofox is a Comprehensive Marketing Company</h4>
                  <MDBBtn outline color="warning" href="#">
                    Company Profile
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <MDBContainer className='cardSection' fluid>
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
      </MDBContainer>
    </div>
  );
}
