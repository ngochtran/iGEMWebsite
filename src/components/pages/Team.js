import React, { useState, useEffect } from "react";
import { Carousel, Modal, Card, Button } from "react-bootstrap";
import { membersInfo } from "../data/Members.js"
import { mentorInfo } from "../data/Mentors.js"
import Template from "../Template2";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faLinkedin);

function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://static.igem.wiki/teams/4951/wiki/team-photos/fullteam-c.jpg",
    "https://static.igem.wiki/teams/4951/wiki/team-photos/teamphoto1-c.jpg",
    "https://static.igem.wiki/teams/4951/wiki/team-photos/teamphoto2-pho-edit-c.jpg",
    "https://static.igem.wiki/teams/4951/wiki/team-photos/mentorphotos1-c4.jpg", 
    "https://static.igem.wiki/teams/4951/wiki/team-photos/mentorphoto2-c.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img src={image} alt={`Slide ${idx}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

function Team() {
  const initialState = Object.fromEntries(
    membersInfo.map((member) => [member.name, false])
  );

  const [modalShow, setModalShow] = useState(initialState)
  const toggleShow = (id) =>
    setModalShow((prev) => {
      return { ...prev, [id]: !prev[id] };
    });

  return (
    <Template title="Meet Our Team">
      <div class="slideshow">
        <div class="text-overlay">
          <h1 id="team-title">Meet the Stanford iGEM Team</h1>
          <p id="team-caption">The team consists of eight members<br></br> from diverse backgrounds and fields of study.</p>
        </div>
        <div class="carousel">
          <ImageCarousel />
        </div>
      </div>
      <div className="row member-cards">
        <h1 className="card-heading">Team Members</h1>
        {membersInfo.map((member, key) => {
          return (
            <div className="col-lg-3" key={key}>
              <Card className="student-card" onClick={() => {toggleShow(member.name)}}>
                <div className="card-photo">
                  <Card.Img variant="top card-front" src={member.img.src} alt={member.img.alt} />
                  <Card.Img variant="top card-back" src={member.imgFun.src} alt={member.imgFun.alt} />
                </div>
                <Card.Body>
                  <div className="card-content">
                    <div className="card-text-container">
                      <Card.Title><span style={{ fontWeight: "bold" }}>{member.name}</span></Card.Title>
                      <Card.Text>{member.year}</Card.Text>
                    </div>
                    <div className="card-buttons">
                      <a href={`mailto:${member.email}`} onClick={(e) => e.stopPropagation()}>
                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                      </a>
                      <a href={member.linkedin} onClick={(e) => e.stopPropagation()}>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Modal
                  show={modalShow[member.name]}
                  onHide={() => toggleShow(member.name)}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      {member.name} <span style={{ fontWeight: 300 }}> | {member.year} </span>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="row">
                      <div className="col"><img className="img-fluid" src={member.img.src} alt={member.img.alt}/></div>
                      <div className="col"><p>{member.bio}</p></div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
          )
        })}
      </div>
      <div className="row mentor-cards">
        <h1 className="card-heading">Faculty & Coordinators</h1>
        {mentorInfo.map((member, key) => {
          return (
            <div className="col-md-3" key={key}>
              <Card className="mentor-card" onClick={() => {toggleShow(member.name)}}>
                <div className="card-photo">
                  <Card.Img variant="top card-front" src={member.img.src} alt={member.img.alt} />
                  <Card.Img variant="top card-back" src={member.imgFun.src} alt={member.imgFun.alt} />
                </div>
                <Card.Body>
                  <div className="mentor-card-content">
                    <div className="card-text-container mentor-text">
                      <Card.Title><span style={{ fontWeight: "bold" }}>{member.name}</span></Card.Title>
                      <Card.Text>{member.role}</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Modal
                  show={modalShow[member.name]}
                  onHide={() => toggleShow(member.name)}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      {member.name} <span style={{ fontWeight: 300 }}> | {member.role} </span>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="row">
                      <div className="col"><img className="img-fluid" src={member.img.src} alt={member.img.alt}/></div>
                      <div className="col"><p>{member.bio}</p></div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
          )
        })}
      </div>
    </Template>
  );
}

export default Team;