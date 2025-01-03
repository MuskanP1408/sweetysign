import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import image3 from './images/image3.jpg';
import './Contact.css'; // Custom CSS

export default function Contact() {
  const [selectedService, setSelectedService] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log({ ...data, service: selectedService });
    alert('Form submitted successfully!');
    reset(); // Reset the form
    setSelectedService(''); // Reset the dropdown
  };

  const handleServiceChange = (event) => {
    const value = event.target.value;
    setSelectedService(value);
    setValue('service', value, { shouldValidate: true });
  };

  return (
    <>
      {/* Background image and text */}
      <div className="bg-image">
        <img src={image3} className="w-100" alt="Portfolio Background" />
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <div className="d-flex justify-content-left align-items-center h-100">
            <p className="text1 mb-0">Get in Touch</p>
            <br />
            <p className="mini_content_contact">
              We have all the time in the world to answer. Just drop us a line. We will come back
              to you in 24 hours, flat. That’s our word. Contact us, Call us, Mail us, Get in Touch
              with us, or drop by for a cup of coffee. The options are unlimited.
            </p>
          </div>
        </div>
      </div>

      <MDBContainer fluid className="about-container">
        <p className="heading_text">Contact</p>
        <h1>Reach Out for Expert Advice</h1>

        <MDBRow className="form justify-content-left">
          <MDBCol md="6" className=" text-white p-4 rounded">
           
            <form onSubmit={handleSubmit(onSubmit)}>
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    label="First Name"
                    id="firstName"
                    type="text"
                    contrast
                    {...register('firstName', { required: 'First Name is required' })}
                  />
                  {errors.firstName && (
                    <small className="text-danger">{errors.firstName.message}</small>
                  )}
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    label="Last Name"
                    id="lastName"
                    type="text"
                    contrast
                    {...register('lastName', { required: 'Last Name is required' })}
                  />
                  {errors.lastName && (
                    <small className="text-danger">{errors.lastName.message}</small>
                  )}
                </MDBCol>
              </MDBRow>

              <MDBInput
                label="Email"
                id="email"
                type="email"
                contrast
                className="mt-3"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && <small className="text-danger">{errors.email.message}</small>}

              <MDBInput
                label="City"
                id="city"
                type="text"
                contrast
                className="mt-3"
                {...register('city', { required: 'City is required' })}
              />
              {errors.city && <small className="text-danger">{errors.city.message}</small>}

              <MDBInput
                label="Phone Number"
                id="phoneNumber"
                type="tel"
                contrast
                className="mt-3"
                {...register('phoneNumber', {
                  required: 'Phone Number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Phone Number must be 10 digits',
                  },
                })}
              />
              {errors.phoneNumber && (
                <small className="text-danger">{errors.phoneNumber.message}</small>
              )}

              {/* Custom Dropdown */}
              <select
                className="form-select mt-3"
                value={selectedService}
                onChange={handleServiceChange}
              >
                <option value="" disabled>
                  Select a Service
                </option>
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="Web Development">Digital Marketing</option>
                <option value="SEO Services">Event Management</option>
              </select>
              {errors.service && <small className="text-danger">Please select a service</small>}

              <MDBInput
                label="Comment or Message"
                id="message"
                type="textarea"
                rows="4"
                contrast
                className="mt-3"
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && <small className="text-danger">{errors.message.message}</small>}

              <div className="text-center mt-4 justify-content-left">
                <MDBBtn type="submit" className='submit_btn'>
                  Submit
                </MDBBtn>
              </div>
            </form>
          </MDBCol>

          <MDBCol md="6">
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
