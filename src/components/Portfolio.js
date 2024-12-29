import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import image1 from './images/image1.jpeg';  // Replace with your image paths
import image2 from './images/image2.webp';
import image3 from './images/image3.jpg';
import './Portfolio.css';  // Custom CSS

export default function Portfolio() {
   return (
    <>
    {/* Background image and text */}
    <div className="bg-image">
        <img src={image3} className="w-100" alt="Portfolio Background" />
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="d-flex justify-content-left align-items-center h-100">
                <p className="text mb-0">Portfolio</p><br/>
                <p className="mini_content">Thousands of clients across hundreds of industries. Take a look for yourself.</p>
            </div>
        </div>
    </div>

    {/* Portfolio Cards with black background */}
    <MDBContainer className=" bg-black" fluid>
        <MDBRow>
            {/* Card 1 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={image1} alt="Card image 1" position="top" />
                    <MDBCardBody>
                        <MDBCardTitle className="title">Event Management</MDBCardTitle>
                        <MDBCardText>
                        
                        An event management company handling Exhibitions, corporate events 
                        (product launches, conferences), social events (weddings, birthdays), festival decorations,
                         BTL activities, and more. They excel in understanding your goals, developing a detailed
                          event plan, venue selection, vendor management, logistics coordination, marketing 
                          strategy, and on-site management.
                        </MDBCardText>
                        <MDBBtn color="primary">Read More</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 2 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={image2} alt="Card image 2" position="top" />
                    <MDBCardBody>
                        <MDBCardTitle className="title">Retail Chain Branding</MDBCardTitle>
                        <MDBCardText>
                        
                        Tailored Solutions for Your Brand. SAGC provides services related to the creation, production,
                         and customization of printed materials to enhance a client's brand image. Utilizing various printing 
                         techniques to produce a wide range of materials. Designing and producing signs, banners, and displays for
                          both indoor and outdoor use to promote businesses and events.
                        </MDBCardText>
                        <MDBBtn color="primary">Read More</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            {/* Card 3 */}
            <MDBCol md="4" className="mb-4 d-flex justify-content-center">
                <MDBCard className="custom-card">
                    <MDBCardImage src={image3} alt="Card image 3" position="top" />
                    <MDBCardBody>
                        <MDBCardTitle className="title">Outdoor Media Planing</MDBCardTitle>
                        <MDBCardText>
                        Creatofox Outdoor is your one-stop shop for outdoor advertising, including billboards, newspaper ads,
                         and cinema/TV/radio commercials. Their services include understanding your needs, location research,
                          competitor analysis, proposal creation, advertisement design, permitting, production, quality control,
                           installation, maintenance, and post-campaign analysis.
                        </MDBCardText>
                        <MDBBtn color="primary">Read More</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </MDBContainer>

    </>
   );
}
