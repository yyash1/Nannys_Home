import React, { useState } from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar"; // Import Navbar component

import image1 from "../assets/images/img1.jpg";
import image2 from "../assets/images/img2.jpg";
import image3 from "../assets/images/img3.jpg";

const Homepage = () => {
  const [showContactDetails, setShowContactDetails] = useState(false);

  // Define handleContactClick function
  const handleContactClick = () => {
    setShowContactDetails(!showContactDetails); // Toggle showContactDetails state
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar /> {/* Render Navbar component */}
      {/* Image Carousel */}
      <div
        className="image-section"
        style={{ height: "80vh", overflow: "hidden" }}
      >
        <Carousel interval={3000} pause={false} fade>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="First slide" />
            <Carousel.Caption className="text-end">
              <h1>Welcome to Nanny's Home</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <Carousel.Caption className="text-end">
              <h1>Welcome to Nanny's Home</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <Carousel.Caption className="text-end">
              <h1>Welcome to Nanny's Home</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Content */}
      <Container className="my-5 py-5">
        <div className="text-center mb-5">
          <h1>Welcome to Nanny's Home</h1>
          <p className="lead">Baby Day Care Management System</p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <h2 className="text-center mb-4">About Us</h2>
            <p>
              Nanny's Home aims to provide an efficient and user-friendly
              platform for parents, ensuring a secure and nurturing environment
              for the little ones. The combination of React and Java
              technologies ensures a scalable and maintainable solution to meet
              the diverse needs of parents and enhance the overall childcare
              experience.
            </p>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <Link to="/login">
              <Button variant="primary" className="mx-2">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="success" className="mx-2">
                Sign Up
              </Button>
            </Link>
            <Button variant="danger" className="mx-2">
              Logout
            </Button>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="my-5">
          <h2 className="text-center mb-4">Facilities at Nanny's Home</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <h3>Facility 1</h3>
              <p>Feature description goes here...</p>
            </div>
            <div className="col-md-4 mb-4">
              <h3>Facility 2</h3>
              <p>Feature description goes here...</p>
            </div>
            <div className="col-md-4 mb-4">
              <h3>Facility 3</h3>
              <p>Feature description goes here...</p>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        {showContactDetails && (
          <Container>
            <h2 className="text-center mb-4">Contact Details</h2>
            <p>Get answers to all your questions you might have.</p>
            <p>Monday to Saturday from 09:00 A.M. to 07:00 P.M.</p>
            <p>Admissions open. Please contact us for more information.</p>
            <p>Location - Nearby Vicinity of PRIDE WORLD CITY, Ravet</p>
            <p>
              For more info Please Call or Message on +91 7721003742 or +91
              7020479863.
            </p>
          </Container>
        )}

        {/* Call to Action Buttons */}
        <div className="text-center my-5">
          <Button variant="primary" className="mx-2">
            Learn More
          </Button>
          <Button
            variant="secondary"
            className="mx-2"
            onClick={handleContactClick}
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
